# CSS Notes


---
# 1. CSS Syntax

CSS rule-set has three parts: - **Selector** → The HTML element you want
to style. - **Property** → The attribute you want to change (e.g.,
color, font-size). - **Value** → The value of that property.

>  **Example:**

``` css
h1 {
  color: blue;
  font-size: 20px;
}
```

------------------------------------------------------------------------


---
#  2. Types of CSS

1.  **Inline CSS** → Written inside an element's `style` attribute.

    ``` html
    <h1 style="color: red;">Hello</h1>
    ```

2.  **Internal CSS** → Written inside `<style>` tag in `<head>`.

    ``` html
    <style>
      h1 { color: green; }
    </style>
    ```

3.  **External CSS** → Written in a separate `.css` file and linked
    using `<link>`.

    ``` html
    <link rel="stylesheet" href="style.css">
    ```

------------------------------------------------------------------------


---
# 3. CSS Selectors

1.  **Universal Selector (`*`)**

    ``` css
    * { margin: 0; padding: 0; }
    ```

    Selects all elements.

2.  **Element Selector**

    ``` css
    p { color: blue; }
    ```

    Selects all `<p>` elements.

3.  **ID Selector (`#`)**

    ``` css
    #title { font-size: 30px; }
    ```

    Selects element with specific ID.

4.  **Class Selector (`.`)**

    ``` css
    .highlight { background-color: yellow; }
    ```

    Selects elements with specific class.

5.  **Group Selector (`,`)**

    ``` css
    h1, p { color: green; }
    ```

    Applies same styles to multiple selectors.

6.  **Descendant Selector (space)**

    ``` css
    div p { color: red; }
    ```

    Selects `<p>` inside `<div>`.

7.  **Child Selector (`>`)**

    ``` css
    div > p { color: orange; }
    ```

    Selects only direct child `<p>` of `<div>`.

------------------------------------------------------------------------


---
#  4. Colors in CSS

1.  **Name**

    ``` css
    h1 { color: red; }
    ```

2.  **Hex Code**

    ``` css
    h1 { color: #ff0000; }
    ```

3.  **RGB**

    ``` css
    h1 { color: rgb(255, 0, 0); }
    ```

4.  **RGBA (with opacity)**

    ``` css
    h1 { color: rgba(255, 0, 0, 0.5); }
    ```

5.  **HSL**

    ``` css
    h1 { color: hsl(0, 100%, 50%); }
    ```

6.  **HSLA**

    ``` css
    h1 { color: hsla(0, 100%, 50%, 0.5); }
    ```

------------------------------------------------------------------------


---
#  5. Background Properties

1.  **background-color**

    ``` css
    body { background-color: lightblue; }
    ```

2.  **background-image**

    ``` css
    body { background-image: url('image.jpg'); }
    ```

3.  **background-repeat**

    ``` css
    body { background-repeat: no-repeat; }
    ```

4.  **background-position**

    ``` css
    body { background-position: center; }
    ```

5.  **background-size**

    ``` css
    body { background-size: cover; }
    ```

6.  **background-attachment**

    ``` css
    body { background-attachment: fixed; }
    ```

------------------------------------------------------------------------


---
#  6. Borders

1.  **border**

    ``` css
    p { border: 2px solid black; }
    ```

2.  **border-radius**

    ``` css
    p { border-radius: 10px; }
    ```

3.  **border-style**

    -   solid, dotted, dashed, double, groove, ridge, inset, outset

------------------------------------------------------------------------


---
#  7. Margins & Padding

-   **margin** → Space outside element's border
-   **padding** → Space inside element's border

``` css
div {
  margin: 20px;
  padding: 15px;
}
```

------------------------------------------------------------------------


---
#  8. Text Properties

1.  **color**

    ``` css
    p { color: blue; }
    ```

2.  **text-align**

    -   left, right, center, justify

3.  **text-decoration**

    -   none, underline, overline, line-through

4.  **text-transform**

    -   uppercase, lowercase, capitalize

5.  **letter-spacing & word-spacing**

    ``` css
    p { letter-spacing: 2px; word-spacing: 5px; }
    ```

------------------------------------------------------------------------


---
#  9. Font Properties

1.  **font-family**

    ``` css
    p { font-family: Arial, sans-serif; }
    ```

2.  **font-size**

    ``` css
    p { font-size: 16px; }
    ```

3.  **font-style**

    -   normal, italic, oblique

4.  **font-weight**

    -   normal, bold, lighter, 100--900

------------------------------------------------------------------------


---
#  10. Display Property

-   **block** → Starts on a new line, takes full width
-   **inline** → Does not start new line, only width of content
-   **inline-block** → Like inline but allows height/width
-   **none** → Hides element

``` css
span { display: inline; }
div { display: block; }
```

------------------------------------------------------------------------


---
#  11. Position Property

1.  **static** → Default
2.  **relative** → Positioned relative to its normal position
3.  **absolute** → Positioned relative to nearest positioned ancestor
4.  **fixed** → Stays fixed relative to viewport
5.  **sticky** → Scrolls until a point, then sticks

``` css
div { position: absolute; top: 20px; left: 30px; }
```

------------------------------------------------------------------------


---
#  12. Flexbox

-   **display: flex** → Activates flexbox
-   **flex-direction**
    -   row, row-reverse, column, column-reverse
-   **justify-content**
    -   flex-start, flex-end, center, space-between, space-around,
        space-evenly
-   **align-items**
    -   flex-start, flex-end, center, stretch, baseline
-   **align-content**
    -   flex-start, flex-end, center, stretch, space-between,
        space-around

``` css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

------------------------------------------------------------------------


---
#  13. Grid

-   **display: grid** → Activates grid layout
-   **grid-template-columns**
-   **grid-template-rows**
-   **gap**

``` css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
```

------------------------------------------------------------------------


---
#  14. Units in CSS

-   **px** → Pixels (absolute)
-   **em** → Relative to parent's font-size
-   **rem** → Relative to root element font-size
-   **%** → Relative to parent element
-   **vh, vw** → Relative to viewport height/width

------------------------------------------------------------------------


---
#  15. Pseudo-classes & Pseudo-elements

1.  **Pseudo-classes**
    -   `:hover` → When user hovers
    -   `:first-child` → Selects first child
    -   `:nth-child(n)` → Selects nth child

    ``` css
    a:hover { color: red; }
    ```
2.  **Pseudo-elements**
    -   `::before`
    -   `::after`
    -   `::first-letter`

    ``` css
    p::first-letter { font-size: 30px; }
    ```

------------------------------------------------------------------------


---
#  16. Transitions & Animations

1.  **Transition**

    ``` css
    div {
      transition: all 0.3s ease;
    }
    ```

2.  **Animation**

    ``` css
    @keyframes slide {
      from { left: 0; }
      to { left: 100px; }
    }

    div {
      animation: slide 2s infinite;
    }
    ```

------------------------------------------------------------------------


---
#  17. Media Queries (Responsive Design)

``` css
@media (max-width: 768px) {
  body { background-color: lightgreen; }
}
```

------------------------------------------------------------------------


---
#  18. Z-index

-   Controls stacking order of elements
-   Higher value = on top

``` css
div { z-index: 10; position: relative; }
```
