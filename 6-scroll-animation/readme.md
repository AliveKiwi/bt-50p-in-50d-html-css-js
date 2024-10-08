# Explanation of the Animation and Layout

## CSS

- **Body Styling**:
  - The body is using flexbox to center the content (the heading and the boxes) both horizontally and vertically. The `flex-direction: column` ensures that the content flows vertically.
  - The `overflow-x: hidden` ensures that content positioned outside the viewport horizontally doesn’t cause a scrollbar.

- **Box Styling (`.box`)**:
  - Each `.box` has a fixed width and height and is centered with flexbox inside. Initially, each box is positioned off-screen:
    - Odd-numbered boxes (`:nth-of-type(odd)`) are translated 400% to the right (`transform: translateX(400%)`).
    - Even-numbered boxes (`:nth-of-type(even)`) are translated 400% to the left (`transform: translateX(-400%)`).
  - When the `.show` class is added (likely via JavaScript when the boxes scroll into view), the `transform: translateX(0)` is applied, bringing the boxes into the center of the screen with a smooth transition (`transition: transform 0.4s ease`).

- **`box.show`**:
  - This class is likely dynamically added by JavaScript when the user scrolls to a certain point on the page. Once added, the boxes slide into view from either the left or right.

- **`.box h2`**:
  - The `h2` inside each box is styled with a large font size to make the content more prominent.

### How This CSS Interacts with the HTML

- The `.box` elements in the HTML are initially positioned off-screen (either to the left or right, depending on their type).
- As the user scrolls down the page, JavaScript will detect when each box is in the viewport and add the `.show` class, triggering the animation that slides them into view.
  
This creates a scroll-based animation where boxes smoothly slide in from the left or right as they come into view.

Let me know if you'd like to see how the JavaScript might work to add the `.show` class or if you need further explanation!

## JS

### How This Works

1. **Selecting the Boxes**:  
   - `const boxses = document.querySelectorAll('.box');` selects all the `.box` elements in your HTML and stores them in a NodeList. These boxes are the ones you want to animate when they scroll into view.

2. **Scroll Event Listener**:
   - `window.addEventListener('scroll', checkBoxes);` adds an event listener to the window object that triggers the `checkBoxes()` function whenever the user scrolls. This ensures that the visibility of the boxes is checked every time the user scrolls.

3. **Trigger Point for Animation**:
   - The variable `triggerBottom` is calculated based on the window height, specifically at 80% of the window height (`(window.innerHeight / 5) * 4`). This sets the point where the boxes will start becoming visible as the user scrolls.

4. **Calculating Box Position**:
   - The `getBoundingClientRect().top` method returns the distance of the top of each box relative to the top of the viewport. This helps to determine if a box has reached the trigger point (80% of the viewport height).

5. **Animating Boxes**:
   - If the top of a box is higher than the `triggerBottom`, the `show` class is added, which makes the box slide into view (`transform: translateX(0)`).
   - If the box is below the trigger point, the `show` class is removed, causing the box to move off-screen again.

### Relation to HTML and CSS

- **HTML**: The `.box` elements in the HTML are initially positioned off-screen (left or right) using `transform: translateX(400%)` or `translateX(-400%)` from the CSS.
- **CSS**: The `.show` class in the CSS brings the box back into the viewport by setting `transform: translateX(0)` and triggering a smooth sliding effect.
- **JavaScript**: This script listens for the scroll event and dynamically adds/removes the `.show` class to/from each `.box` element based on its position relative to the viewport.

### Flow

1. When the page loads, the `checkBoxes()` function is called immediately to check the position of the boxes.
2. As the user scrolls, the scroll event triggers `checkBoxes()` again to continuously check the position of each `.box`.
3. The boxes that cross the 80% mark (determined by `triggerBottom`) will have the `.show` class added and slide into view, while those below it will hide.

This creates a scroll-based animation where the boxes smoothly slide in from the left or right as they come into the visible part of the viewport.