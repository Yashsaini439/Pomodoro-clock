// State Variables
let sessionLength = 25;
let breakLength = 5;
let timeLeft = sessionLength * 60; // in seconds
let isRunning = false;
let isSession = true; // true = session time, false = break time
let timerId = null;
let sessionCount = 1;

// DOM Elements
const timerLabel = document.getElementById('timer-label');
const timeLeftDisplay = document.getElementById('time-left');
const sessionLengthDisplay = document.getElementById('session-length');
const breakLengthDisplay = document.getElementById('break-length');

const startStopBtn = document.getElementById('start_stop');
const resetBtn = document.getElementById('reset');

const sessionIncrementBtn = document.getElementById('session-increment');
const sessionDecrementBtn = document.getElementById('session-decrement');
const breakIncrementBtn = document.getElementById('break-increment');
const breakDecrementBtn = document.getElementById('break-decrement');

// Format seconds into MM:SS format
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update DOM elements with current values
function updateDisplay() {
  timeLeftDisplay.textContent = formatTime(timeLeft);
  sessionLengthDisplay.textContent = `${sessionLength} min`;
  breakLengthDisplay.textContent = `${breakLength} min`;
}

// Enable/Disable + and - buttons while running
function toggleAdjustButtons(disable) {
  sessionIncrementBtn.disabled = disable;
  sessionDecrementBtn.disabled = disable;
  breakIncrementBtn.disabled = disable;
  breakDecrementBtn.disabled = disable;
}

// Session Time Controls
sessionIncrementBtn.addEventListener('click', () => {
  if (!isRunning) {
    sessionLength++;
    if (isSession) timeLeft = sessionLength * 60;
    updateDisplay();
  }
});

sessionDecrementBtn.addEventListener('click', () => {
  if (!isRunning && sessionLength > 1) { // Session time won't go below 1 min (0 or higher)
    sessionLength--;
    if (isSession) timeLeft = sessionLength * 60;
    updateDisplay();
  }
});

// Break Time Controls
breakIncrementBtn.addEventListener('click', () => {
  if (!isRunning) {
    breakLength++;
    if (!isSession) timeLeft = breakLength * 60;
    updateDisplay();
  }
});

breakDecrementBtn.addEventListener('click', () => {
  if (!isRunning && breakLength > 1) {
    breakLength--;
    if (!isSession) timeLeft = breakLength * 60;
    updateDisplay();
  }
});

// Start / Pause Timer logic
startStopBtn.addEventListener('click', () => {
  if (isRunning) {
    // Pause timer
    clearInterval(timerId);
    isRunning = false;
    startStopBtn.textContent = 'Start';
    toggleAdjustButtons(false);
  } else {
    // Start timer
    isRunning = true;
    startStopBtn.textContent = 'Pause';
    toggleAdjustButtons(true);

    timerId = setInterval(() => {
      timeLeft--;

      // Switch mode when timer reaches 0
      if (timeLeft < 0) {
        if (isSession) {
          isSession = false;
          timerLabel.textContent = 'Break Time';
          timeLeft = breakLength * 60;
        } else {
          isSession = true;
          sessionCount++;
          timerLabel.textContent = `Session ${sessionCount}`;
          timeLeft = sessionLength * 60;
        }
      }

      updateDisplay();
    }, 1000);
  }
});

// Reset Button Logic
resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  isRunning = false;
  isSession = true;
  sessionCount = 1;
  sessionLength = 25;
  breakLength = 5;
  timeLeft = sessionLength * 60;

  timerLabel.textContent = 'Session 1';
  startStopBtn.textContent = 'Start';
  toggleAdjustButtons(false);
  updateDisplay();
});

// Initialize display on load
updateDisplay();