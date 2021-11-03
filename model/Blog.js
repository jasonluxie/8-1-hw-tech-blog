const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Blog extends Model {}

Blog.init(
    {
        user_id_fk: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "user_id_pk",
            },
        },
        blog_id_pk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            notNull: true,
        },
        post: {
            type: DataTypes.TEXT,
            notNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "blog",
    }
);

module.exports = Blog;
