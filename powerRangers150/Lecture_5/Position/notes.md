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

