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

sam();