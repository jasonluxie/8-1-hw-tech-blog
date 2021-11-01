const router = require("express").Router();
const { User, Blog } = require("../model/index");

router.get("/", async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogPosts = blogData.map((data) => data.get({ plain: true }));
        res.render("homepage", { blogPosts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(`There seems to be some sort of database error`);
        console.error(err);
    }
});

module.exports = router;
