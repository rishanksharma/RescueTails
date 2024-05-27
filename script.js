const faq=document.querySelectorAll(".faq");
faq.forEach(faq=>{
    const icon=faq.querySelector(".icon");
    const answer=faq.querySelector(".answer");
    faq.addEventListener("click",()=>{
        icon.classList.toggle("activer");
        answer.classList.toggle("active");

    })

})


const btn= document.querySelector("#rehab")
btn.addEventListener("click",()=>{
    window.location.href = "peets.html"; 


})

    