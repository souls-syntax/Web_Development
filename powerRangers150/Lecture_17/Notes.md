# More on JS

## `this` keyword

This keyword is of 5 types and it depends on how you call it.

1. Direct calling
2. Object calling
3. COnstructor calling
4. Inderict calling
5. Arrow func calling

Arrow function is like lamnbda fucntion but simpler syntax

```
let sqr = (n)=>{
log(n*n);
}


or 

let sqr2 = (n)=> n*n
```

call is used to make the change the object refrence of this in the calling
in case of apply you pass the arguments of og object as arrya and in call just pass normally

`bind` gives the copy of the function so you have to store it in a variable.
