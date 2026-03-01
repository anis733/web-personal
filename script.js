// Dark Mode
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll Animation
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
