// for 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element==5) {
//         console.log("5 is best number");
//     }
//     console.log(element)

// }

// console.log(element); //yaha element bahar accessible nai hai 

for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
       //console.log(`Inner loop value  ${j} and inner loop ${i}`); 
        //yaha par outer loop 1 bar chalega aur inner loop 10 bar chalega phirse waisa hi 10 bar hoga
    //console.log(i + '*' +j+ '=' + i*j);
    }
    
}
let myArray = ["flash","batman","superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//break and continue 

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${index} `);
    
}

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index} `);
    
}