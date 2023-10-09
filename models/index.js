// import models
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");
const User = require("./User");

User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

BlogPost.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(BlogPost, {
  foreignKey: "post_id",
});

module.exports = {
  BlogPost,
  Comment,
  User,
};
