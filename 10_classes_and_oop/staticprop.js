class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static se dusro ko access nai milega 
        return '123'
    }
}

const chirag = new User("chirag")
// console.log(chirag.createId()); 

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phne.com")
iphone.logMe()
console.log(iphone.createId());