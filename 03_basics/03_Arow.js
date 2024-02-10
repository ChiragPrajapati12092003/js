const user  = {
    username: "chirag",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// this use to reffer current(live) context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);// this give empty object {} and in browser gives window as answer

// function chai(){
//     let username1 = "chirag"
//     console.log(this.username1);
// }

// chai() //it gicves to much things only for this keyword operator

// const chai1  = function(){
//     let username1 = "chirag"
//     console.log(this.username1);
// }


// const chai2  = () => {
//     let username1 = "chirag"
//     console.log(this);
// } // this is arrow function

// chai1()
// chai2()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// } 


// const addTwo = (num1,num2) =>  num1 + num2 // this called implisite return
// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username:"chirag"}) // object ko return karne ke liye use parenthesis mai wrap karna padta hai

console.log(addTwo(2,4))
