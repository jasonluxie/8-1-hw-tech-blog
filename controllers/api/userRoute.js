// api/users
const router = require("express").Router();
const { User, Blog, Comment } = require("../../model/index");
const bcrypt = require('bcrypt')
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ["password"] },
        });
        res.json(userData);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { email: req.body.email },
        });
        if (!userData) {
            res.status(400).json({
                message: "This email is not registered, please try again.",
            });
            return;
        }
        const userPassword = await userData.checkPassword(req.body.password);
        if (!userPassword) {
            res.status(400).json({
                message:
                    "That password does not match the email. Please try again",
            });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            res.json({ user: userData, message: "Banana" });
        });
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// LOGOUT
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;