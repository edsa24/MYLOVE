const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const finalStep = document.getElementById("finalStep");

const nextBtn = document.getElementById("nextBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalBtn = document.getElementById("finalBtn");

const questionEl = document.getElementById("question");
const response = document.getElementById("response");
const finalMessage = document.getElementById("finalMessage");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// typing sound
const typingSound = new Audio("typing.mp3");
typingSound.volume = 0.2;

function typeText(element, text, speed = 50) {
  element.innerHTML = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      typingSound.currentTime = 0;
      typingSound.play();
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}// floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 10 + 15) + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 500);

// NEXT
nextBtn.onclick = () => {
  step1.classList.remove("active");
  step2.classList.add("active");
  typeText(questionEl, "Do you still LOVE me?");
};

// YES
yesBtn.onclick = () => {
  step2.classList.remove("active");
  step3.classList.add("active");
  typeText(response, "Really?? I love you too so much baby! ");
};

// NO RUN
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

noBtn.onclick = () => {
  typeText(response, "Hey! I don't need that answer 😤 make it YES.");
};

// Function to show final images slideshow
function showFinalImages() {
  const finalImages = document.querySelectorAll("#finalImages .final-img");
  let currentFinal = 0;

  function nextImage() {
    finalImages.forEach(img => img.classList.remove("active"));
    finalImages[currentFinal].classList.add("active");
    currentFinal = (currentFinal + 1) % finalImages.length;
  }

  nextImage(); 
  setInterval(nextImage, 2000); 
}

// FINAL
finalBtn.onclick = () => {
  step3.classList.remove("active");
  finalStep.classList.add("active");
  typeText(finalMessage, "No matter what life throws at us, my choice will always be you \n I’ll never walk away, no matter the circumstances. I’ll wait for you, and I hope you’ll never push me aside. I love you more than words could ever capture. You’re the one I want, today and always. 💖");

  // start final images slideshow
  showFinalImages();
};

// AUTO PLAY MUSIC
music.play().catch(() => {
  // If browser blocks autoplay, play after first user interaction
  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });
});
