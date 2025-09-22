// Global Newsletter Signup
const footerForm = document.getElementById("footer-newsletter-form");
if (footerForm) {
  footerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("footer-newsletter-email").value;
    if (email) {
      let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      subscribers.push(email);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));
      alert(" Thank you for subscribing! ");
      e.target.reset();
    }
  });
}


// Mobile Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}