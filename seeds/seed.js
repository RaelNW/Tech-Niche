// const sequelize = require("../config/connection");
// const { User, BlogPost } = require("../models");

// const userData = require("./userData.json");
// const postData = require("./blogPostData.json");

// const seedDatabase = async () => {
//   try {
//     await sequelize.sync({ force: true });

//     const users = await User.bulkCreate(userData, {
//       individualHooks: true,
//       returning: true,
//     });

//     for (const blogPost of postData) {
//       await BlogPost.create({
//         ...blogPost,
//         user_id: users[Math.floor(Math.random() * users.length)].id,
//       });
//     }

//     console.log("Database seeded successfully!");
//     process.exit(0);
//   } catch (error) {
//     console.error("Error seeding database:", error);
//     process.exit(1);
//   }
// };

// seedDatabase();

const sequelize = require("../config/connection");
const { User, BlogPost } = require("../models");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(
      [
        {
          name: "John Doe",
          email: "john@example.com",
          password: "password123",
        },
        {
          name: "Jane Doe",
          email: "jane@example.com",
          password: "password456",
        },
        // Add more user data as needed
      ],
      {
        individualHooks: true,
        returning: true,
      }
    );

    const blogPosts = await BlogPost.bulkCreate([
      {
        title: "First Blog Post",
        contents: "This is the content of my first blog post.",
        user_id: users[0].id,
      },
      {
        title: "Second Blog Post",
        contents: "This is the content of my second blog post.",
        user_id: users[1].id,
      },
      // Add more blog post data as needed
    ]);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
