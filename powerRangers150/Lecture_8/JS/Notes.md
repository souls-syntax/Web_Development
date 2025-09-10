# Javascript

## Arrays

* heterogeneous collection of data.
* Dynamic size.
* Continuous.
* Start with 0th index.
* It is ordered in nature.

```javascript
// How to declare array in javascript
let arr = [1,2,3,true,"sum",null, undefined,100.09]

// How to access the array
console.log(arr);
// Specific element
let x = index;
console.log(arr[x]);

// How to make nested or n-D array
let arr = [1,2,3,[true,["sum",null], undefined],100.09]
// How to access nested elements
console.log(arr[x][y][z])
```
Semicolon is not required in JS it is only needed when you write multiple instruction in same line.


## Objects
* Collection of properties
* Properties is always a key: value pair
* Objects are unordered collection of properties.


```javascript
// How to declare object
let obj = {}

// How to make object
// Person as object

let person = {
    tshirt : "Burberry",
    shoes : "Nike"
}

let janwar = {
    Type : "Dogs",
    Color: "Brown",
    Legs : 4,
    Eat  : "Non-Veg"
}

// To access each properties
//Array style
console.log(objectName["propertyNameInString"])
// Behind the scene the keys are stored as string. So to access it through array style reference it as string.
// Method style
console.log(objectName.propertyName)

```
**Keys inside the object is always stored as string.**




