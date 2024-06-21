class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}chirag`
    }
    set password(value){
        this._password = value
    }
}

const chirag = new User("chirag@gmail.com","abc123")
console.log(chirag.password);
console.log(chirag.email);