const router = require("express").Router();
const { User, Blog, Comment } = require("../../model/index");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
        const blogPost = await Blog.findAll({
            attributes: ["blog_id_pk", "title", "post"],
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["comment_id_fk", "content", "user_fk"],
                    include: [
                        {
                            model: User,
                            attributes: ["username"],
                        },
                    ],
                },
            ],
        });
        res.status(200).json(blogPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
