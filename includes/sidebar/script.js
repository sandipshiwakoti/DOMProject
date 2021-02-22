const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const nav = document.querySelector("nav");

btnClose.addEventListener("click", () => {
    nav.classList.add("hide-nav");
});

btnOpen.addEventListener("click", () => {
    nav.classList.toggle("hide-nav");
});