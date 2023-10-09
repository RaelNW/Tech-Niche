const router = require("express").Router();
const { User, BlogPost, Comment} = require("../models");
const withAuth = require("../utils/auth");

// Display existing blog posts.
router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const BlogData = await BlogPost.findAll({
      attributes: ["id", "title", "content", "date_created", "user_id"],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["comment_text", "date_created", "user_id"],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = BlogData.map((blogPost) => blogPost.get({ plain: true }));

    // Pass serialized data and session flag into the template
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      user_name: req.session.user_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Display details of a specific blog post
router.get("/post/:id", async (req, res) => {
  try {
    const blogData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["comment_text", "date_created", "user_id"],
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
    });
    if (!blogData) {
      // Handle the case where the blog post is not found
      return res.status(404).render("error404");
    }
    const blogPost = blogData.get({ plain: true });

    res.render("blogPost", {
      ...blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: BlogPost }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
