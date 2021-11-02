// import
const router = require("express").Router();
const { Comment } = require("../../model/index");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        if (req.session) {
            const commentCreate = await Comment.create({
                content: req.body.content,
                comment_id_fk: req.body.comment_id_fk,
                user_fk: req.session.user_id_pk,
            });
            res.status(200).json(`Comment created`);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const commentDelete = await Comment.destroy({
            where: {comment_id_fk: req.params.id}
        })
        if (!commentDelete) {
            res.status(500).json({message: "That comment doesn't exist"})
        }
        res.status(200).json(commentDelete)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router;
