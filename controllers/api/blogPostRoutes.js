const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogData = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/:id", withAuth, async (req, res) => {
  try {
    const BlogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!BlogData) {
      res.status(404).json({ message: "Blog post not found with that id" });
    }
    res.status(200).json(BlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
