// for each loopuse for arrays

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// yaha par jo function aayega vo call back function aayega so usko name deneki koi jarurat nai hai

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName:"javascript",
        languagefileName:"js"
    },
    {
        languageName:"java",
        languagefileName:"java"
    },
    {
        languageName:"python",
        languagefileName:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})