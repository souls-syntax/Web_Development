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

























