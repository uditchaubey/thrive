const express = require("express");
const { signup, login } = require("./authController");

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        message: "Auth routes working!"
    });
});

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;