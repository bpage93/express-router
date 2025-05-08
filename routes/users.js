// routes/users.js
const express = require("express");
const router = express.Router();

// GET /users/
router.get("/", (req, res) => {
    res.send("👤 Here are all the users!");
});

// GET /users/:id
router.get("/:id", (req, res) => {
    res.send(`🔍 Looking at user with ID: ${req.params.id}`);
});

module.exports = router;
