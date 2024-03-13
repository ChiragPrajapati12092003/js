// Immediatly Invoked Function Expressions (IIEF)

//global scope ke pollution se problem hoti hai aki bar to us global scope ke variables or declaration hai usko hatane ke liye IIFE ka use kiya

// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()

// another way
(function chai1(){
    // named IIFE
    console.log('DB CONNECTED');
})();

// first () => function defination
// second () => function execution
//invoke function ko pata nai hai ki rukna kab hai ie liye usko ek ; ki zarurat hai, dusre fubction ko add karte time 

( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}` );
})('CHIRAG')

