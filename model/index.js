const Blog = require("./Blog");
const Comment = require("./Comment");

Blog.hasMany(Comment, {
    foreignKey: "comment_id_fk",
    onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
    foreignKey: "comment_id_fk",
});

module.exports = { Blog, Comment };
