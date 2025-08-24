console.log("Sherin’s portfolio is alive ✨");
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("greetBtn");
  const msg = document.getElementById("message");

  btn.addEventListener("click", function () {
    msg.textContent = "Hello! Thanks for clicking 😊";
  });
});
const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
