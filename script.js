document.addEventListener("DOMContentLoaded", function () {
    var emailInput = document.querySelector('input[placeholder="Username"]');
    var passwordInput = document.querySelector('input[placeholder="Enter Password"]');
    var confirmPasswordInput = document.querySelector('input[placeholder="Enter Confirm Password"]');
    var registerButton = document.getElementById("btn");


    registerButton.addEventListener("click", function () {
      
      if (!isValidEmail(emailInput.value)) {
        alert("Please enter a valid email address");
      } else if (!isValidPassword(passwordInput.value)) {
        alert("Password must be at least 8 characters long");
      } else if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match");
      } else {
       
        alert("Registered Successfully");
        
      }
    });
    function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    function isValidPassword(password) {
      return password.length >= 8;
    }
  });