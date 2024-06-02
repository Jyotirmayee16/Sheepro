document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform form validation
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      alert("Please fill in all fields.");
      return;
    }

    // Do something with the form data (e.g., send it to a server)
    alert("Registration successful!");
    // You can replace the above alert with an AJAX request or any other logic you need.

      // Reset the form
      document.getElementById("registrationForm").reset();
    });