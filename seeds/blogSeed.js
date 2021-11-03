const Blog = require("../model/Blog");
const blogData = [
    {
        user_id_fk: "1",
        title: "Bananas",
        post: "Bananas are a great source of enjoyment",
    },
];

const blogSeed = () => Blog.bulkCreate(blogData);
blogSeed();

module.exports = blogSeed;
