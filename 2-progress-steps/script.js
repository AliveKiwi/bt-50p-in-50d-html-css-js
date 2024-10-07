const progress = document.getElementById('progress');
// Selects the element with the ID 'progress' and assigns it to the variable 'progress'.
// This will likely be a progress bar that shows the current progress visually.

const prev = document.getElementById('prev');
// Selects the element with the ID 'prev' (probably a button to go to the previous step) and assigns it to the variable 'prev'.

const next = document.getElementById('next');
// Selects the element with the ID 'next' (probably a button to go to the next step) and assigns it to the variable 'next'.

const circles = document.querySelectorAll('.circle');
// Selects all elements with the class 'circle' and assigns them as a NodeList to the 'circles' variable.
// These are likely indicators or steps in the progress tracker.

let currentActive = 1;
// Initializes a variable 'currentActive' and sets its value to 1, representing the currently active step or progress point.

next.addEventListener('click', () => {
  // Adds an event listener to the 'next' button. When the button is clicked, the function inside will run.

  currentActive++;
  // Increments the value of 'currentActive' by 1 to move to the next step.

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // If 'currentActive' exceeds the total number of circles, set it to the maximum number of circles (to prevent going beyond the last step).

  update();
  // Calls the 'update' function to reflect the change in the UI.
});

prev.addEventListener('click', () => {
  // Adds an event listener to the 'prev' button. When the button is clicked, the function inside will run.

  currentActive--;
  // Decrements the value of 'currentActive' by 1 to move to the previous step.

  if (currentActive < 1) {
    currentActive = 1;
  }
  // If 'currentActive' is less than 1 (trying to go before the first step), set it to 1 (to prevent going back beyond the first step).

  update();
  // Calls the 'update' function to reflect the change in the UI.
});

function update() {
  // Defines the 'update' function, which will update the UI based on the current step (active circle).

  circles.forEach((circle, idx) => {
    // Loops through each circle. 'circle' is the current element, and 'idx' is its index.

    if (idx < currentActive) circle.classList.add('active');
    // If the index of the circle is less than the currentActive step, add the 'active' class to it, visually highlighting it.
    else circle.classList.remove('active');
    // Otherwise, remove the 'active' class to visually mark it as inactive.
  });

  const actives = document.querySelectorAll('.active');
  // Selects all elements with the class 'active' and assigns them to 'actives'.
  // These are the currently active steps/circles.

  console.log(actives.length - 1);
  // Logs the number of active elements minus 1 (since arrays are 0-indexed).

  console.log(circles.length - 1);
  // Logs the total number of circles minus 1.

  console.log((actives.length - 1) / (circles.length - 1));
  // Logs the ratio of active circles to total circles. This is used to calculate the progress percentage.

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  // Sets the width of the progress bar. It calculates the percentage by dividing the number of active circles by the total number of circles.

  if (currentActive === 1) {
    prev.disabled = true;
  }
  // If the first step is active, disable the 'prev' button (no going back).
  else if (currentActive === circles.length) {
    next.disabled = true;
  }
  // If the last step is active, disable the 'next' button (no moving forward).
  else {
    prev.disabled = false;
    next.disabled = false;
  }
  // Otherwise, enable both the 'prev' and 'next' buttons.
}
