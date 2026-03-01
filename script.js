// Typing Effect
document.addEventListener("DOMContentLoaded", function () {

    const text = ["Mahasiswa Informatika", "Web Developer", "Frontend Enthusiast"];
    let i = 0;
    let j = 0;
    let currentText = "";
    let isDeleting = false;
    const typingElement = document.querySelector(".typing");

    function type() {
        if (!typingElement) return;

        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        typingElement.innerHTML = currentText;

        if (j === text[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();

    // Fade on load
    const faders = document.querySelectorAll(".fade");
    faders.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 300);
    });

});
