# Javascript

## Higher order function
Have two definition:-

1. When you pass a function as an argument to another function then it's known as HOF.
2. When your function is returning a function itself inside it self then it's HOF

```javascript
function c (ab) {...}
function ab() {...}
// function c is HOF

function outer(){
    function inner(){

    }
    return outer;
}

// function outer is HOF
```

## Callback function
The function which are called by HOF in first definition is called callback function.
Have the character to not return anything.

## Some builtin higher order function

/// Interview important

// Also know as array methods these HOF specifically only these.

1. foreach()
2. map()
3. filter()
4. reduce()
5. some()
6. every()
7. last()
8. first()

### 1. foreach()
[HOF and array method]

It accepts a CB as function

CB also have 2 argument: 1st item, 2nd index
It doesn't return anything.

### 2. map()
[HOF and array method]

It accepts a CB as function
CB also have 2 argument: 1st item, 2nd index
It return a new array with same no. of element as the original array this is the interface.

### 3. filter()
[HOF and array method]

It accepts a CB as function
CB also have 2 argument: 1st item, 2nd index
It returns the value which gives the True satisfaction. Kind of like in python.

// New trending interview topic
### 4. some() 5. every()
Returns boolean.
