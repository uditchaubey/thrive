const pool = require("./db");

const slugify = (text) =>
    text
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const normaliseTags = (tags) => {
    if (Array.isArray(tags)) return tags.map((t) => String(t).trim()).filter(Boolean);
    if (typeof tags === "string") return tags.split(",").map((t) => t.trim()).filter(Boolean);
    return [];
};

// GET /api/resources?search=sleep&category=Stress
// Fetch all resources, optionally searched and/or filtered by category
const getResources = async (req, res) => {
    try {
        const { search, category } = req.query;

        const conditions = [];
        const values = [];

        if (search && search.trim()) {
            values.push(`%${search.trim()}%`);
            const i = values.length;
            conditions.push(
                `(title ILIKE $${i}
                  OR description ILIKE $${i}
                  OR category ILIKE $${i}
                  OR EXISTS (SELECT 1 FROM unnest(tags) t WHERE t ILIKE $${i}))`
            );
        }

        if (category && category.trim() && category.toLowerCase() !== "all") {
            values.push(category.trim().toLowerCase());
            const i = values.length;
            conditions.push(
                `(LOWER(category) = $${i}
                  OR EXISTS (SELECT 1 FROM unnest(tags) t WHERE LOWER(t) = $${i}))`
            );
        }

        const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

        const result = await pool.query(
            `SELECT * FROM resources ${where} ORDER BY available DESC, id ASC`,
            values
        );

        res.json({ count: result.rows.length, resources: result.rows });
    } catch (error) {
        console.error("Get resources error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// GET /api/resources/:id
const getResourceById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            return res.status(400).json({ message: "Invalid resource id" });
        }

        const result = await pool.query("SELECT * FROM resources WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.json({ resource: result.rows[0] });
    } catch (error) {
        console.error("Get resource error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// POST /api/resources
const createResource = async (req, res) => {
    try {
        const { title, description, category, tags, type, icon, icon_style, path, available } = req.body;

        if (!title || !description || !category) {
            return res.status(400).json({
                message: "Title, description and category are required",
            });
        }

        const slug = req.body.slug ? slugify(req.body.slug) : slugify(title);

        const existing = await pool.query("SELECT id FROM resources WHERE slug = $1", [slug]);
        if (existing.rows.length > 0) {
            return res.status(409).json({ message: "A resource with this title already exists" });
        }

        const result = await pool.query(
            `INSERT INTO resources
                (title, slug, description, category, tags, type, icon, icon_style, path, available)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
             RETURNING *`,
            [
                title,
                slug,
                description,
                category,
                normaliseTags(tags),
                type || "Guide",
                icon || null,
                icon_style || null,
                path || null,
                Boolean(available),
            ]
        );

        res.status(201).json({ message: "Resource created", resource: result.rows[0] });
    } catch (error) {
        console.error("Create resource error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// PUT /api/resources/:id  (only the fields sent are changed)
const updateResource = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            return res.status(400).json({ message: "Invalid resource id" });
        }

        const allowed = ["title", "slug", "description", "category", "tags", "type", "icon", "icon_style", "path", "available"];
        const sets = [];
        const values = [];

        for (const field of allowed) {
            if (req.body[field] === undefined) continue;

            let value = req.body[field];
            if (field === "tags") value = normaliseTags(value);
            if (field === "slug") value = slugify(value);
            if (field === "available") value = Boolean(value);

            values.push(value);
            sets.push(`${field} = $${values.length}`);
        }

        if (sets.length === 0) {
            return res.status(400).json({ message: "No fields to update" });
        }

        values.push(id);

        const result = await pool.query(
            `UPDATE resources SET ${sets.join(", ")} WHERE id = $${values.length} RETURNING *`,
            values
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.json({ message: "Resource updated", resource: result.rows[0] });
    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({ message: "Slug already in use" });
        }
        console.error("Update resource error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// DELETE /api/resources/:id
const deleteResource = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!Number.isInteger(id)) {
            return res.status(400).json({ message: "Invalid resource id" });
        }

        const result = await pool.query("DELETE FROM resources WHERE id = $1 RETURNING id", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Resource not found" });
        }

        res.json({ message: "Resource deleted" });
    } catch (error) {
        console.error("Delete resource error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
};
