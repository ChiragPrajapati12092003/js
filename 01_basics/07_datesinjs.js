// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,30)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2024,1,30,5,3,200)
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("01-30-2024")
// console.log(myCreatedDate3.toLocaleString());


let myCreatedDate4 = new Date("01-30-2024")
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));//another way to get date in your way formate