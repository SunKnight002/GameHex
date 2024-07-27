const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementsByClassName("navbar")[0];
  if (window.pageYOffset > 50) {
    navbar.style.opacity = 0 - window.pageYOffset / 1000; // 這裡的500可以根據您的需求調整，數字越大，變淡的速度越慢
    navbar.style.pointerEvents = "none";
} else {
    navbar.style.opacity = 1;
    navbar.style.pointerEvents = "auto";
  }
}