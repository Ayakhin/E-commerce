const express = require("express");
const router = express.Router();
const { getUserProfile, updateUserProfile, register, login, validateUser } = require("../controllers/user.controller");
const authenticateToken = require("../middleware/authenticateToken");

router.post("/register", validateUser, register);
router.post("/login", login);
router.get("/profile", authenticateToken, getUserProfile);
router.put("/profile", authenticateToken, updateUserProfile);

// Exemple d'utilisation du middleware pour protéger une route
router.get("/protected-route", authenticateToken, (req, res) => {
  res.send("This is a protected route");
});

module.exports = router;
