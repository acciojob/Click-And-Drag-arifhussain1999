let isDown = false;
let startX;
const container = document.querySelector('.items');

container.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDown = true;
  startX = e.pageX;
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run if the mouse is down
  const distance = e.pageX - startX;
  container.scrollLeft -= distance; // Scroll the container
  startX = e.pageX; // Update startX for the next movement
});

container.addEventListener('mouseup', () => {
  isDown = false; // Reset the dragging flag
});

container.addEventListener('mouseleave', () => {
  isDown = false; // Reset if mouse leaves the container
});
