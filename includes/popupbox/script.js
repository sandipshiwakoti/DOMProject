const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const popupBox = document.querySelector(".popup-box");
const hero = document.querySelector(".hero");

btnOpen.addEventListener("click", (e) => {
    popupBox.style.display = "block";
    hero.style.opacity = ".4";
});

btnClose.addEventListener("click", () => {
    popupBox.style.display = "none";
    hero.style.opacity = "1";
});
