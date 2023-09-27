const marvel_heros = ["thors","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//  marvel_heros.push(dc_heros) //[ 'thors', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//  console.log(marvel_heros)
//  console.log(marvel_heros[3][1])

// const result= marvel_heros.concat(dc_heros) // concat function return us new array between the two arrays
// console.log(typeof  result) //[ 'thors', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heros,...dc_heros] // using spred operater
// console.log(typeof all_new_heroes) //[ 'thors', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] 

// ************* But return both function object concat also and spread but output boths are same 
 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anothera_array =   another_array.flat(Infinity)
console.log(real_anothera_array) //[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// console.log(Array.isArray("hitesh"))  //false 
// console.log(Array.from("Pavan")) // from function is used for the give string , number convert into the array

// const number=478365267346
// console.log(Array.from("478365267346"))

console.log(Array.from({name:"Pavan"})) //[]  interesting

let score1=100

let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ] using Array.of(var1,var2,var3)