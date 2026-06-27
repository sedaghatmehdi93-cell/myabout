// ======================
// TYPING EFFECT
// ======================

const typingText = document.getElementById("typingText");

const text =
"Technology Enthusiast | Gamer | Hardware Lover";

let textIndex = 0;

function typeWriter() {

if(textIndex < text.length){

typingText.textContent += text.charAt(textIndex);

textIndex++;

setTimeout(typeWriter,60);

}

}

typeWriter();


// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click",()=>{

if(menu.style.display === "flex"){

menu.style.display = "none";

}else{

menu.style.display = "flex";

}

});


// ======================
// REVEAL ON SCROLL
// ======================

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

revealObserver.observe(el);

});


// ======================
// SKILL BAR ANIMATION
// ======================

const skillBars =
document.querySelectorAll(".progress-fill");

const skillObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width =
entry.target.dataset.width;

entry.target.style.width =
width + "%";

}

});

},{
threshold:.3
});

skillBars.forEach(bar=>{

skillObserver.observe(bar);

});


// ======================
// COUNTER ANIMATION
// ======================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let counter = entry.target;

let target =
parseFloat(counter.dataset.target);

let current = 0;

let increment =
target / 100;

function updateCounter(){

current += increment;

if(current < target){

if(target % 1 !== 0){

counter.textContent =
current.toFixed(2);

}else{

counter.textContent =
Math.floor(current);

}

requestAnimationFrame(updateCounter);

}else{

counter.textContent =
target;

}

}

updateCounter();

}

});

},{
threshold:.3
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


// ======================
// RGB CURSOR
// ======================

const cursor =
document.getElementById("cursor");

const cursorTrail =
document.getElementById("cursorTrail");

let mouseX = 0;
let mouseY = 0;

let trailX = 0;
let trailY = 0;

document.addEventListener("mousemove",(e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

cursor.style.left =
mouseX + "px";

cursor.style.top =
mouseY + "px";

});

function animateTrail(){

trailX += (mouseX - trailX) * 0.15;
trailY += (mouseY - trailY) * 0.15;

cursorTrail.style.left =
(trailX - 20) + "px";

cursorTrail.style.top =
(trailY - 20) + "px";

requestAnimationFrame(animateTrail);

}

animateTrail();


// ======================
// PARTICLE BACKGROUND
// ======================

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

const particles = [];

for(let i=0;i<200;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*3+1,

speedY:Math.random()*1.5+0.2,

opacity:Math.random()

});

}

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.y += p.speedY;

if(p.y > canvas.height){

p.y = 0;

p.x =
Math.random()*canvas.width;

}

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);

ctx.fillStyle =
`rgba(184,77,255,${p.opacity})`;

ctx.fill();

});

requestAnimationFrame(
animateParticles
);

}

animateParticles();


// ======================
// ACTIVE NAVIGATION
// ======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(
window.scrollY >= sectionTop
){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href") ===
"#" + current
){

link.classList.add("active");

}

});

}
);


// ======================
// FLOATING GLOW EFFECT
// ======================

document.querySelectorAll(
".project-card,.interest-card,.setup-card"
)

.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =
`
radial-gradient(
circle at ${x}px ${y}px,
rgba(184,77,255,.20),
rgba(255,255,255,.03)
)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.background =
"rgba(255,255,255,.05)";

});

});


// ======================
// SMOOTH PAGE LOAD
// ======================

window.addEventListener(
"load",
()=>{

document.body.style.opacity = "1";

});
