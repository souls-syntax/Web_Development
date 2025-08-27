# Gird

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