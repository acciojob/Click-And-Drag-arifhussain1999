// Your code here.
let isDown=false;
let startX;
let scrollLeft;
const container=document.querySelector('.items');

container.addEventListener('mousedown',(e)=>{
	e.preventDefault(); // Prevent default behavior like text selection
  isDown = true;      // Set the flag to true to indicate dragging
  startX = e.pageX;   // Store the initial x position
});

container.addEventListener('mousemove',(e)=>{
	if (!isDown) return; // return if not dragging
	const distance = e.pageX - startX;
  container.scrollLeft -= distance; // Scroll the container
  startX = e.pageX; // Update startX for the next movement
});

container.addEventListener('mouseup',(e)=>{
	isDown=false;
});

container.addEventListener('mouseleave',()={
	isDown=false;
});