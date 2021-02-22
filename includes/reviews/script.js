const people = [
    {
        id: 1,
        name: "Devin Guzman",
        designation: "Web Designer",
        img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "I am a web designer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta rerum eum vitae debitis a, voluptatem molestiae? Laudantium, autem quo!"
    },
    {
        id: 2,
        name: "Hannah Jensen",
        designation: "Software Developer",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "I am a software developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta rerum eum vitae debitis a, voluptatem molestiae? Laudantium, autem quo!"
    },
    {
        id: 3,
        name: "Josephine Haas",
        designation: "Social Worker",
        img: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "I am a social worker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta rerum eum vitae debitis a, voluptatem molestiae? Laudantium, autem quo!"
    },
    {
        id: 4,
        name: "Kristi Dillon",
        designation: "Lawyer",
        img: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "I am a lawyer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta rerum eum vitae debitis a, voluptatem molestiae? Laudantium, autem quo!"
    },
    {
        id: 5,
        name: "Alexis Jacobs",
        designation: "Market Trader",
        img: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "I am a market trader. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta rerum eum vitae debitis a, voluptatem molestiae? Laudantium, autem quo!"
    },
    {
        id: 6,
        name: "Zacharia Fraser",
        designation: "Bank Clerk",
        img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "I am a bank clerk. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta rerum eum vitae debitis a, voluptatem molestiae? Laudantium, autem quo!"
    },
    {
        id: 7,
        name: "Myron Ahmed",
        designation: "Astrologer",
        img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "I am an astrologer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta rerum eum vitae debitis a, voluptatem molestiae? Laudantium, autem quo!"
    }
]

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const btnRandom = document.querySelector(".btn-random");

const img = document.querySelector(".person-img");
const name = document.querySelector(".person-name");
const designation = document.querySelector(".person-designation");
const bio = document.querySelector(".person-bio");

let currentItem = 0;
const showPerson = () => {
    const person = people[currentItem];
    img.setAttribute("src", person.img);
    name.innerText = person.name;
    designation.innerText = person.designation;
    bio.innerText = person.bio;
}

window.addEventListener("DOMContentLoaded", () => {
    showPerson();
});

btnNext.addEventListener("click", () => {
        currentItem++;
        if(currentItem > people.length - 1){
            currentItem = 0;
        }
        showPerson();
});

btnPrev.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = people.length - 1;
    }
    showPerson();
});

btnRandom.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * people.length);
    showPerson();
});