$(document).ready(function() {
    // Getting references to our form and input
    var usernameInput = $("#signupUsername");
    var passwordInput = $("#signupPassword");
  
    // When the signup button is clicked, we validate the email and password are not blank
    $("#signup_submit").on("click", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.username, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(username, password) {
      $.post("/api/signup", {
        username: username,
        password: password
      })
        .then(function(data) {
          window.location.replace("/login");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
    }
  });