# Javascript

## Functions

*Definition* -> Is simply a piece of code used to perform a task which can be called again and again/ reusable piece of code. 

* The nature of the function is to always return something.

```js
// Initializing the function
function char() {.......}
// No need to specify return type.

// Calling a function
char()
```

* When nothing is return from the function by default **undefined** is returned.  

```js
//Example
function cha() {
    console.log("Yo return undefined cause I didn't returned anything")
}

function chai() {
    console.log("Yo return cause I returned something")
    return("Kashyap")
}
```

```js
// Parameterized functions
function sum(a,b,c) { //Parameters
    console.log(a+b+c);
    return a+b+c
}

sum(10,20,30) //args
```

* In JS if there is no parameter given it points to undefined automatically.


* When you have a variable but haven't assigned it any value then it is given undefined data type.
* If JS engine doesn't understand anything it points to undefined to get rid of headache

### Undefined VS Null

**Undefined**

When something exit but we can't make an inference about it's type then it's undefined as it is existing.

**NULL**

NULL -> Mean empty something dev will assign later.

Since JS engine gives undefined by itself Devs collectively decided that for deliberate actions devs will assign NULL so we could find what is intentional and what is error.

NULL is *intentional*, undefined is JS engine crying.

```js

typeof(undefined) //-> undefined
typeof(null) //-> Object

function abs(a,b,c) {
    return a+b+c
}

abs(10,20) //Will return NaN(Not a Number) // Type of NaN is number
// It's NaN cause 10+20+Undefined is whatever(doesn't make sense)


// Default Parameterized function
function abs(a,b,c=400) {
    return a+b+c
}

```

---

```js
function outer(fn) {
    console.log(fn)
}

function inner() {
    console.log("Hello")
}

outer(inner)
//  will print this
//  function inner() {
//        console.log("Hello")
//  }
// Then we can call inner inside outer.
```

In JS function can be sent as argument.
But whole function is passed as argument not it's value or anything