// Музика
const music=document.getElementById("bg-music");
const musicBtn=document.getElementById("music-toggle");
let playing=false;

musicBtn.onclick=function(){
if(!playing){
music.play();
musicBtn.innerText="🔊";
}else{
music.pause();
musicBtn.innerText="🎵";
}
playing=!playing;
};

// Темна тема
document.getElementById("theme-toggle").onclick=function(){
document.body.classList.toggle("dark-mode");
};

// Друкований лист
const text="Ти — найкраще, що сталося зі мною. Кожен день з тобою — це маленьке диво. Я вдячний долі за тебе ❤️";
let i=0;

document.getElementById("secret-btn").onclick=function(){
document.getElementById("secret-letter").style.display="block";
typeWriter();
};

function typeWriter(){
if(i<text.length){
document.getElementById("typed-text").innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

// Поява моментів
const memories=document.querySelectorAll(".memory");
window.addEventListener("scroll",()=>{
memories.forEach(mem=>{
if(mem.getBoundingClientRect().top<window.innerHeight*0.85){
mem.classList.add("show");
}
});
});

// Падаючі сердечка
function createHeart(){
const heart=document.createElement("div");
heart.classList.add("floating-heart");
heart.innerText="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(15+Math.random()*25)+"px";
heart.style.animationDuration=(4+Math.random()*3)+"s";
document.getElementById("heart-container").appendChild(heart);
setTimeout(()=>{heart.remove();},6000);
}
setInterval(createHeart,500);

// Easter Egg кліки
let clicks=0;
document.getElementById("main-heart").addEventListener("click",()=>{
clicks++;
if(clicks>=15){
alert("Ти знайшла секрет ❤️ Я люблю тебе безмежно!");
clicks=0;
}
document.getElementById("memories").scrollIntoView({behavior:"smooth"});
});

// Easter Egg LOVE
let typed="";
document.addEventListener("keydown",(e)=>{
typed+=e.key.toUpperCase();
if(typed.includes("LOVE")){
alert("LOVE — це ти ❤️");
typed="";
}
});

// LOVE блоки
const loveCards=document.querySelectorAll(".love-card");
loveCards.forEach(card=>{
card.addEventListener("click",()=>{
card.classList.toggle("active");
});
});
// ===== ГРА "Злови серце" =====
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
let score = 0;

function spawnHeart(){
  const heart = document.createElement("div");
  heart.classList.add("game-heart");
  heart.innerText = "❤️";

  const x = Math.random() * (gameContainer.offsetWidth - 30);
  const y = Math.random() * (gameContainer.offsetHeight - 30);
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  heart.onclick = function(){
    score++;
    scoreDisplay.innerText = "Очки: " + score;

    // Повідомлення при 20 очках
    if(score === 20){
      alert("Вітаю! Ти зловив 20 сердець ❤️ Моє серце твоє!");
    }

    heart.remove();
  };

  gameContainer.appendChild(heart);

  setTimeout(()=>{heart.remove()}, 2500);
}

// Спавн кожні 1.2 секунди
setInterval(spawnHeart, 1200);
// ===== Таймер "Ми разом" =====
const timerDisplay = document.getElementById("together-timer");

// Встановлюємо дату початку
const startDate = new Date("2025-01-12T00:00:00");

function updateTimer(){
  const now = new Date();
  let diff = now - startDate; // різниця в мс

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  timerDisplay.innerText = `${days} днів ${hours} год ${minutes} хв ${seconds} с разом ❤️`;
}

// Оновлюємо кожну секунду
setInterval(updateTimer, 1000);
updateTimer(); // старт відразу

