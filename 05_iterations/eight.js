const myNums = [1,2,3,4,5,6,7,8,9,10]


// const Sum = myNums.reduce((acc,curval) => {
//     console.log(`accumulator: ${acc} and current value: ${curval}`);
//     return acc + curval
// },1)

const myTotal = myNums.reduce((acc,cur)=>acc+cur,0)
// console.log(Sum);
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : " js course",
        price: 1999
    },
    {
        itemName : " python course",
        price: 999
    },
    {
        itemName : " mobile dev. course",
        price: 4999
    },
    {
        itemName : " data science course",
        price: 11999
    },
    {
        itemName : " ml course",
        price: 8999
    }
]

const shoppingTotal = shoppingCart.reduce((acc,item) =>  acc+item.price,0)
console.log(shoppingTotal);