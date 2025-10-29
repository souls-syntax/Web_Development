# Javascript Introduction

## Datatypes
There are two types of datatype
1. Primitive (7)
2. Non-Primitive (1)

### Primitive Datatype
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Bigint

#### Properties of PD.
* Predefined
* Inbuilt
* SOmething which can't be broken down any further.

<br>*Defination* : Primitive are predefined, inbuilt datatype which can't be broken down any further.  

### Non-primitive Datatype
> Object
<br>*Defination* : Datatype which can be broken down.
<br>**Everything inside the javascript is an object.**

---

## Variables

**Everything in javascript points** :-
<br>    When you make a variable there is the value made in cloud and then variable points to that memory instead of classical bucket example as it removed the limitation of fixed data type of the variable.


In JS when variable points to another value then the left out value if not being pointed will be destroyed by garbage collector.

#### How to declare varianble in JS

```javascript
let varName = value

```
let -> Declarative.
varName -> Variable name.
value -> Data/Value.

### Nomenclature

* var name can include a-z, A-Z and 0-9
* Can't start the var name with number.
* Special Character `_` `$` and var name can start with these and var name can only be made up of special character.
* Reserved keyword - NO

---

## Programming Language(PL)

They are of two type.

1. Compile Time - Entirely executes at one.
2. Interpreted -  Executes line by line.

### JS is :- 
1. Interpreted
2. Weakely typed.
3. Dynamically typed.
4. Single threaded.
5. Synchoronous.

**Interpreted** : - Executes line by line.

<br>**Single Threaded** : - One task can be executed one at time.

<br>**Weakly typed** : - Programming language in which the datatype of var are not fixed like in any moment you can change the datatype is called weakly PL

<br>**Dynamically typed** :- The Programming Language in which the datatype is determined are called Dynamically typed

<br>JS follows PEMDAS- parantheses > Exponentian > Multiplication > Division > Addition > Subtraction.

---

## Loops

There are 5 type of loop:

1. for
2. while
3. do-while
4. for-in
5. for-of

```javascript

// for loop
for (let i = 0; i<=10;i++) {}

// While loop
let i = 10;
while(i<100) {
    i++;    
}

// Do-While loop
let a = 10;
do{
i++;
}
while(a<=15)

```

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




```js
// let naam = "Aakarsh Kashyap"

// console.log(naam)

// let arr = [10,20,30,40,true,"Sam","Maveric"]
// let arr2 = [10,20,30,40]

// console.log(arr)
// console.log(arr2)


let janwar = {
    Type : "Dogs",
    Color: "Brown",
    Legs : 4,
    isNonVeg: true
}

console.log(janwar)
console.log(janwar["Color"])

console.log(janwar.Color)
```

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
