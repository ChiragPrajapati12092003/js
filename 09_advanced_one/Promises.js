// const promiseOne = new Promise(function(resolve, reject) {
//     //Do an async task
//     //D8 calls, cryptography, network
//     setTimeout(function(){
//         console.log(('Async task is complete'));
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// // Another way

// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// Third Promise

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username: "Chai", 
//             email: "chai@example.com"
//         })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// Fourth promise

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username: 'chirag', password: '123'})
//         }
//         else{
//             reject('Eroor: Something went wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("Promise is worked or not"))

// Fifth Promises

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//                 resolve({username: 'javascript', password: '123'})
//             }
//         else{
//                 reject('Eroor: Js went wrong')
//             }
//         },1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()


// with use of try and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))