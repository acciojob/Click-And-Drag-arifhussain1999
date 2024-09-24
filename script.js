let isDown = false;
let startX;
const container = document.querySelector('.items');

container.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDown = true;
  startX = e.pageX;
});

items.addEventListener('mousemove', (e) => {
  if (isDown) {
    const distance = startX - e.pageX; // Calculate how far the mouse moved
    items.scrollLeft += distance; // Update scroll position
    startX = e.pageX; // Update startX for the next calculation
  }
});

container.addEventListener('mouseup', () => {
  isDown = false; // Reset the dragging flag
});

container.addEventListener('mouseleave', () => {
  isDown = false; // Reset if mouse leaves the container
});
