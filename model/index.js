const Blog = require("./Blog");
const Comment = require("./Comment");
const User = require("./User");

User.hasMany(Blog, {
    foreignKey: "user_id_fk",
    onDelete: "CASCADE",
});

Blog.belongsTo(User, {
    foreignKey: "user_id_fk",
});
Blog.hasMany(Comment, {
    foreignKey: "comment_id_fk",
    onDelete: "CASCADE",
});

Comment.belongsTo(Blog, {
    foreignKey: "comment_id_fk",
});

module.exports = { Blog, Comment, User };
