// client.js

// // Wait for the DOM to load
// document.addEventListener("DOMContentLoaded", () => {
//   // Initially hide the signup form
//   document.querySelector(".signup-form").style.display = "none";

//   // Toggle between login and signup forms
//   document.querySelector("#show-signup").addEventListener("click", () => {
//     document.querySelector(".login-form").style.display = "none";
//     document.querySelector(".signup-form").style.display = "block";
//   });

//   document.querySelector("#show-login").addEventListener("click", () => {
//     document.querySelector(".signup-form").style.display = "none";
//     document.querySelector(".login-form").style.display = "block";
//   });

//   // Handle login form submission
//   document
//     .querySelector("#login-form")
//     .addEventListener("submit", loginFormHandler);

//   // Handle signup form submission
//   document
//     .querySelector("#signup-form")
//     .addEventListener("submit", signupFormHandler);
// });

// login

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};



document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);


// //login

// const loginFormHandler = async (event) => {
//   event.preventDefault();
// };

// //sign up
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   "use strict";
//   window.addEventListener(
//     "load",
//     function () {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName("needs-validation");
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     },
//     false
//   );
// })();
