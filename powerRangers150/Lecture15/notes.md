# Javascript

## Closure
A closure is a function plus the lexical environment (the variable bindings) that were in scope where the function was defined. The function keeps references to those bindings, not copies.

When we return a function, that is not returned alone but along with it's lexical dependent environment
This is 

```javascript
function sam() {
    var a = 10;
    let b = 10;
    const c = 30;

    function mav(){
        console.log(a);
        console.log(c);
    }
    return mav
}
```
When the function is returned it will come along with `a` and `c` as the function depends on them so it carries their packages.

1. GEC – Global Execution Context
This is like the default stage when a JS file starts running. It’s created when your code first executes. There’s only one GEC per program. It has two parts:

Memory (Variable Environment): where variables and functions are stored.

Thread of Execution: where code is actually run line by line.

1. FEC – Function Execution Context
Every time a function is called, JS makes a new mini-world for it, a Function Execution Context. It’s temporary and gets tossed once the function finishes running.

1. CEP – Code Execution Phase
Each context (global or function) has two phases:

Memory Creation Phase (MCP) — JS scans code, allocates memory for variables and functions, sets undefined for variables, and stores function definitions as whole.

Code Execution Phase (CEP) — JS actually runs the code line by line, assigning values, calling functions, etc.

## Constructors
```javascript
fun sam(){
    this.naam = "sam";
    this.umar = 99;
    this.kyaChatraHai = true;
    this.pasandeedaRang = "Blue";
    
}
let a = new sam("sam",99,"blue",true) // This becomes a constructor function by adding new keyword, some kind of eldritch mashup with java
let a = new sam("Mav",91,"Brown",true)
let a = new sam("monu",60,"Pink",true)
let a = new sam("monu",60,"Pink",true)
let a = new sam("monu",60,"Pink",true)
let a = new sam("monu",60,"Pink",true)

```