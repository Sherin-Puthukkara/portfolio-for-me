console.log("Sherin’s portfolio is alive ✨");
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("greetBtn");
  const msg = document.getElementById("message");

  btn.addEventListener("click", function () {
    msg.textContent = "Hello! Thanks for clicking 😊";
  });
});
