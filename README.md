# Tech-Niche

Explore the TechNiche Blog – a place full of smart coding tips, interesting thoughts about tech, and helpful articles
Based on the given requirements, here are the routes you might need for your blog site:

## Table of Contents
- [AcceptanceCriteria](#acceptance-criteria)
- [ProjectStructure](#project-structure)
- [Dependencies](#dependencies)
- [GettingStarted](#getting-started)
- [AdditionalNotes](#additional-notes)
- [Links](#links)

## Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

## Project Structure:

The project is organized into the following main directories:

- **controllers:** Contains controller files handling the logic for various routes.
- **middlewares:** Houses middleware files, with the focus on authentication middleware.
- **public:** For static assets such as stylesheets, images, and client-side scripts.
- **views:** Holds view templates written in your preferred templating language (e.g., EJS, Pug).
- **routes:** Defines route handling using Express.js, as outlined in the Route Structure section.
- **models:** If applicable, this directory can contain data models for interacting with a database.
- **config:** For configuration files if needed.

## Dependencies:

Make sure you have Node.js and npm installed on your machine.

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: Comes with Node.js installation.

## Getting Started:

1. Clone the repository:

```bash
git clone git@github.com:RaelNW/Tech-Niche.git
cd Tech-Niche
```

2. Install dependencies:

```bash
npm install
```

3. Set up the database (if applicable):

   - If your blog requires a database, configure the database connection in the appropriate configuration file.
   - Run any necessary database migration scripts.

4. Run the application:

```bash
npm start
```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the TechNiche Blog.

## Additional Notes:

- Ensure that you have the correct paths for middleware and controller files in the route structure.
- Customize view templates in the `views` directory according to your design preferences.
- Modify the example route structure in `routes/index.js` to fit your specific needs.

## Links

- [GitHub Profile](https://github.com/RaelNW)
- [LinkedIn Profile](https://www.linkedin.com/in/raelwanjala/) 
- [Deployed Link]()