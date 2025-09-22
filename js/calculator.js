document.getElementById("calc-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = parseFloat(document.getElementById("activity").value);
  
    // BMR Formula
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    // TDEE
    const tdee = bmr * activity;
  
    // Macronutrients
    const carbs = Math.round((tdee * 0.5) / 4);
    const protein = Math.round((tdee * 0.2) / 4);
    const fat = Math.round((tdee * 0.3) / 9);
  
    // Display results
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("bmr").textContent = Math.round(bmr);
    document.getElementById("tdee").textContent = Math.round(tdee);
  
    document.getElementById("carb-grams").textContent = carbs + " g";
    document.getElementById("protein-grams").textContent = protein + " g";
    document.getElementById("fat-grams").textContent = fat + " g";
  
    // Progress Bars (relative to recommended average)
    document.getElementById("carb-bar").style.width = "50%";
    document.getElementById("protein-bar").style.width = "20%";
    document.getElementById("fat-bar").style.width = "30%";
  });