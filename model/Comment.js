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
        user_fk: {
            type: DataTypes.STRING,
            notNull: true,
            refernces: {
                model: "user",
                key: "user_id_pk"
            }
        }
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
