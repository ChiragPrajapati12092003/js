function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){

    SetUsername.call(this,username) // yaha par this ke bina, sirf call ho raha fir uska execution context and jo variable diye hai vo chale jate hai

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "dkh@gmail.com", "123")
console.log(chai);