// let myName = "Chirag       "
// let mychannel = "chai               "

// console.log(myName.length);
// console.log(myName.trim().length); // here we want true length of string bina space vali aur yeh to bahot hi low iq vala kaam kiya hai sab ham use kuch aur karte hai

let myHeros = ["thor","spiderman"]

let heroPower = {
    thrr: "hammer",
    spiderman: "sling"

    // getSpiderPower : function(){
    //     console.log(`Spidy power is ${this.spiderman}`);
    // }
}

Object.prototype.chirag = function(){
    console.log(`chirag is present in all objects`);
} // yaha power object mai inject hoti hai 

// heroPower.chirag()

// myHeros.chirag()

// agar hamne array mai power inject kar di to kya vo object mai access hogi ? , let's check

Array.prototype.heyChirag= function(){
    console.log(`Chirag says hello`);
}

// myHeros.heyChirag()
// heroPower.heyChirag() // yah par access nai hai


///// inheritance

const User = {
    name: "chirag",
    email: "jhjdsb@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // ise prototypal inheritance kehte hai

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(myName.length);
// console.log(myName.trim().length); // here we want true length of string bina space vali aur yeh to bahot hi low iq vala kaam kiya hai sab ham use kuch aur karte hai

let anotherUsername = "ChaiAurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"Chirag".trueLength()
"iceTea".trueLength()