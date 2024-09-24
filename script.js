const items = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

items.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
    items.classList.add('active'); // Add class to change cursor
});

items.addEventListener('mouseleave', () => {
    isDown = false;
    items.classList.remove('active');
});

items.addEventListener('mouseup', () => {
    isDown = false;
    items.classList.remove('active');
});

items.addEventListener('mousemove', (e) => {
    if (!isDown) return; // If not dragging, exit
    e.preventDefault(); // Prevent default behavior
    const x = e.pageX - items.offsetLeft; // Get current mouse position
    const walk = (x - startX) * 2; // Adjust sensitivity
    items.scrollLeft = scrollLeft - walk; // Scroll the container
});
