// Зоряне тло
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    s: Math.random() * 0.5 + 0.1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function moveStars() {
  for (let star of stars) {
    star.y += star.s;
    if (star.y > canvas.height) star.y = 0;
  }
}

function animate() {
  drawStars();
  moveStars();
  requestAnimationFrame(animate);
}
animate();

// Анімація при прокручуванні
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let el of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// Кнопка "вгору"
const toTop = document.getElementById("toTop");
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
