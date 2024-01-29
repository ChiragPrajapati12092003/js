// Primitive

// 7 types : String , Number , Boolean , null , Undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
//Symbol mai har bar new value hogi 

const bigNumber = 51684641068865n

// Refrence (Non Primitive)

//Array, Objects,Functions

const heros = ["shaktiman",'naagraj',"doga"]
let myObj = 
{
    name:"chirag",
    age: 20,
}

const myfunction= function(){
    console.log("Hello");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof userEmail);

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++

//Stack , Heap (types of memory)
// Stack = Primitive (give copy)
// Heap = Non-Primitive(not give copy and have reference and main mai hi change hoga)

let myYoutubename = "chiragprajapati"

let anothername = myYoutubename
anothername = "chirag07"

console.log(myYoutubename);
console.log(anothername);

let user = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = user

userTwo.email = "chirag@google.com"

console.log(user);
console.log(userTwo);