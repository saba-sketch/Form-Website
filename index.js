function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirm = document.querySelectorAll(".inp")[3].value; 
  let message = document.getElementById("message");

  
  message.innerHTML = "";
  message.style.color = "red";

  if (name === "") {
    message.innerHTML = "Please enter your name";
    return false;
  }
  if (email === "" || !email.includes("@")) {
    message.innerHTML = "Please enter a valid email";
    return false;
  }
  if (password.length < 8) {
    message.innerHTML = "Password must be at least 8 characters";
    return false;
  }
  if (password !== confirm) {
    message.innerHTML = "Passwords do not match";
    return false;
  }
  
  message.style.color = "rgb(120, 57, 120)"; 
  message.innerHTML = "Registration Successful!";

  return false; 
}
