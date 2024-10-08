// Select the left, right, and container elements from the DOM
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// Add an event listener to the 'left' element for when the mouse enters the left split
// When the user hovers over the left split, the 'hover-left' class is added to the container
left.addEventListener(
  'mouseenter',
  () => container.classList.add('hover-left') // Expands the left split and shrinks the right split
);

// Add an event listener to the 'left' element for when the mouse leaves the left split
// When the user stops hovering over the left split, the 'hover-left' class is removed from the container
left.addEventListener(
  'mouseleave',
  () => container.classList.remove('hover-left') // Resets both splits to their original 50% width
);

// Add an event listener to the 'right' element for when the mouse enters the right split
// When the user hovers over the right split, the 'hover-right' class is added to the container
right.addEventListener(
  'mouseenter',
  () => container.classList.add('hover-right') // Expands the right split and shrinks the left split
);

// Add an event listener to the 'right' element for when the mouse leaves the right split
// When the user stops hovering over the right split, the 'hover-right' class is removed from the container
right.addEventListener(
  'mouseleave',
  () => container.classList.remove('hover-right') // Resets both splits to their original 50% width
);
