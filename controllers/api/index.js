const router = require("express").Router();
const blogPostRoutes = require("./blogPostRoutes");
const userRoutes = require("./userRoutes");
const commentsRoutes = require("./commentsRoutes");

router.use("/user", userRoutes);
router.use("/blog", blogPostRoutes);
router.use("/comment", commentsRoutes);

module.exports = router;
