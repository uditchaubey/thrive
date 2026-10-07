const express = require("express");
const cors = require("cors");
const pool = require("./db");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const resourceRoutes = require("./resourceRoutes");
const { initResources } = require("./resourceSchema");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "THRIVE backend is running!"
    });
});


// Authentication routes
app.use("/api/auth", authRoutes);


// User routes
app.use("/api/users", userRoutes);


// Resource routes
app.use("/api/resources", resourceRoutes);


// Test PostgreSQL connection
app.get("/api/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            message: "Database connected successfully!",
            time: result.rows[0].now
        });

    } catch (error) {
        console.error("Database connection error:", error);

        res.status(500).json({
            message: "Database connection failed"
        });
    }
});


// Start server
initResources()
    .catch((error) => console.error("Resources setup error:", error))
    .finally(() => {
        app.listen(PORT, () => {
            console.log(`THRIVE backend running on port ${PORT}`);
        });
    });