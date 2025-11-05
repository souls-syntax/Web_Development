
console.log("Start") 
let id1 = setInterval(() => console.log("Hello"), 2000)
console.log("End")


setTimeout(() => {clearInterval(id1)}, 30000)


