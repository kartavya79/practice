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
// let total=40
// function calculate(){
//     console.log(total)
//     let total=100
// }
// calculate()

//timeout method

// setTimeout(()=>{
//     console.log("line after 5 sec")
// },2*3000)

// setTimeout(()=>(
//     alert("line after 5 sec")
// ),2*3000)

// const timerID=setInterval(() => {console.log("setinterval")},1000)

// const timeoutId=setInterval(()=>{clearInterval(timerID)},10000)

// let i=1;
// const id=setInterval(() => {
//     if(i==10) clearInterval(id)
//     console.log(i)
//     i+=1
// }, 1000);

//Create element and remove method

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener("click",()=>{
//     if(name.value===""){
//         alert("Enter The Name Of Student")
//         return;
//     }
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")
//     dlt.innerText="delete"
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.innerText=name.value;
//     li.append(dlt)
//     list.appendChild(li)
//     name.value=""

// })

//Callback Function
// function print(num){
//     console.log("Inside print")
//     num()
// }

// function sample(){
//     console.log("inside callback")
// }
// print(sample)

// function print(num){
//     setTimeout(()=>{
//         console.log("inside print")
//         num()
//     },5000)
// }

// function sample(){
//     console.log("inside callback")
// }
// print(sample)

console.log("starting Home work....");

setTimeout(() => {
    console.log("homwwork done...");
    console.log("Starting Dinner...");

    setTimeout(() => {
        console.log("Dinner Done...");
        console.log("getting ready to go out...");

        setTimeout(() => {
            console.log("going to the play ground...");
        }, 1000); //after dinner
    }, 1500) //dinner table
}, 2000); //homework time
