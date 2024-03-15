// if 
// condition false hogi to vo code run nahi hoga
// condition true hogi to yeh code run hoga 

// const isUserloggedIn = true
// const tem = 41

// if ( tem < 50){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }


// < , > , <= , >= , == , != , === (strick eqaul) , !== 

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); here score is only for if statement (ise blocked scope kehte hai) 
// agar const ya let ki jagah var likha hai to global scope ban jata hai jo ham if ke bahar bhi use kar sakte hai 

const balance = 1000
//if (balance > 500) console.log("test"),console.log("test2");// implicit scope


// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//   console.log("less than 1200");  
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}// everything should true 

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("logged in");
}// any one can be true 