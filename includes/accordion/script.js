const btns = document.querySelectorAll(".btn");
const accordions = document.querySelectorAll(".accordion");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const answerTarget = e.target.parentElement.parentElement.nextElementSibling;
        answerTarget.classList.toggle("show-answer");
    
        if(answerTarget.classList.contains("show-answer"))
            btn.classList.add("btn-rotate");
        else
            btn.classList.remove("btn-rotate");

        accordions.forEach(accordion => {
            const answer = accordion.lastElementChild;
            if(answer != answerTarget){
                answer.classList.remove("show-answer");
                const btn = answer.previousElementSibling.lastElementChild;
                btn.classList.remove("btn-rotate");
            }
        });
    });
});