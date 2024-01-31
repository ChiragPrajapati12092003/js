// singleton


// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"chirag",
    "full name":"chirag prajapati",
    [mySym]:"mykey1",
    age:20,
    location:"gandhinagar",
    email:"chirag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

// JsUser.email = "chirag@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "chirag@prajapati.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());