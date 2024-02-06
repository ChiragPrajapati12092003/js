// var c = 300
// let a = 200

// if (true){
//     let a = 10
//     const b = 20 
//     console.log("Inner:" ,a);  
// }



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "chirag"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two() 
}

// one()

if (true) {
    const username1 = "chirag"
    if (username1 === "chirag") {
        const website1 = " youtube"
        // console.log(username1 + website1);
    }
    // console.log(website1);

}
// console.log(username1);


//+++++++++++++++++++++++ interesting +++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


// addTwo(5) it gives error bcz its variable
const addTwo = function(num){
    return num + 2
}

