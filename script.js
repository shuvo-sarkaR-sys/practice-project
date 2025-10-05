const counter = document.getElementById('counter');
const target = +counter.getAttribute('data-target');

function startCounting() {
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // ~60fps
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = '1.2K+'; // Final formatted value
    }
  };

  updateCounter();
}

// Run animation when the page reloads
window.addEventListener('load', startCounting);
