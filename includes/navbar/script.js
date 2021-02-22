const btnNav = document.querySelector(".btn-nav");
const navLinks = document.querySelector(".mob-nav-links");

btnNav.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav-links");
    if(navLinks.classList.contains("show-nav-links"))
        btnNav.classList.add("transform");
    else
        btnNav.classList.remove("transform");
});