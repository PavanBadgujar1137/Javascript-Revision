// # Primitive
  // ( Call by value) give to copy to others  from here copy from copy not a from main

// 7 types : String , Number, Boolearn, null, undefined, Symbol: make unique for any value use for that, BigInt:used for big value

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId) //false

const bigNumber = 3742956756254891105995684n

// Reference (Non primitive)

// Array, Objects, functions

const heros = ["shaktiman", "nagraj", "daga"]
const object={
    name:"pavan",
    age:19
}

const myFunction = function(){
    console.log("Hello world")
}

// console.log(typeof myFunction) //datatype function

// ______________________________________________________________________________________

// There are two types of memory

// Stck (Primitive): get copy and change in only copy not in main , 
// Heap (Non-Primitive) : get reference change in main

let myYoutubeName = "pavanbadgujardotcom"

let anothername = myYoutubeName
anothername="chaiorcopy"
console.log(anothername)
console.log(myYoutubeName)

let userOne = {
    email :'pavanabad05@gmail.com',
    upi: 'user@ybl'
}

let userTwo =userOne

userTwo.email="sagarsavale@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)