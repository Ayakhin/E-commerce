const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authenticateToken = require("../middleware/authenticateToken");


router.post("/register", userController.validateUser, userController.register);
router.post("/login", userController.login);


// Exemple d'utilisation du middleware pour protéger une route
router.get("/protected-route", authenticateToken, (req, res) => {
    res.send("This is a protected route");
});

module.exports = router;
