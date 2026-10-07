const pool = require("./db");

// 1. Create the resources table
const createResourcesTable = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS resources (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            slug VARCHAR(255) UNIQUE NOT NULL,
            description TEXT NOT NULL,
            category VARCHAR(100) NOT NULL,
            tags TEXT[] NOT NULL DEFAULT '{}',
            type VARCHAR(50) NOT NULL DEFAULT 'Guide',
            icon VARCHAR(50),
            icon_style VARCHAR(150),
            path VARCHAR(255),
            available BOOLEAN NOT NULL DEFAULT FALSE,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `);
};

// 2. Initial resource data (inserted only if the slug does not exist yet)
const seedResources = [
    {
        title: "Stress & Overwhelm",
        slug: "stress-and-overwhelm",
        description: "Understand stress, recognise overwhelm, and explore practical ways to cope when everything starts feeling like too much.",
        category: "Stress",
        tags: ["Stress", "Coping"],
        icon: "Brain",
        icon_style: "bg-purple-50 text-purple-600",
        path: "/resources/stress-and-overwhelm",
        available: true,
    },
    {
        title: "Academic Pressure",
        slug: "academic-pressure",
        description: "Practical ideas for exams, deadlines, assignments, procrastination, performance pressure and fear of failure.",
        category: "Study",
        tags: ["Study", "Stress"],
        icon: "GraduationCap",
        icon_style: "bg-blue-50 text-blue-600",
    },
    {
        title: "Sleep & Rest",
        slug: "sleep-and-rest",
        description: "Learn about healthy sleep habits, winding down, routines and creating more space for proper rest.",
        category: "Sleep",
        tags: ["Sleep", "Habits"],
        icon: "Moon",
        icon_style: "bg-indigo-50 text-indigo-600",
    },
    {
        title: "Confidence & Self-Esteem",
        slug: "confidence-and-self-esteem",
        description: "Explore self-confidence, self-talk, comparison and ways to build a kinder relationship with yourself.",
        category: "Confidence",
        tags: ["Confidence", "Self"],
        icon: "Heart",
        icon_style: "bg-rose-50 text-rose-500",
    },
    {
        title: "Healthy Habits",
        slug: "healthy-habits",
        description: "Small, realistic habits around movement, routines, food, rest and everyday wellbeing.",
        category: "Habits",
        tags: ["Habits", "Wellbeing"],
        icon: "Leaf",
        icon_style: "bg-green-50 text-green-600",
    },
    {
        title: "Relationships & Friendship",
        slug: "relationships-and-friendship",
        description: "Thoughtful guidance around friendships, boundaries, communication, loneliness and social pressure.",
        category: "Relationships",
        tags: ["Relationships", "Social"],
        icon: "Users",
        icon_style: "bg-pink-50 text-pink-500",
    },
    {
        title: "Managing Change",
        slug: "managing-change",
        description: "Support for transitions such as starting university, moving away from home, changing courses or entering a new phase of life.",
        category: "Change",
        tags: ["Change", "Life"],
        icon: "Compass",
        icon_style: "bg-teal-50 text-teal-600",
    },
    {
        title: "Focus & Productivity",
        slug: "focus-and-productivity",
        description: "Simple approaches to concentration, planning, procrastination and getting things done without burning yourself out.",
        category: "Study",
        tags: ["Focus", "Study"],
        icon: "Target",
        icon_style: "bg-orange-50 text-orange-600",
    },
    {
        title: "Money & Student Life",
        slug: "money-and-student-life",
        description: "Information and practical ideas for handling financial pressure, budgeting and common student-life concerns.",
        category: "Money",
        tags: ["Money", "Life"],
        icon: "WalletCards",
        icon_style: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Finding Support",
        slug: "finding-support",
        description: "Understand when reaching out may help and explore ways to find trusted people and professional support.",
        category: "Support",
        tags: ["Support", "Help"],
        icon: "HeartHandshake",
        icon_style: "bg-sky-50 text-sky-600",
    },
];

const seedResourceData = async () => {
    for (const r of seedResources) {
        await pool.query(
            `INSERT INTO resources
                (title, slug, description, category, tags, type, icon, icon_style, path, available)
             VALUES ($1, $2, $3, $4, $5, 'Guide', $6, $7, $8, $9)
             ON CONFLICT (slug) DO NOTHING`,
            [
                r.title,
                r.slug,
                r.description,
                r.category,
                r.tags,
                r.icon,
                r.icon_style,
                r.path || null,
                r.available || false,
            ]
        );
    }
};

const initResources = async () => {
    await createResourcesTable();
    await seedResourceData();
    console.log("Resources table ready");
};

module.exports = { initResources };
