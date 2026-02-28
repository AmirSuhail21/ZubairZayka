function openImage(src){
document.getElementById("imageModal").style.display="flex";
document.getElementById("modalImg").src=src;
}

function closeImage(){
document.getElementById("imageModal").style.display="none";
}

/* Scroll Animation */
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll',()=>{
cards.forEach(card=>{
const cardTop = card.getBoundingClientRect().top;
if(cardTop < window.innerHeight - 100){
card.classList.add('show');
}
});
});