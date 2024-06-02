document.getElementById("Login").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    if(email === '' || password === ''||cpassword===''){
        alert("Please fill in all fields.");
      return;
    }
    alert("Login successful!");
    document.getElementById("Login").reset();
    });