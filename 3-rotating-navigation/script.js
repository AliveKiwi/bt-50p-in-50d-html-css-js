// Selects the element with the ID 'open' and assigns it to the variable 'open'.
// This is likely a button or a trigger to open a navigation menu.
const open = document.getElementById('open');

// Selects the element with the ID 'close' and assigns it to the variable 'close'.
// This is likely a button or a trigger to close the navigation menu.
const close = document.getElementById('close');

// Selects the first element with the class 'container' and assigns it to the variable 'container'.
// This will be the main container where the navigation will be shown or hidden.
const container = document.querySelector('.container');

// Adds a 'click' event listener to the 'open' element.
// When 'open' is clicked, the 'show-nav' class is added to the 'container' element,
// which will likely make the navigation menu visible.
open.addEventListener('click', () => container.classList.add('show-nav'));

// Adds a 'click' event listener to the 'close' element.
// When 'close' is clicked, the 'show-nav' class is removed from the 'container' element,
// which will likely hide the navigation menu.
close.addEventListener('click', () => container.classList.remove('show-nav'));
