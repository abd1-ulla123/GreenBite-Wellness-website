// Breathing Animation
const breathingCircle = document.getElementById("breathingCircle");
const breathingText = document.getElementById("breathingText");

if (breathingCircle && breathingText) {
  let isInhale = true;

  setInterval(() => {
    if (isInhale) {
      breathingCircle.style.transform = "scale(1.5)";
      breathingText.textContent = "Breathe In";
    } else {
      breathingCircle.style.transform = "scale(1)";
      breathingText.textContent = "Breathe Out";
    }
    isInhale = !isInhale;
  }, 4000); // 4 seconds per phase
}

// Meditation Timer
let timer;
let totalSeconds;
const timerDisplay = document.getElementById("timerDisplay");
const sessionList = document.getElementById("sessionList");

function startTimer() {
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;
  totalSeconds = minutes * 60 + seconds;

  if (totalSeconds <= 0 || totalSeconds > 900) {
    alert("Please set a time between 1 second and 15 minutes.");
    return;
  }

  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    const min = Math.floor(totalSeconds / 60);
    const sec = totalSeconds % 60;
    timerDisplay.textContent = `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      addSession(minutes, seconds);
    } else {
      totalSeconds--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timerDisplay.textContent = "05:00";
}

function addSession(min, sec) {
  const li = document.createElement("li");
  li.textContent = `Completed session: ${min}m ${sec}s`;
  sessionList.appendChild(li);
}