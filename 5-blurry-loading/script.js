// Select the loading text element and the background element from the DOM
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Initialize the load variable to track the percentage
let load = 0;

// Use setInterval to repeatedly call the blurring function every 30 milliseconds
let int = setInterval(blurring, 30);

function blurring() {
  // Increment the load value by 1 on each interval
  load++;

  // If load exceeds 99 (i.e., 100%), clear the interval to stop the function
  if (load > 99) {
    clearInterval(int);
  }

  // Update the inner text of the loading text element to show the current load percentage
  // This dynamically changes the text to reflect the loading progress (e.g., 0%, 1%, ..., 100%)
  loadText.innerText = `${load}%`;

  // Adjust the opacity of the loading text based on the load value
  // As the load increases from 0 to 100, the opacity decreases from 1 to 0, making the text fade out
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  // Adjust the blur effect of the background image based on the load value
  // As the load increases from 0 to 100, the blur decreases from 30px to 0px, creating a "blurring out" effect
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// The scale function maps a range of numbers to another range
// In this case, it's used to map the load percentage (0-100) to opacity (1-0) and blur (30px-0px)
function scale(number, inMin, inMax, outMin, outMax) {
  // Formula for mapping one range to another
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

//https:// stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
