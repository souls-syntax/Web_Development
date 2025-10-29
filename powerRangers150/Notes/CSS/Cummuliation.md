**Get ready cause power rangers are here**

---------------------------------------------------------------------------------------------------------------

*CSS* (Casceding style sheet)
Could be used in 3 ways

1. Inline
2. Internal
3. External

*Inline*
used keyword is `style`
use using key value pair

**Key:Value**

----------------
Code writing principle
* DRY = Don't repeat yourself (The developers choice)
* WET = Write everything twice (The masochist choice) {Used by those who use inline CSS}
Principle of SOC
* SOC = Seperation of concern (Don't make a khidchi make different files for HTML and CSS instead of using internal or inline)
----------------

*Internal*


The hirerachy
inline > internal > external


Internal CSS should generally be after the external file linking line

## Part 2

**Box Model**

Element area = Content area + Padding area + Border
// Margin is not part of Element.

Box model = content+padding+border+margin 

-----------------
-               -
-  ----------   -
-  -        -   -
-  ----------   -
-               -
-----------------

## *Position Property*
There are 5 position property

1. Static
2. Relative
3. Absolute
4. Fixed
5. Sticky

### Static
Static is the default positioning that every element gets.
Means - "Put the element to it's default position in normal flow."
```css
.positioned {
    position: static;
    background: yellow;
}
```
### Relative
Once element has taken its place in the normal flow, can be then modified its position. Can even make it overlap other element on the page

```css
.positioned {
    position: relative;
    background: yellow;
}
```
Position can be modified using `top` , `bottom` , `left` and `right`.

### Absolute positioning

`position: absolute;`

An absolutely positioned doesn't exit in the normal document flow.  

It sits on it's own layer separate from everything else.

Can be used to create isolated UI features which don't interfere with the layout of other elements on the page. eg. pop-up boxes, control panels.

#### Z-index
`z-index: 1;`

Basically a hierarchy for these overlapping elements.  
Higher value will go above.  
Lower value will go down.  

#### Positioning context

By default if none of the ancestors have a position set(It's static by default)
-    Positioned element will use the initial containing block as reference which is basically the viewport.

- If ancestor have a position then that ancestor becomes the containing block. Latest generation is considered.


### Fixed positioning

Fixed position fixes an element in place relative to the visible portion of the viewport.  
Can be used to make persistent nav-bars which don't leave the position upon scroll.

eg.

```css
.positioned {
    position: fixed;
    top:0;
    width:500px;
    margin-top:0;
    padding:10px;
    background: yellow;
}
```

### Sticky Position

Basically a hybrid between relative and fixed.

It allows a positioned elemnt to act like it's relative positioned until it's scrolled to a certain threshold (e.g., 20px from the top of the viewport), after which it becomes fixed.

`position: sticky`

## Part 3

### Display properties


# Position & Display Notes

## Types of Properties

- **Parent Properties:** Affect the container and its children (e.g., `display: flex`).
- **Child Properties:** Affect individual items inside a container (e.g., `flex-grow`, `display: inline-block`).

## Display Properties

- `display: inline-block`: Used on child elements to allow them to sit next to each other while maintaining block-level styling.
- `display: flex`: Used on parent elements to enable Flexbox layout for its children.

## Positioning

- **Absolute Positioning:** Positions an element relative to its closest positioned ancestor (an ancestor with a set position other than `static`). If none exists, it positions relative to the initial containing block.

---

## Flexbox Notes

- **Flexbox** is a powerful layout model for distributing space and aligning items in a container.
- The parent element must have `display: flex` or `display: inline-flex` to activate Flexbox.
- **Main Axis:** Direction items are placed (`flex-direction: row` or `column`).
- **Cross Axis:** Perpendicular to the main axis.

### Key Flexbox Properties

- **Parent Properties:**
    - `flex-direction`: Sets the direction of the main axis (`row`, `column`, etc.).
    - `justify-content`: Aligns items along the main axis (`flex-start`, `center`, `space-between`, etc.).
    - `align-items`: Aligns items along the cross axis (`flex-start`, `center`, `stretch`, etc.).
    - `flex-wrap`: Allows items to wrap onto multiple lines.
    - `align-content`: Aligns multiple lines of items when wrapping.

- **Child Properties:**
    - `flex-grow`: Defines how much a flex item will grow relative to the rest.
    - `flex-shrink`: Defines how much a flex item will shrink relative to the rest.
    - `flex-basis`: Sets the initial size of a flex item.
    - `align-self`: Overrides `align-items` for individual items.

### Example

```css
.parent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.child {
    flex: 1;
}
```


There are two types of property

display inline block is child property

flex is parent property

In absolute -> It takes value relative to the closest parent to which the dimension have been given


## Flexbox Notes

- **Flexbox** is a layout model for arranging items in a container.
- The parent element must have `display: flex` or `display: inline-flex`.
- **Main Axis**: Defined by `flex-direction` (`row`, `column`, etc.).
- **Cross Axis**: Perpendicular to the main axis.
- **Key Properties:**
    - `justify-content`: Aligns items along the main axis.
    - `align-items`: Aligns items along the cross axis.
    - `flex-wrap`: Allows items to wrap onto multiple lines.
    - `align-content`: Aligns lines of items when wrapping.
- **Child Properties:**
    - `flex-grow`, `flex-shrink`, `flex-basis`: Control item sizing.
    - `align-self`: Overrides `align-items` for individual items.

**Example:**
```css
.parent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.child {
    flex: 1;
}
```

flex is parent property

```css
div{
    width: 75px;
    height: 75px;
    border: 1px solid black;
}

section {
    width: 90vh;
    height: 90vh;
    border: 2px solid maroon;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* justify-content: center; */
    /* justify-content: space-evenly; */
    /* justify-content: space-around; */
    /* justify-content: space-between; */
    /* justify-content: flex-end; */
    /* align-items: center; */
    align-content: flex-start;
    row-gap: 10px;
    column-gap: 10px;
    gap: 30px;
}
```

# Part 4

# Grid

This is 2D property
It is used to make dynamic websites.

```css
/* These are parent property */
    display: grid;
    grid-template-columns: 300px 200px;
    grid-template-rows: 100px 100px 100px 100px 100px;
    grid-auto-flow: column; 
```

gird-auto-flow is used to give direction to the boxes which position is not defined or not considered by the mXn style boxing.

mXn style boxing
consider you have 10 div elements then if you want to give space to each element you use
```css
    gird-template-columns: firstDivSize(100px) secondDivSize(100px) thirdDivSize(100px)
    grid-template-rows: 100px 100px 100px;
```
Here we only considered 9 boxes so 1 box is left we use gird-auto-flow to decide where it will be shown if there is space left in parent container.

```css
/* .div {
    width: 70px;
    height: 70px;
    border: 1px solid black;
    background-color: blue;
}

#container {
    /* display: flex; */
/* height: 90vh;
    display: grid;
    grid-template-columns: 300px 200px;
    grid-template-rows: 100px 100px 100px 100px 100px;
    /* grid-auto-flow: column;  */
/* grid-auto-rows: 100px;
    grid-auto-columns: 80px;
}
 /* */


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#container {
    height: 90vh;
    width: 90vw;

    
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 4fr 4fr 1fr;
    grid-template-areas:    "header header header"
                            "nav1 main nav3"
                            "nav2 main nav3"
                            "footer footer footer"
}

.header {
    grid-area: header;
    /* grid-column-start:1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2; */
}

.nav1 {
    grid-area: nav1;
    /* grid-column-start:1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3; */
}

.nav2 {
    grid-area: nav2;
    /* grid-column-start:1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4; */
}

.main {
    grid-area: main;
    /* grid-column-start:2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4; */
}

.nav3 {
    grid-area: nav3;
    /* grid-column-start:3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4; */
}

.footer {
    grid-area: footer;
    /* grid-column-start:1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5; */
}
```


