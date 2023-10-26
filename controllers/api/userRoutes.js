const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
// Handle the sign-up form submission
router.post("/signup", async (req, res) => {
  try {
    // Create a new user in the database with the provided user data
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Set the user as logged in
    req.session.user_id = userData.id;
    req.session.user_name = userData.name;
    req.session.logged_in = true;

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Handle the login form submission
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Handle the logout route
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// handle the update user route
router.put("/:id", async (req, res) => {
  try {
    const [updateRowCount] = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updateRowCount === 0) {
      res.status(404).json({ message: "User not found with that id" });
      return;
    }
    res.json({ message: "User updated" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// handle the delete user route
router.delete("/:id", async (req, res) => {
  try {
    const [deleteRowCount] = User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (deleteRowCount === 0) {
      res.status(404).json({ message: "User not found with that id" });
      return;
    }
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
