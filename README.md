# 🍅 Pomodoro Clock

A clean, responsive, and fully functional Pomodoro Clock web application built with HTML, CSS, and JavaScript. This project helps users manage their time effectively using the Pomodoro Technique by alternating work sessions with short breaks.

---

## 🚀 Features

* **Customizable Durations:** Adjust session and break lengths easily using the `+` and `-` controls.
* **Interactive Controls:** Start, pause, and reset the timer with a single click.
* **Smart UI States:** Control buttons (`+` / `-`) automatically disable while the timer is actively running to prevent accidental adjustments.
* **Automatic Switching:** Flawlessly transitions between **Session** and **Break** modes once the timer reaches `00:00`.
* **Session Tracking:** Tracks and displays current session numbers dynamically.

---

## 📖 How It Works

1. Set your preferred Session Time and Break Time.
2. Press Start to begin the countdown.
3. When the session time ends, the timer automatically switches to your set Break Time.
4. Press Pause at any point to temporarily stop the countdown, or Reset to restore default settings (25 min session / 5 min break).

---

## 🛠️ Built With

* **HTML5:** Semantic layout and page structure.
* **CSS3:** Custom Flexbox styling, transparent overlays, and clean border accents.
* **JavaScript (ES6):** State management, DOM manipulation, and precise time intervals (`setInterval`).

---

## 📂 Project Structure

```text
├── index.html    # HTML structure & markup
├── style.css     # Styling, layouts, and theme
└── script.js    # Timer logic & DOM updates
```

---

## 💻 How to Run Locally

1. **Clone the repository:**
   git clone https://github.com/Yashsaini439/Pomodoro-clock.git

2. **Navigate into the directory:**
   cd Pomodoro-clock

3. **Open the project:**
   Double-click index.html to open and run the application directly in your web browser.

