const router = require("express").Router();
const userRoute = require("./userRoute");
const blogRoute = require("./blogRoute");
const commentRoute = require("./commentRoute");

router.use("/users", userRoute);
router.use("/posts", blogRoute);
router.use("/comments", commentRoute);

module.exports = router;
