// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Theme toggle with localStorage
  const toggleTheme = document.getElementById("toggleTheme");
  if (toggleTheme) {
    // Set initial theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }

    // Toggle handler
    toggleTheme.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // Font size selector with localStorage
  const fontSizeSelector = document.getElementById("fontSizeSelector");
  if (fontSizeSelector) {
    // Set initial font size from localStorage
    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      document.documentElement.style.fontSize = savedFontSize;
      fontSizeSelector.value = savedFontSize;
    }

    // Change handler
    fontSizeSelector.addEventListener("change", (e) => {
      document.documentElement.style.fontSize = e.target.value;
      localStorage.setItem("fontSize", e.target.value);
    });
  }

  // Contact form handling (only on contact page)
  const form = document.getElementById("contactForm");
  if (form) {
    const response = document.getElementById("responseMsg");
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        response.textContent = "Please fill out all fields.";
        response.style.color = "red";
        return;
      }

      response.textContent = "Thanks, your message has been sent!";
      response.style.color = "#00d1b2";
      form.reset();
    });
  }
});