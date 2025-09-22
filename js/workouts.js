// Workout Data (extended with more equipment)
const workouts = {
  full: {
    none: ["Jumping Jacks", "Push-ups", "Squats", "Plank"],
    bodyweight: ["Burpees", "Mountain Climbers", "Lunges", "Push-ups"],
    dumbbell: ["Dumbbell Squats", "Dumbbell Press", "Dumbbell Rows", "Lunges"],
    resistance: ["Band Pull Aparts", "Band Squats", "Band Rows", "Band Press"],
    kettlebell: ["Kettlebell Swings", "Kettlebell Goblet Squats", "Kettlebell Deadlifts"],
    barbell: ["Barbell Squats", "Barbell Deadlift", "Barbell Press"],
    yogamat: ["Yoga Plank Hold", "Bridge Pose", "Boat Pose"]
  },
  arms: {
    none: ["Push-ups", "Chair Dips", "Arm Circles"],
    bodyweight: ["Diamond Push-ups", "Handstand Hold", "Tricep Dips"],
    dumbbell: ["Bicep Curls", "Tricep Extensions", "Lateral Raises"],
    resistance: ["Band Bicep Curls", "Band Tricep Pushdowns", "Band Front Raises"],
    kettlebell: ["Kettlebell Hammer Curls", "Overhead Tricep Press"],
    barbell: ["Barbell Curls", "Close-grip Bench Press"],
    yogamat: ["Plank Shoulder Taps", "Reverse Tabletop Dips"]
  },
  legs: {
    none: ["Squats", "Lunges", "Calf Raises"],
    bodyweight: ["Jump Squats", "Wall Sit", "Single Leg Glute Bridge"],
    dumbbell: ["Goblet Squats", "Dumbbell Lunges", "Step Ups"],
    resistance: ["Band Side Walks", "Band Squats", "Glute Bridges"],
    kettlebell: ["Kettlebell Deadlifts", "Kettlebell Step Ups"],
    barbell: ["Barbell Squats", "Barbell Lunges"],
    yogamat: ["Glute Bridge", "Leg Raises", "Frog Stretch"]
  },
  core: {
    none: ["Sit-ups", "Plank", "Mountain Climbers"],
    bodyweight: ["Leg Raises", "Flutter Kicks", "Side Plank"],
    dumbbell: ["Russian Twists", "Weighted Sit-ups", "Dumbbell Side Bends"],
    resistance: ["Band Dead Bugs", "Band Plank Holds", "Band Side Crunches"],
    kettlebell: ["Kettlebell Russian Twists", "Windmill Exercise"],
    barbell: ["Barbell Rollouts"],
    yogamat: ["Boat Pose", "Cobra Stretch"]
  }
};

// Generate Workout
document.getElementById("workout-form").addEventListener("submit", e => {
  e.preventDefault();

  const bodypart = document.getElementById("bodypart").value;
  const equipment = document.getElementById("equipment").value;

  const chosen = workouts[bodypart][equipment];
  const randomPlan = chosen.sort(() => 0.5 - Math.random()).slice(0, 4);

  const list = document.getElementById("exercise-list");
  list.innerHTML = "";
  randomPlan.forEach(ex => {
    const li = document.createElement("li");
    li.textContent = ex;
    list.appendChild(li);
  });

  document.getElementById("workout-plan").classList.remove("hidden");
});

// Timer Variables
let timerInterval = null;
let timeLeft = 0;
const display = document.getElementById("timer-display");

// Update Display
function updateDisplay() {
  let mins = Math.floor(timeLeft / 60);
  let secs = timeLeft % 60;
  display.textContent =
    (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
}

// Start
document.getElementById("start-timer").addEventListener("click", () => {
  if (timerInterval) return;

  let mins = parseInt(document.getElementById("work-minutes").value) || 0;
  let secs = parseInt(document.getElementById("work-seconds").value) || 0;

  timeLeft = mins * 60 + secs;

  if (timeLeft < 10) {
    alert("Timer must be at least 10 seconds.");
    return;
  }
  if (timeLeft > 300) {
    alert("Timer cannot exceed 5 minutes.");
    timeLeft = 300;
  }

  updateDisplay();

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      display.textContent = "Done! Take a rest.";
    }
  }, 1000);
});

// Stop
document.getElementById("stop-timer").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Reset
document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;

  let mins = parseInt(document.getElementById("work-minutes").value) || 0;
  let secs = parseInt(document.getElementById("work-seconds").value) || 0;
  timeLeft = mins * 60 + secs;

  if (timeLeft > 300) timeLeft = 300;
  if (timeLeft < 10) timeLeft = 10;

  updateDisplay();
});

// Initialize
updateDisplay();