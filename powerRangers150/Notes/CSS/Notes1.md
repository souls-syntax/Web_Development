# CSS Notes

## What is CSS?
CSS (Cascading Style Sheets) is used to style and layout web pages.

## Basic Syntax
```css
selector {
    property: value;
}
```

## Example
```css
h1 {
    color: blue;
    font-size: 2em;
}
```

## Selectors
- **Element Selector:** `p { }`
- **Class Selector:** `.classname { }`
- **ID Selector:** `#idname { }`

## Common Properties
- `color`
- `background-color`
- `font-size`
- `margin`
- `padding`
- `border`

## How to Include CSS
- Inline: `<h1 style="color: red;">`
- Internal: `<style> ... </style>`
- External: `<link rel="stylesheet" href="styles.css">`
  

## Flexbox

It have two axes:
1. Main axis - defined using `flex-direction`
2. Cross axis

### Main Axis

   