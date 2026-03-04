document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
  }

  // Toggle Theme
  toggleBtn.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-mode");

    if (isLight) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "🌙";
    }
  });

});