const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descriptor); // here math.pi is not writable,enurable,configurable so we can't change value of pi
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); 


// we can make our own object and make it none writable or chanagable
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nai bani");
    }
}


Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// object direct iteratable nai hota hai so hame usko object.enteries mai likhna padega 
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}
