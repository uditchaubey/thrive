const express = require("express");
const authMiddleware = require("./authMiddleware");
const {
    getResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
} = require("./resourceController");

const router = express.Router();

// Public: anyone can browse resources
router.get("/", getResources);
router.get("/:id", getResourceById);

// Protected: only logged-in users can change resources
router.post("/", authMiddleware, createResource);
router.put("/:id", authMiddleware, updateResource);
router.delete("/:id", authMiddleware, deleteResource);

module.exports = router;
