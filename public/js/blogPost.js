document
  .getElementById("create-post-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("post-title").value;
    const contents = document.getElementById("post-contents").value;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, contents }),
      });

      if (response.ok) {
        // Handle successful post creation
        window.location.replace("/dashboard"); // Redirect to  dashboard
      } else {
        // Handle post creation error
        alert("Post creation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  });

document
  .getElementById("comment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const commentText = document.getElementById("comment-text").value;

    try {
      const response = await fetch("/api/posts/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentText }),
      });

      if (response.ok) {
        // Handle successful comment submission
        // refresh the page to display the new comment,
      } else {
        // Handle comment submission error
        alert("Comment submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  });
