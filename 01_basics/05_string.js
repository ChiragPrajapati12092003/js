const name = "chirag"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String('chirag-pr-com') //another way to declare string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(2,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// we can give negative value to the slice

const newStringOne = "   chirag    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chirag.com/chirag%20prajapati"
console.log( url.replace('%20','-'));
console.log(url.includes('ch'));

console.log(gameName.split('-'));