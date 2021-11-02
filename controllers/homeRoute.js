const router = require("express").Router();
const { route } = require(".");
const { User, Blog } = require("../model/index");

router.get("/", async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });
        const blogPosts = blogData.map((data) => data.get({ plain: true }));
        res.render("homepage", { blogPosts, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(`There seems to be some sort of database error`);
        console.error(err);
    }
});

router.get("/post/:id", async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                },
            ],
        });
        const blogPost = blogData.get({ plain: true });
        res.render("post", { ...blogPost, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
