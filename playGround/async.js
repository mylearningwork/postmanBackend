// const add = (a, b) => {
//     return a + b
// }

// const  asyncAdd = async (a, b) => {
//     return a + b
// }

// //await / async






const asyncAdd = (a, b) => {
    return new Promise(resolve => {
        resolve(a+b)
    })
}

//this result will be returned after 2secs
asyncAdd(1, 1)
.then(result => {
    console.log(result)
})

//this code will be executed before "asyncAdd"
console.log("hello world")
console.log("other hello")


// //asynchronous function using async/await keyword 
const getResult = async (a, b, c) => {
    const f = await asyncAdd(a, b)
    const g = await asyncAdd(f, c)
   // const z = add(g, f) // add is not an asynchronous function
    return 5
}

getResult(1, 1, 1).then(
    result => console.log(result)
)






// //arrow functions :
// const arrowFunction = (param1, param2, param3) => {

// }

// //synchronous function
// const hellowWorld = (text) => {
//     console.log(text)
// }

// hellowWorld("hello world")
//asynchronous functions
// const asyncHelloWorld = (toDo) => {
//     setTimeout(() => {
//         //call the callback function
//         toDo("Today is monday")
//     }, 2000)
// }

// asyncHelloWorld(
//     //what to do
//     (text123) => {
//         console.log(text123)
//         console.log("test 2")
//     }
// )

