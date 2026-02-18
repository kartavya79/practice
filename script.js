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

// console.log("starting Homework....");

// setTimeout(() => {
//     console.log("homewwork done...");
//     console.log("Starting Dinner...");

//     setTimeout(() => {
//         console.log("Dinner Done...");
//         console.log("getting ready to go out...");

//         setTimeout(() => {
//             console.log("going to the play ground...");
//         }, 1000); //after dinner
//     }, 1500) //dinner table
// }, 2000); //homework time

//Hell callback
// function finishhomework(callback) {
//     console.log("starting homework...");
//     setTimeout(() => {
//         console.log("homework done!...");
//         callback();
//     }, 2000);
// }

// function eatdinner(callback) {
//     console.log("starting dinner...")
//     setTimeout(() => {
//         console.log("Dinner done!...")
//         callback();
//     }, 1500)
// }

// function gotoplaground() {
//     console.log("Going to playground!...");
// }

// finishhomework(() => {
//     eatdinner(() => {
//         gotoplaground();
//     });
// });

//Promise 
// console.log("before Promise")
// const p=new Promise((resolve,reject)=>{
//     // resolve()
//     let done=true;
//     setTimeout(()=>{
//         if(done){
//             // resolve("work has been completed")
//             resolve({name:"Shubham",age:19})
//         }
//         else{
//             reject("work has been not completed")
//         }
//         // resolve("resolved")
//         // reject()
//     },5000)
// })
// // console.log(p)
// p.then((data)=>{
//     console.log("promise resolved")
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally block")
// })
// console.log("After promise")

// function dohomework(){
//     const p=new Promise((resolve,reject)=>{
//         let done=true;
//         setTimeout(()=>{
//             if(done){
//                 console.log("homework completed")
//                 resolve("homework done")
//             }
//             else{
//                 reject("homework not done")
//             }
//         },3000)
//     })
//     return p;
// }

// function eatdinner(){
//     const p=new Promise((resolve,reject)=>{
//         let done=true;
//         setTimeout(()=>{
//             if(done){
//                 console.log("dinner completed")
//                 resolve("dinner done")
//             }
//             else{
//                 reject("dinner not done")
//             }
//         },2000)
//     })
//     return p;
// }

// function gotoplayground(){
//     const p=new Promise((resolve,reject)=>{
//         let done=true;
//         setTimeout(()=>{
//             if(done){
//                 console.log("going to playground")
//                 resolve("krish going to playground")
//             }
//             else{
//                 reject("not going to playground")
//             }
//         },2000)
//     })
//     return p;
// }

// dohomework().then((data)=>{
//     console.log(data)
//     return eatdinner()
// }).then((data)=>{
//     console.log(data)
//     return gotoplayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("go to sleep")
// })

// function oderfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("order food")
//             res("order food")
//         })
//     },2000)
// }

// function preparefood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("preparing food")
//             res("preparing food")
//         })
//     },3000)
// }

// function deliverfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("deliver food")
//             res("deliver food")
//         })
//     },2000)
// }

// async function foodorder(){
//     const data=await oderfood()
//     console.log(data)
//     await oderfood()
//     await preparefood()
//     await deliverfood()
// }
// foodorder()

// console.log("first line")
// try{
//     let age=16
//     if(age<18){
//         // console.log("you are a minor")
//         throw new Error("you are a minor")
//     }
//     // let sample=345
//     console.log(sample)
//     console.log("Line after sample")
// }catch(e){
//     console.error(e)
//     console.log("wooho we got an error")
// }
// console.log("Last line")

async function getdata(){
    try{
        // const response=await fetch("https://dummyjson.com/products") //Get data
        const response=await fetch("https://dummyjson.com/products/add",{
            method:"post",
            headers:{"content-type":"appliction/json"},
            body: JSON.stringify({
                "title":"MAckbook m4",
                "desc":"lorem ispsum",
                "category":"electronics",
                "price":999.8,
                "disountedprice":10.48,
                "rating":4.59,
                "stock":99,
            })

        })
        if(response.ok===false){
            throw new Error("something went wrong");
        }
        console.log(response)
        const data=await response.json()
        console.log(data)
        // data.products.forEach((product)=>{
        //     console.log(product.title)
        // })
        }catch(e){
            console.log(e)
        }
    }
    
getdata()