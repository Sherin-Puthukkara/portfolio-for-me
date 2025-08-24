console.log("Sherin’s portfolio is alive ✨");
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
