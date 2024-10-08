# Explanation of How it Works:

## CSS

- **Body Styling**:
  - The `body` is styled to center the content (loading text) both horizontally and vertically using flexbox. The height is set to the full height of the viewport (`100vh`), and `overflow: hidden` prevents any scrolling.

- **Background Section (`.bg`)**:
  - The background image is positioned with `absolute`, slightly moved outside the viewport on all sides (`top: -30px`, `left: -30px`, and so on) to ensure the blur effect doesn’t reveal any edges.
  - The `background` property uses `center center` to ensure the image is centered and `cover` to make sure the image covers the entire background.
  - The `filter: blur(70px)` applies the blur effect to create a soft, out-of-focus background, giving the impression of a blurry loading effect.
  - The background is set to a negative z-index (`z-index: -1`) so that it remains behind other elements (like the loading text).

- **Loading Text (`.loading-text`)**:
  - The large, centered text showing the loading percentage is styled with a font size of `50px` and is set to white (`#fff`), so it stands out against the dark, blurred background.

### How It All Comes Together

- The `.bg` class provides a blurry background effect while the `.loading-text` shows the loading percentage over this background. The result is a smooth loading screen with a prominent focus on the loading percentage text, and the blur filter applied to the background enhances the visual interest.

If the JavaScript updates the percentage in the `.loading-text` dynamically (as you may do in the `script.js`), the text will update to show the loading process while maintaining the blurry background effect.

Would you like to see an example of how the JavaScript might handle the dynamic loading effect or any other details?

## JS

- **Element Selection**:
  - `document.querySelector('.loading-text')`: Selects the text that shows the loading percentage (`0%` to `100%`).
  - `document.querySelector('.bg')`: Selects the background element that has the blur effect.

- **Interval and Blurring Function**:
  - `setInterval(blurring, 30)`: Calls the `blurring()` function every 30 milliseconds, which creates the effect of gradual loading over time.
  - `load` is a counter starting at 0 and increasing by 1 every time the function is called, simulating the loading progress from 0% to 100%.
  - When `load` exceeds 99, the `clearInterval(int)` function stops the repeating execution.

- **Text and Opacity Updates**:
  - `loadText.innerText = `${load}%`;`: Updates the text inside the `.loading-text` element to show the current load percentage.
  - `loadText.style.opacity = scale(load, 0, 100, 1, 0);`: Gradually reduces the opacity of the loading text as the loading progresses, making the text fade out. The `scale()` function maps the range from `0-100` (load) to `1-0` (opacity).

- **Background Blur Effect**:
  - `bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;`: Dynamically reduces the blur on the background image as the load value increases. The background starts with a blur of 30px, which gradually decreases to 0px (fully focused) as loading completes.

### `scale()` Function:
- This function maps one range of numbers (in this case, from `0-100`) to another range (e.g., from `30px` to `0px` for the blur effect, or `1` to `0` for opacity).
- It ensures that the blur and opacity decrease proportionally as the load percentage increases.

### Relation to HTML and CSS:
- The **HTML** includes the `.loading-text` for displaying the percentage and `.bg` for the background image.
- The **CSS** defines the initial appearance of the elements, like the blurred background and large loading text. The JavaScript dynamically modifies the opacity of the loading text and the blur filter on the background as the page "loads."

This creates a smooth, visually engaging loading screen with a "blurring out" effect on the background and fading text.

Let me know if you need further clarification or additional functionality!