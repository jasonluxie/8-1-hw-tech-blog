const User = require("../model/User");

const userData = [
    {
        username: "banana",
        password: "bananajones",
    },
    {
        username: "pineapple",
        password: "penpineapple",
    },
];

const userSeed = () => User.bulkCreate(userData);
userSeed();

module.exports = userSeed;
