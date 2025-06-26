function goToNext(id) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => {
    sec.classList.add("hidden");
  });

  // Show the next section
  const nextSection = document.getElementById(id);
  if (nextSection) {
    nextSection.classList.remove("hidden");
  } else {
    console.error(`Section with ID '${id}' not found.`);
  }

  // Music and typed message logic
  if (id === "message") {
    typeMessage("Dear Shreya, \nYou are the best highlight of my day, the smile on my face, and the reason for my weird giggles... 😄💕\nLet's celebrate YOU!");
    const music = document.getElementById("bg-music");
    music.currentTime = 0; // Start from the beginning or change this
    music.play().catch(() => {});
  }

  if (id === "quiz") {
    loadQuiz();
  }
}

function typeMessage(message) {
  const container = document.getElementById("typed-message");
  container.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    container.textContent += message[i];
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 50);
}
const quizData = [
  { q: "What’s your favorite snack?", options: ["Chips", "Chocolate", "Ice Cream", "Pizza"], a: 2 },
  { q: "What’s the silliest thing we've done together?", options: ["Singing badly in public", "Got lost on purpose", "Made a TikTok dance", "All of the above"], a: 3 },
  { q: "If you were a dessert, you be…", options: ["Spicy taco", "Molten lava cake", " Dark Fantasy", "Choki Choki"], a: 1 },
  { q: "Her best dance move is…", options: ["The floss", "The robot", "The penguin shake", "Moonwalk"], a: 3 },
  { q: "Our love is like…", options: ["A fine wine", "A cheesy pizza", "A sunrise", "A unicorn"], a: 1 },
  { q: "If we were superheroes, our power would be…", options: ["Cuddle beam", "Giggle shield", "Love laser", "Spoiler alerts"], a: 2 },
  { q: "How many times have I told you I love you today?", options: ["10", "100", "∞", "Still not enough"], a: 2 },
  { q: "The highlight of my day is…", options: ["Waking up", "Talking to you", "Seeing you smile", "All of the above"], a: 3 }
];
function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${q.q}</p>` + q.options.map((opt, i) => 
      `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>`).join("");
    container.appendChild(div);
  });
}
function finalSurprise() {
  document.getElementById("surprise-animation").classList.remove("hidden");
  fireConfetti();
  alert("🎊 Happy Birthday again, Shreuuu!! You're truly special to me  💗");
}
function fireConfetti() {
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}
function spawnHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 90 + 'vw';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(spawnHeart, 500);
