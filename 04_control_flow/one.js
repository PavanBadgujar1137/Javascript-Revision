// if statement
// const isUserLoggedIn = true
// const temperature = 41
// if(temperature === 50){
//     console.log('less than 50')
// }else{
//     console.log("temperature is greater than 50")
// }
// console.log("Execute")

// <, >, <=, >=, ==, !=, ===


// const score = 200

// if(score >100){
//     // const power = "fly" // here give us error because let and const is the functional level scope
//     // let power = "fly" // let is the blobk level scope
//     var power="fly" // var is the global level scope
//     console.log(`User power: ${power}`) //User power: fly
//                                        // User power: fly
// }
// console.log(`User power: ${power}`)

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2") // implicite scope , dont write this type of 

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")

// }
// else if( balance<900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


const isUserLoggedIn = true
const debitCard = true  
const loggedInFromGoogle=false
const loggedInFromEmail = true


// here all condition are ture then if block is execute otherwise wont execute 
if(isUserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course")
}

// if here only one condition is true then if block is execute otherwise not 
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}