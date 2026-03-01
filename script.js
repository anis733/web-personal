// Typing Effect
const text = ["Mahasiswa Informatika", "Web Developer", "Frontend Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        typingElement.innerHTML = currentText;

        if (j === text[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
            if (i === text.length) i = 0;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Fade on scroll
const fadeElements = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
