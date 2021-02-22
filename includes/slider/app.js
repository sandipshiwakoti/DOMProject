const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const btnFirst = document.querySelector(".btn-first");
const btnLast = document.querySelector(".btn-last");
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

const carousel = () => {
    // first approach
    // if(counter < 0){
    //     counter = slides.length - 1;
    // }
    // else if(counter > slides.length - 1){
    //     counter = 0;
    // }
    if(counter < 0)
        counter = 0;
    else if(counter > slides.length - 1)
        counter = slides.length - 1; 

    if(counter == 0){
        btnFirst.classList.add("disable-btn");
        btnPrev.classList.add("disable-btn");
    }
    else {
       btnFirst.classList.remove("disable-btn");
       btnPrev.classList.remove("disable-btn");
    }

    if(counter == slides.length - 1){
        btnLast.classList.add("disable-btn");
        btnNext.classList.add("disable-btn");
    }
    else {
       btnLast.classList.remove("disable-btn");
       btnNext.classList.remove("disable-btn");
    }


    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}

btnNext.addEventListener("click", () => {
    counter++;
    carousel();
});

btnPrev.addEventListener("click", () => {
    counter--;
    carousel();
});

btnFirst.addEventListener("click", () => {
    counter = 0;
    carousel();
});

btnLast.addEventListener("click", () => {
    counter = slides.length - 1;
    carousel();
});

window.addEventListener("DOMContentLoaded", () => {
    btnPrev.classList.add("disable-btn");
    btnFirst.classList.add("disable-btn");
});

