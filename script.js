// const container=document.querySelector(".container")
// container.addEventListener("click",()=>{console.log("div")},true)

// const button=document.querySelector("button")
// button.addEventListener("click",()=>{console.log("button")},true)


// const outer=document.querySelector(".outer")
// outer.addEventListener("click",()=>{console.log("outer div")},true)

// console.log("new code")

// console.log(b) show undefined
// console.log(a) show error 


// let a=23534
// var b=5674

// console.log(a)
// console.log(b)

// function print(){
//     var c=40
//     console.log(c)
//     console.log("inside function")
// }

// print()

// function first(){
//     second()
// }

// function second(){
//     third()
// }

// function third(){
//     console.trace()
// }

// first()

// It is when callstack limit exceed
// function infinite(){
//     infinite()
// }

// infinite()

//Temporal Dead Zone(TDZ)
let total=40
function calculate(){
    console.log(total)
    let total=100
}
calculate()
