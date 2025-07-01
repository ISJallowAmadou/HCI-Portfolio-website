const form = document.getElementById("contactForm");
const response = document.getElementById("responseMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    response.textContent = "Please fill out all fields.";
    response.style.color = "red";
    return;
  }

  // Confirm Sending...
  response.textContent = "Thanks, your message has been sent!";
  response.style.color = "#00d1b2";
  form.reset();
});
