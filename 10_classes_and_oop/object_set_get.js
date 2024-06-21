const User = {
    _email: 'c@cp.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// object se getter and setter karne se ham yaha par factory function use kar sakte hai
const tea = Object.create(User)
console.log(tea.email);

// hm _email use karte hai kyu ki vo race mai na chala jaye dusro ke saath so ham use as private property ki tarah dekhte hai _ ki vajhase
