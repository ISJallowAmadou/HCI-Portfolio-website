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



const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Font size selector
const fontSizeSelector = document.getElementById("fontSizeSelector");
    if (fontSizeSelector) {
      fontSizeSelector.addEventListener("change", (e) => {
        document.body.style.fontSize = e.target.value;
      });
    }

// Theme toggle
const toggleTheme = document.getElementById("toggleTheme");
    if (toggleTheme) {
      toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
      });
    }

// Optional light theme styles
const styleTag = document.createElement("style");
styleTag.textContent = `
  .light-theme {
    background-color: #ffffff;
    color: #111111;
  }

  .light-theme nav,
  .light-theme footer,
  .light-theme .customize-panel {
    background: #f1f1f1;
    color: #111;
  }

  .light-theme .about-box,
  .light-theme .hero-glass,
  .light-theme .blog-card {
    background: #fefefe;
    color: #111;
    box-shadow: 0 0 10px rgba(0,0,0,0.08);
  }

  .light-theme a {
    color: #0077cc;
  }
`;
document.head.appendChild(styleTag);



