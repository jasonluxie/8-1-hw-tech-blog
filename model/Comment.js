const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Comment extends Model {}

Comment.init(
    {
        comment_id_fk: {
            type: DataTypes.INTEGER,
            refernces: {
                model: "blog",
                key: "blog_id_pk",
            },
        },
        content: {
            type: DataTypes.TEXT,
            notNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;
