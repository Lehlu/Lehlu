
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const container = document.getElementById("letters");
for (let i = 0; i < 25; i++) {
  const span = document.createElement("span");
  span.className = "letter";
  span.textContent = letters[Math.floor(Math.random() * letters.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.top = Math.random() * 100 + "vh";
  span.style.animationDuration = (5 + Math.random() * 10) + "s";
  container.appendChild(span);
}
