const router = require("express").Router();
const { route } = require(".");
const { restore } = require("../model/Blog");
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
        // console.log(blogData)
        const blogs = blogData.map((data) => data.get({ plain: true }));
        res.render("homepage", { blogs, 
            loggedIn: req.session.loggedIn,
            userCurrent: req.session.user_id_pk
         });
    } catch (err) {
        console.log('error');
        res.status(500).json(`There seems to be some sort of database error`);
        console.error(err);
    }
});

router.get("/dashboard", async (req, res) => {
    try {
        res.render("dashboard", 
        {loggedIn: req.session.loggedIn}
        )
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) => {
    try {
        res.render("login")
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/logout", async (req, res) => {
    try {
    } catch (err) {
        res.status(500).json(err);
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
