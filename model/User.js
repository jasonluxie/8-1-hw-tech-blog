const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init(
    {
        user_id_pk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            notNull: true,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            notNull: true,
        },
        password: {
            type: DataTypes.STRING,
            notNull: true,
        },
    },
    // {
    //     hooks: {
    //         beforeCreate: async (userDataNew) => {
    //             userDataNew.password = await bcrypt.hash(
    //                 userDataNew.password,
    //                 10
    //             );
    //             return userDataNew;
    //         },
    //         beforeUpdate: async (userDataUpdate) => {
    //             userDataUpdate.password = await bcrypt.hash(
    //                 userDataUpdate.password,
    //                 10
    //             );
    //             return userDataUpdate;
    //         },
    //     },
    // },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

module.exports = User;
