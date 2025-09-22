// Rotating Slogans
const slogans = [
    "Eat Clean, Stay Lean ",
    "Nourish Your Body, Fuel Your Soul ",
    "Healthy Living, Happy Life ",
    "Balance is the Key to Wellness ",
  ];
  let sloganIndex = 0;
  const sloganEl = document.getElementById("slogan");
  
  setInterval(() => {
    sloganIndex = (sloganIndex + 1) % slogans.length;
    sloganEl.textContent = slogans[sloganIndex];
  }, 4000);
  
  // Daily Tip (date-based)
  const tips = [
    "Drink at least 2 liters of water daily ",
    "Stretch for 5 minutes every morning ",
    "Eat more colorful fruits and veggies ",
    "Take short walks after meals ",
    "Practice mindful breathing for 5 minutes ",
  ];
  const today = new Date().getDate();
  document.getElementById("daily-tip").textContent = tips[today % tips.length];
  
  // Newsletter localStorage
  document.getElementById("newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    if (email) {
      let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      subscribers.push(email);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));
      alert("Thank you for subscribing!");
      e.target.reset();
    }
  });
  
  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });