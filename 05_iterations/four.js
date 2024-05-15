// for of loop mai object iteratable nahi tha so yaha par ek naya loop aata hai jo hai foin loop

const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swify by apple'
}

for (const key in myObject) {
//    console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// map.set('IN',"India") 

// for (const key in Map) {
//    console.log(key); // yaha par kuch bhi output nai aayega
//    console.log(Map[key]);// yeh bhi khali space hi aayega kyuki yeh iteratable nai hai 
// }

