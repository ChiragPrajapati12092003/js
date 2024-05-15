// for of loop

// const arr = [1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);// yaha par iteration ki jarurat nai hai
// }

// const greeting = "Hello World!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India") // copy nai hoga 

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-',value);
// }

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);// yaha par error aayega kyuki myObject iteratable nai hai
// }


