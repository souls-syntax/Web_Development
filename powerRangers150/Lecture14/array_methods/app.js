let arr = [10,20,30,e0,50]
// foreach

arr.forEach(function(item,index) {
    console.log(item+index)
    // return item+index: //not possible
})

let newarr = arr.map(function(item,index){
    return item*item;
})


let arr2 = [10,20,22,3032,50]

let some = arr.some(function(item, index){
    if(item%10==9){
        return true;
    }
})

// 

let every = arr.every(function(item, index){
    if(item%2==0){
        return true;
    }
})
   
let doubleArr = arr.map(function(item,index){
  return item*2;
});
   
let filterArr = doubleArr.filter(function(item,index){
 if(item > 30){
    return true;
  }
});
   
    
//==============================================================
   
// Chaining of the function
   
let doubleArr2 = arr.map(function(item,index){
  return item*2}).map(item);
                                                                                                   
