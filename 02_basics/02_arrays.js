const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros,...dc]

// console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr);

console.log(Array.isArray("chirag"));
console.log(Array.from("chirag"));
console.log(Array.from({name:"chirag"}));//interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


