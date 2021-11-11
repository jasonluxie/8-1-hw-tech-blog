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
    // console.log(req.session.user_id_fk)
    // console.log(req.session)
    try {
        const blogPost = await Blog.create({
            user_id_fk: req.session.user_id_fk,
            title: req.body.postTitle,
            post: req.body.postContent
        })
        console.log(blogPost)
        if (blogPost) {
            res.status(200).json(blogPost)
        }
    } catch (error) {
        res.status(500).json(error)
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                blog_id_pk: req.params.id
            }
        })
        res.status(200).json(blogData)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;
