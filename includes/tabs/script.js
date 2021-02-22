const btns = document.querySelectorAll(".btn-tab");
const tabs = document.querySelector(".about-tabs");
const tabContents =document.querySelectorAll(".tab-content");

tabs.addEventListener("click", (e) => {
   const id = e.target.dataset.id;
   if(id) {
       btns.forEach(btn => {
           btn.classList.remove("active");
           e.target.classList.add("active");
       });

       tabContents.forEach(tabContent => {
           tabContent.classList.remove("active");
       });

       const element = document.getElementById(id);
       element.classList.add("active");
   }
});

