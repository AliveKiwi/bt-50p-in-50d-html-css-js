// Select all elements with the class 'box' and store them in the 'boxses' NodeList
const boxses = document.querySelectorAll('.box');

// Add an event listener to the window object that listens for the 'scroll' event
// When the user scrolls, it triggers the 'checkBoxes' function
window.addEventListener('scroll', checkBoxes);

// Call checkBoxes immediately to check the boxes' position on initial page load
checkBoxes();

function checkBoxes() {
  // Define a 'triggerBottom' variable, which is used as the point at which the boxes will start showing.
  // It's set to 4/5 (80%) of the window's inner height. This means when a box is above 80% of the viewport, it will be animated in.
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Loop through each box element
  boxses.forEach((box) => {
    // Get the position of the box relative to the viewport using 'getBoundingClientRect()'.
    // This function returns the size of the element and its position relative to the viewport.
    const boxTop = box.getBoundingClientRect().top;

    // If the top of the box is above the 'triggerBottom' point (80% down the viewport),
    // add the 'show' class to make the box slide into view (as defined in the CSS).
    if (boxTop < triggerBottom) {
      box.classList.add('show'); // This makes the box animate into the viewport by setting 'transform: translateX(0)'
    }
    // If the box is below the 'triggerBottom', remove the 'show' class, which hides the box again.
    else {
      box.classList.remove('show');
    }
  });
}
