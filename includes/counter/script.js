const count = document.querySelector(".count");
const buttons = document.querySelectorAll(".btn");

let num = 0;
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.target.classList.contains("btn-decrease"))
            num--;
        else if(e.target.classList.contains("btn-increase"))
            num++;
        else
            num = 0;
        if(num > 0)
            count.style.color = "green"
        else if(num < 0)
            count.style.color = "red"
        else
            count.style.color = "#000"
        count.innerText = num;
    });
});
