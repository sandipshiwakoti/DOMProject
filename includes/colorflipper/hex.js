const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const color = document.querySelector(".color");


btn.addEventListener("click", (e) => {
    let randomColor = "#";
    for(let i = 0; i < 6; i++){
      randomColor += hex[Math.floor(Math.random() * hex.length)];
    }
    color.innerText = randomColor;
    color.style.color = randomColor;
    container.style.backgroundColor = randomColor;
    console.log(randomColor);
});