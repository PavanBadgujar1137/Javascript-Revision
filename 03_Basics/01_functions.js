

//  function declaration
function sayMyName(){
    // function defination write here
    console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}

// sayMyName this is refernce of given function 
//  and  sayMuName( it is  the execution of the iven function)

// sayMyName()

// function addTwoNumbers(num1,num2){ //parameters
//     const sum=num1+num2
//     console.log(sum)
// }
function addTwoNumbers(num1,num2){ //parameters
    // let sum=num1+num2
    // return sum
    return num1+num2
    // console.log("pavan") // after the return keyword function wont print anything ohk function directly retuen from there
} // here used of return keyword when function will execute then after return the given value

const result=addTwoNumbers(3,5) //arguments
// console.log(result)// undefines dont return the from that given function in beacuse console log sont return the result of given ohk


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please you firstly enter a username")
//         return
//     }else{
//         return `${username} just logged in`

//     }
   
// }

function loginUserMessage(username="mandip"){
    if(!username){
        // console.log("Please you firstly enter a username")
        return
    }else{
        return `${username} just logged in`

    }
   
}
const result2 =loginUserMessage("pavan")//automatoc ovewride ont he name of this//pavan just logged in // when you wont pass any argument in function that time send us undefined beacause that is we did not defined ohk and pass "" string that time send nothing
const result3 =loginUserMessage("")//just logged in// when you wont pass any argument in function that time send us undefined beacause that is we did not defined ohk and pass "" string that time send nothing
const result4 =loginUserMessage()//Please you firstly enter a username// when you wont pass any argument in function that time send us undefined beacause that is we did not defined ohk and pass "" string that time send nothing
// if(username===undefines) same as  if(!username)
// console.log(result2)
// console.log(result3)
// console.log(result4)

function calculateCartPrice(vql1,val2, ...num1){ // here we are used rest operater means we can accesa all arguments in one array by using the rest operater
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,30000))//[ 200, 400, 500 ] in function multiple value pass using one variable how to possible ? using rest operater

const user={
    username:"pavan",
    price:1999 //  prices:1999  print undefined 
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username:"Mahendra",
    age:"50"
})

const myNewArray =[200,300,100,600]

function returnSecondValue(getArray){
      return getArray[1]
}
// console.log(returnSecondValue(myNewArray))//300
// console.log(returnSecondValue([200,600,400]))//600