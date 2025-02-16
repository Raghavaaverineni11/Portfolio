document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Enable dark mode by default
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; // Set icon to sun

    // Toggle dark/light mode
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️"; // Light mode icon
        } else {
            themeToggle.textContent = "🌙"; // Dark mode icon
        }
    });
});
