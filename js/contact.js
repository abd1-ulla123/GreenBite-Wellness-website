// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && subject && message) {
      // Save in localStorage (mock backend)
      let messages = JSON.parse(localStorage.getItem("messages")) || [];
      messages.push({ name, email, subject, message, date: new Date().toLocaleString() });
      localStorage.setItem("messages", JSON.stringify(messages));
  
      document.getElementById("form-response").textContent = "Message sent successfully!";
      document.getElementById("form-response").classList.remove("hidden");
      this.reset();
    } else {
      document.getElementById("form-response").textContent = "Please fill in all fields.";
      document.getElementById("form-response").classList.remove("hidden");
      document.getElementById("form-response").style.color = "red";
    }
  });
  
  // FAQ Accordion
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });