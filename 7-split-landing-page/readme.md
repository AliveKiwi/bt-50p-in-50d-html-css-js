# How This CSS Works with the HTML

1. **Body and Container**:
   - The `body` is set to be the full viewport height, with overflow hidden to prevent scrolling. The `.container` holds the two `.split` divs (left and right), each taking up half of the viewport (`50%` width).

2. **Left and Right Splits**:
   - The `.split.left` and `.split.right` are absolutely positioned to fill the left and right halves of the viewport, respectively. Each split has its own background image (`ps.jpg` for PlayStation 5 and `xbox.jpg` for Xbox Series X).
   - A semi-transparent overlay is applied using the `::before` pseudo-elements to add a subtle colored effect over the images (`rgba(87, 84, 236, 0.7)` for the left, and `rgba(43, 43, 43, 0.8)` for the right).

3. **Text and Button**:
   - Inside each split, there is an `h1` heading and a `.btn` button. These are centered horizontally using `left: 50%` and `transform: translateX(-50%)`, and positioned at specific vertical percentages (`top: 20%` for the heading, and `top: 40%` for the button).
   - The buttons have hover effects, changing their background and border colors depending on whether they are in the left or right split.

4. **Hover Effects**:
   - The `hover-left` and `hover-right` classes are likely added by JavaScript. When `.hover-left` is applied, the left split expands to `75%` width, while the right split shrinks to `25%`. Similarly, `.hover-right` expands the right split and shrinks the left one.
   - This creates the dynamic hover effect where the user’s focus is drawn to one side of the screen as they hover over it.

5. **Responsiveness**:
   - A media query is applied for screens smaller than `800px`, adjusting the size of the headings and buttons to make the layout more suitable for smaller devices.

## How It All Works

- The page is split into two sections, each taking up half the screen. Hovering over either side triggers a smooth transition where the hovered side expands to take up 75% of the screen, while the other side shrinks to 25%. This effect is controlled using JavaScript, which likely adds the `.hover-left` or `.hover-right` class to the `.container` when the user hovers over one of the splits.


# How JS Works with HTML and CSS:

1. **Element Selection**:
   - `document.querySelector('.left')`: Selects the `.left` split (PlayStation 5 section).
   - `document.querySelector('.right')`: Selects the `.right` split (Xbox Series X section).
   - `document.querySelector('.container')`: Selects the container that wraps both splits.

2. **Hover Effects (Mouse Enter and Leave)**:
   - **When Hovering Over the Left Split**:
     - When the user hovers over the left section (`mouseenter` event), the class `hover-left` is added to the `.container`. This triggers the CSS rules that expand the left split (`.left`) to 75% of the viewport and shrink the right split (`.right`) to 25%.
     - When the user moves their mouse away from the left section (`mouseleave` event), the `hover-left` class is removed, resetting both splits to their original 50% width.
   
   - **When Hovering Over the Right Split**:
     - Similarly, when the user hovers over the right section, the class `hover-right` is added to the `.container`. This causes the right split to expand to 75% and the left split to shrink to 25%.
     - When the user stops hovering, the `hover-right` class is removed, resetting both sections to their initial state.

3. **Interaction with CSS**:
   - In the CSS, the following classes control the split behavior:
     - `.hover-left .left { width: 75%; }` and `.hover-left .right { width: 25%; }`: These rules apply when `hover-left` is added, expanding the left split and shrinking the right.
     - `.hover-right .right { width: 75%; }` and `.hover-right .left { width: 25%; }`: These rules apply when `hover-right` is added, expanding the right split and shrinking the left.
   - The transitions (`transition: all var(--speed) ease-in-out;`) ensure that these width changes happen smoothly over 1 second (1000ms).

## Summary

- The JavaScript code listens for `mouseenter` and `mouseleave` events on both the left and right splits.
- When the mouse enters a split, a class (`hover-left` or `hover-right`) is added to the container, causing the respective split to expand and the other to shrink.
- When the mouse leaves, the class is removed, and the splits return to their original 50-50 layout.

This JavaScript helps create the dynamic hover effect where one side of the page visually dominates as you move your mouse over it, with smooth transitions.

