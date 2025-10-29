

// 1 

function a(fn){
    console.log("Hi i am A");
}

function b(){
    console.log("Hi i am B");
}
a(b);
// Here a is HOF
// her b is callback function


// =============================

function outer(){
    console.log("Hi i am outer")
    function inner(){
        console.log("hi i am INNER")
    }
    return inner
}
// Here outer is HOF
// here inner is callback function

