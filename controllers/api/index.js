const router = require("express").Router();
const blogPostRoutes = require("./blogPostRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/user", userRoutes);
router.use("/blog", blogPostRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
