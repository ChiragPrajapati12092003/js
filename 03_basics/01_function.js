function sayMyName(){
    console.log("c");
    console.log("h");
    console.log("i");
    console.log("r");
    console.log("a");
    console.log("g");
}

// sayMyName()

function addTwoNumbers(num1,num2){
//    let result = num1 + num2
//    return result
//    console.log("chirag");//print nai hoga kyoki return kr baad print nai hota 
      return num1 + num2
}

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

const result = addTwoNumbers(3,5)

// console.log("result:",result);

function loginUserMessage(username){
    if(!username){
        console.log("Plese enter a username ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("chirag"));
// console.log(loginUserMessage());

function loginUserMessage2(username = "chirag"){
    if(!username){
        console.log("Plese enter a username ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage2());


function calculateCartPrice(...num3){
    return num3
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username1:"chirag",
    price:199
}

function handleObject(anyobject){
    console.log(`Username1 is ${anyobject.username1} and price is ${anyobject.price} `);
}

// handleObject(user)

// handleObject({
//     username2 :"sam",
//     price1 :399
// })

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,300,400]));