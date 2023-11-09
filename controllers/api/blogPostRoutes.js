const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogData = await BlogPost.create({
      // ...req.body,
      user_id: req.session.user_id,
      contents: req.body.content,
    });
    res.redirect(`/blog/${newBlogData.id}`);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [updateRowCount] = await BlogPost.update(
      {
        title: req.body.title,
        contents: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (updateRowCount === 0) {
      res.status(404).json({ message: "Blog post not found with that id" });
      return;
    }
    res.json({ message: "Blog post updated" });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [deleteRowCount] = BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (deleteRowCount === 0) {
      res.status(404).json({ message: "Blog post not found with that id" });
      return;
    }
    res.json({ message: "Blog post deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
