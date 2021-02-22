const btnNav = document.querySelector(".btn-nav");
const navlinks = document.querySelector(".nav-links");
const navLinksContainer = document.querySelector(".nav-links-container");

// toggle nav links container
btnNav.addEventListener("click", () => {
    const linksHeight = getComputedStyle(navlinks).height;
    const containerHeight = getComputedStyle(navLinksContainer).height;
    
    if(containerHeight === "0px")
        navLinksContainer.style.height = linksHeight;
    else
        navLinksContainer.style.height = "0px";
});

const navBar = document.querySelector(".nav-bar");
const backToTopLink = document.querySelector(".back-to-top-link");
const hero = document.querySelector("#hero");

// fixed nav
window.addEventListener("scroll", () => {
    const navBarHeight = parseInt(getComputedStyle(navBar).height);
    const heroHeight = parseInt(getComputedStyle(hero).height);

    if(window.pageYOffset > navBarHeight)
        navBar.classList.add("fixed-nav");
    else 
        navBar.classList.remove("fixed-nav");
    
    if(window.pageYOffset > heroHeight - navBarHeight)
        backToTopLink.classList.add("show-top-link");
    else
        backToTopLink.classList.remove("show-top-link");
});

const scrollLinks = document.querySelectorAll(".scroll-link");

// scroll link
scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener("click", (e) => {
        e.preventDefault();
        const navBarHeight = parseInt(getComputedStyle(navBar).height);
        const containerHeight = parseInt(getComputedStyle(navLinksContainer).height);

        // const navBarHeight = navBar.getBoundingClientRect().height;
        // const containerHeight = navLinksContainer.getBoundingClientRect().height;
        navLinksContainer.style.height = 0;

        const id = scrollLink.getAttribute("href").slice(1);
        let position = document.getElementById(id).offsetTop - navBarHeight;

        if(!navBar.classList.contains("fixed-nav")){
            position -= navBarHeight;
        }

        if(navBarHeight > 82) {
            position += containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});
