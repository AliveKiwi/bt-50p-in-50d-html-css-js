// Selects the first element with the class 'search' and assigns it to the variable 'search'.
// This will likely be the container for the search input and button.
const search = document.querySelector('.search');

// Selects the first element with the class 'btn' and assigns it to the variable 'btn'.
// This will likely be the button element used to trigger the search action.
const btn = document.querySelector('.btn');

// Selects the first element with the class 'input' and assigns it to the variable 'input'.
// This will be the text input field where users type their search query.
const input = document.querySelector('.input');

// Adds a 'click' event listener to the 'btn' element.
// When 'btn' is clicked, the function inside will run.
btn.addEventListener('click', () => {
  // Toggles the 'active' class on the 'search' element.
  // This will show or hide the search bar by adding/removing the 'active' class.
  search.classList.toggle('active');

  // Focuses the input field to allow the user to start typing immediately.
  input.focus(); // Corrected 'input.focus' to 'input.focus()' to properly call the function.
});
