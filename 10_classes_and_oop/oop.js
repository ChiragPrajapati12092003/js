// object literal

const user = {
    username: "Chirag",
    logincount: 8,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`); // yaha par this likhna padega kyuki kis username ki baat ho rahi hai
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



// Constructor Function

function User(username,  logincount, isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    //return this
}                                         

const userOne = new User("Prajapati",12,true) // yaha par new keyword use karna padega kyuki agar use nai kiya to har time value update ho jayegi aur userOne print karane par bhi jo new value dali hai vo hi ayegi
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);

// console.log(userOne);
// console.log(userTwo);

// jab new keyword use karte hai tab ek empty object create hota hai jise intance kehte hai aur uske baad ek constructor call hota hai aur sab arguments wrape hote hai aur output milta hai 