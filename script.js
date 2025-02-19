document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Enable dark mode by default
    body.classList.add("light-mode");
    themeToggle.textContent = "🌙"; // Set icon to sun

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


document.addEventListener("DOMContentLoaded", () => {
    function startCarousel(carouselElement) {
        const images = carouselElement.querySelectorAll(".carousel-image");
        let index = 0;
        setInterval(() => {
            images[index].classList.remove("active");
            index = (index + 1) % images.length;
            images[index].classList.add("active");
        }, 3000);
    }

    document.querySelectorAll(".carousel").forEach(startCarousel);
});