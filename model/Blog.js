const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Blog extends Model {}

Blog.init(
    {
        id_pk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
        },
        post: {
            type: Datatypes.TEXT,
            notNull: true
        }
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
