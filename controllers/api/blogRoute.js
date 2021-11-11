const router = require("express").Router();
const { User, Blog, Comment } = require("../../model/index");

router.get("/", async (req, res) => {
    try {
        const blogPost = await Blog.findAll({
            attributes: ["blog_id_pk", "title", "post", "user_id_fk"],
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
                {
                    model: Comment,
                    attributes: ["comment_id_fk", "content", "user_fk"],
                },
            ],
        });
        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const blogPost = await Blog.create({
            user_id_fk: req.session.user_id_fk,
            title: req.body.title,
            post: req.body.post
        })

        if (blogPost) {
            res.status(200).json(blogPost)
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

// {
// 	"user_id_fk": "1",
// 	"title": "Hello Everyone", 
// 	"post": "I'd like to say hello to everyone here!"
// }
module.exports = router;
