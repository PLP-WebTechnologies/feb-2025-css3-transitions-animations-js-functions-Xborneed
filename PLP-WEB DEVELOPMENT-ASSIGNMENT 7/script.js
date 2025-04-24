// Load animation count from localStorage
let count = localStorage.getItem('animationCount') || 0;
document.getElementById('count').textContent = count;

function triggerAnimation() {
  const box = document.getElementById('box');

  // Add the animation class
  box.classList.add('animate');

  // Remove class after animation completes to allow replay
  setTimeout(() => box.classList.remove('animate'), 500);

  // Update count
  count++;
  localStorage.setItem('animationCount', count);
  document.getElementById('count').textContent = count;
}
