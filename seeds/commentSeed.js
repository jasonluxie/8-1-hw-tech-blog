const Comment = require("../model/Comment");
const commentData = [
    {
        comment_id_fk: "1",
        user_fk: "1",
        content: "I enjoy your relationships with bananas",
    },
];

const commentSeed = () => Comment.bulkCreate(commentData);
commentSeed();

module.exports = commentSeed;
