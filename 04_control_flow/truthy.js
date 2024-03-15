const userEmail = "c@chirag.ai"

if (userEmail) {
    console.log("Got user email");
}else {
    console.log("don't have user email");
}
const userEmail2 = ""

if (userEmail2) {
    console.log("Got user email");
}else {
    console.log("don't have user email");
}
const userEmail3 = []

if (userEmail3) {
    console.log("Got user email");
}else {
    console.log("don't have user email");
}

// yaha par koi condition hi check kari aur hamne maan liya ki vahi value sahi hai iske liye use truthy value kehte hai

//falsy values: false, 0(zero), -0, BigInt 0n, "", null, undefined, NaN 
// truthy values: "0", 'false', " "(space),[], {}, function(){} , 

// if (userEmail3.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined 
//yeh 2 value me se koi ek dikhane ke liye hota hai 

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10 // yaha par 10 output aayega
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 // yaha par jo first value mil jaye vo assign ho jati hai

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");