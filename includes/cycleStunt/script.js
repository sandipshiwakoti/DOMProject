const btnSwitch = document.querySelector(".btn-switch");
const switchControl = document.querySelector(".switch-control");
const video = document.querySelector(".video");
const preloader = document.querySelector(".preloader");

btnSwitch.addEventListener("click", () => {
    if(switchControl.classList.contains("slide-switch")){
        switchControl.classList.remove("slide-switch")
        video.play();
    }
    else {
        switchControl.classList.add("slide-switch")
        video.pause();
    }
});

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
});