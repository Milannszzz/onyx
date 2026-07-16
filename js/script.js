/*=========================================
ONYX BELLISEMO
Main JavaScript
=========================================*/

/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

preloader.style.opacity = "0";

preloader.style.visibility = "hidden";

preloader.style.transition = "all .8s ease";

});

/*==============================
STICKY HEADER
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});

/*==============================
ACTIVE NAV LINK
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

/*=========================================
MOBILE MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const body = document.body;

menuToggle.addEventListener("click",()=>{

menuToggle.classList.toggle("active");

navMenu.classList.toggle("active");

body.classList.toggle("menu-open");

});

/*==============================
CHANGE ICON
==============================*/

menuToggle.addEventListener("click",()=>{

const icon=menuToggle.querySelector("i");

if(menuToggle.classList.contains("active")){

icon.classList.remove("ri-menu-3-line");

icon.classList.add("ri-close-line");

}else{

icon.classList.remove("ri-close-line");

icon.classList.add("ri-menu-3-line");

}

});

/*==============================
CLOSE MENU WHEN LINK CLICKED
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

menuToggle.classList.remove("active");

navMenu.classList.remove("active");

body.classList.remove("menu-open");

const icon=menuToggle.querySelector("i");

icon.classList.remove("ri-close-line");

icon.classList.add("ri-menu-3-line");

});

});

/*==============================
CLICK OUTSIDE TO CLOSE
==============================*/

document.addEventListener("click",(e)=>{

const clickedInside=

navMenu.contains(e.target)

||

menuToggle.contains(e.target);

if(

!clickedInside

&&

navMenu.classList.contains("active")

){

navMenu.classList.remove("active");

menuToggle.classList.remove("active");

body.classList.remove("menu-open");

const icon=menuToggle.querySelector("i");

icon.classList.remove("ri-close-line");

icon.classList.add("ri-menu-3-line");

}

});

/*==============================
ESC KEY CLOSES MENU
==============================*/

document.addEventListener("keydown",(e)=>{

if(

e.key==="Escape"

&&

navMenu.classList.contains("active")

){

navMenu.classList.remove("active");

menuToggle.classList.remove("active");

body.classList.remove("menu-open");

const icon=menuToggle.querySelector("i");

icon.classList.remove("ri-close-line");

icon.classList.add("ri-menu-3-line");

}

});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".section-heading,.about-card,.philosophy-card,.project-card,.service-card,.why-card,.testimonial-card,.info-box,.contact-form"

);

const revealOnScroll = () => {

const trigger = window.innerHeight * 0.88;

revealElements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.classList.add("show");

}

});

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*=========================================
HERO PARALLAX
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const y = window.scrollY;

if(hero){

hero.style.backgroundPosition = `center ${y * 0.35}px`;

}

});

/*=========================================
ABOUT IMAGE PARALLAX
=========================================*/

const aboutImage = document.querySelector(".about-image img");

window.addEventListener("scroll",()=>{

if(!aboutImage) return;

const rect = aboutImage.getBoundingClientRect();

const speed = rect.top * -0.03;

aboutImage.style.transform = `translateY(${speed}px) scale(1.04)`;

});

/*=========================================
PROJECT IMAGE PARALLAX
=========================================*/

document.querySelectorAll(".project-card img").forEach(img=>{

window.addEventListener("scroll",()=>{

const rect = img.getBoundingClientRect();

const offset = rect.top * -0.025;

img.style.transform = `translateY(${offset}px) scale(1.05)`;

});

});

/*=========================================
SECTION FADE
=========================================*/

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{

threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

/*=========================================
TESTIMONIAL SLIDER
=========================================*/

const slider=document.querySelector(".testimonial-slider");

if(slider){

let index=0;

const cards=document.querySelectorAll(".testimonial-card");

const total=cards.length;

function updateSlider(){

if(window.innerWidth<=992){

slider.style.transform=`translateX(-${index*100}%)`;

}

}

function nextSlide(){

if(window.innerWidth>992) return;

index++;

if(index>=total){

index=0;

}

updateSlider();

}

setInterval(nextSlide,5000);

window.addEventListener("resize",()=>{

index=0;

updateSlider();

});

}

/*=========================================
TOUCH SWIPE
=========================================*/

let startX=0;

let endX=0;

if(slider){

slider.addEventListener("touchstart",(e)=>{

startX=e.changedTouches[0].screenX;

});

slider.addEventListener("touchend",(e)=>{

endX=e.changedTouches[0].screenX;

if(window.innerWidth>992) return;

if(startX-endX>60){

index++;

if(index>=document.querySelectorAll(".testimonial-card").length){

index=0;

}

updateSlider();

}

if(endX-startX>60){

index--;

if(index<0){

index=document.querySelectorAll(".testimonial-card").length-1;

}

updateSlider();

}

});

}

/*=========================================
CURRENT YEAR
=========================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*=========================================
CONTACT FORM
=========================================*/

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const button=contactForm.querySelector("button");

const original=button.innerHTML;

button.innerHTML="Sending...";

button.disabled=true;

setTimeout(()=>{

button.innerHTML="Message Sent ✓";

button.style.background="#28a745";

contactForm.reset();

setTimeout(()=>{

button.innerHTML=original;

button.disabled=false;

button.style.background="";

},2500);

},1500);

});

}

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=button.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================================
BACK TO TOP
=========================================*/

const backTop=document.createElement("div");

backTop.className="back-to-top";

backTop.innerHTML='<i class="ri-arrow-up-line"></i>';

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show-top");

}else{

backTop.classList.remove("show-top");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================
LAZY IMAGE FADE-IN
=========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("img-loaded");

imageObserver.unobserve(entry.target);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});
