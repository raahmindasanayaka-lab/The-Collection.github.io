function greetUser() {
  let message = document.getElementById('greeting-text');
  message.textContent = "Hey! Thanks for visiting The Collection";
  message.style.color = "#0d9367";
}

let form = document.getElementById("submit-btn");

form.addEventListener("click", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let customization = document.getElementById("customization").value;
  let message = document.getElementById("form-message");

  if (name === "" || email === "") {
    message.textContent = "Please fill in your name and email!";
    message.style.color = "red";
  }else if (customization === ""){
    message.textContent = "Order submitted!, No customizations added, We'll be in touch, " + name;
    message.style.color = "#0d9367";
  }else {
    message.textContent = "Order submitted!, Customizations : " + customization + " We'll be in touch, " + name;
    message.style.color = "#0d9367";
  }
});
document.addEventListener("DOMContentLoaded", function() {
  let darkBtn = document.getElementById("dark-mode-btn");

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkBtn.textContent = "Light Mode";
  }

  darkBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkBtn.textContent = "Light Mode";
      localStorage.setItem("darkMode", "enabled");
    }else {
      darkBtn.textContent = "Dark Mode";
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
