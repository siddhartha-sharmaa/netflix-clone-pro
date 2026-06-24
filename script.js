// GET STARTED BUTTON

function showMessage() {

const email = document.querySelector(".email-box input").value;

if(email === ""){
    alert("Please enter your email address");
}
else{
    alert("Welcome to Netflix Clone!\n\nEmail: " + email);
}

}


// FAQ ACCORDION

const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach(btn => {

btn.addEventListener("click", () => {

const content = btn.nextElementSibling;

if(content.style.display === "block"){

content.style.display = "none";

}
else{

document.querySelectorAll(".faq-content").forEach(item=>{
item.style.display = "none";
});

content.style.display = "block";

}

});

});


// MOVIE CARD EFFECT

const cards = document.querySelectorAll(".movie-card");

cards.forEach(card => {

card.addEventListener("click", () => {

alert("Movie selected!");

});

});


// SMOOTH PAGE LOAD

window.addEventListener("load", () => {

document.body.style.opacity = "0";

setTimeout(() => {
document.body.style.transition = "1s";
document.body.style.opacity = "1";
},100);

});
