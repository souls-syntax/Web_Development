function step1() {
  return new Promise(function(resolve , reject) {
    setTimeout(function() {
      resolve("Sekected Image")
      //reject("Yep")
    }, 4000)
  })
} 


//let p1 = step1()
//p1
//.then(function(data) {console.log(data)})
//.catch(function(err) {console.log(data)})
//.finally(function() {console.log("What???")})

function step2() {
  console.log("please wait applying filter toe the ${image}")
  return new Promise(function(resolve , reject) {
    setTimeout(function() {
      resolve("Filtered Image")
      //reject("Yep")
    }, 4000)
  })

}
function step3() {
  console.log("Uploading ${caption}")
  return new Promise(function(resolve , reject) {
    setTimeout(function() {
      resolve("Filtered Image")
      //reject("Yep")
    }, 4000)
  })

}
function step4() {
  console.log("uploading")
  return new Promise(function(resolve , reject) {
    setTimeout(function() {
      resolve("Uploading")
      //reject("Yep")
    }, 4000)
  })

}



step1()
.then(function(data) {
  console.log(data)
  return step2(data)
})
.then(function(data){
  console.log(data)
  return step3(data)
})
.then(function(data){
  console.log(data)
  return step4(data)
})
.then(function(data){
  console.log(data)
})
