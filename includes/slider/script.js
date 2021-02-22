const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const btnFirst = document.querySelector(".btn-first");
const btnLast = document.querySelector(".btn-last");

let counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const carousel = () => {
    /*first approach*/
    // if(counter < 0)
    //     counter = slides.length - 1;
    // else if(counter > slides.length - 1)
    //     counter = 0;

    /*second approach*/
    if(counter < 0)
        counter = 0;
    else if(counter > slides.length - 1)
        counter = slides.length - 1;
    
    //btnPrev
    if(counter > 0)
        btnPrev.classList.remove("disable-btn")
    else
        btnPrev.classList.add("disable-btn")
    // btnNext
    if(counter < slides.length - 1)
        btnNext.classList.remove("disable-btn");
    else
        btnNext.classList.add("disable-btn");
    // btnFirst
    if(counter == 0)
        btnFirst.classList.add("disable-btn");
    else
        btnFirst.classList.remove("disable-btn");
    // btnLast
    if(counter == slides.length - 1)
        btnLast.classList.add("disable-btn");
    else
        btnLast.classList.remove("disable-btn");

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

btnNext.addEventListener("click", () => {
    counter++;
    carousel();
})

btnPrev.addEventListener("click", () => {
    counter--;
    carousel();
})

btnFirst.addEventListener("click", () => {
    counter = 0;
    carousel();
})

btnLast.addEventListener("click", () => {
    counter = slides.length - 1;
    carousel();
})

window.addEventListener("DOMContentLoaded", ()=> {
    btnFirst.classList.add("disable-btn");
    btnPrev.classList.add("disable-btn");
})
