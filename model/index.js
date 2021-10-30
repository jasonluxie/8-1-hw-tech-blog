const Blog = require("./Blog");
const Comment = require("./Comment");

Blog.hasMany(Comment, {
    foreignKey: "comment_id_fk",
});

Comment.belongsTo(Blog, {
    foreignKey: "comment_id_fk",
});

module.exports = { Blog, Comment };
