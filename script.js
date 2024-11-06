// script.js
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fadeIn");
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 500);
    });
});
