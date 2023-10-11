const user ={
    username: "Hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcone to website`)
      // this keyword is used to current context
      console.log(this)
    }
}
// user.welcomeMessage() //Hitesh, welcone to website
// user.username="Pavan"
// user.welcomeMessage() //Pavan, welcone to website bracuse we changed the value of username and access this value using this keyword

// console.log(this) //{} but in browser we run run this line that time get us windows object not empty beacuse of global object //  global object in the browser is window int

// function chai(){
//     let userName = "hitesh" //
//     console.log(this) // print in any function this keyword long format but globaly print emty and and in browser print windows object
//     console.log(this.userName) // undefined print beacuse this keyword only using in the object not in function for accecing the values
// }
// chai()
// second formate of declare the function

// const chai =function(){
//     let userName="hitesh"
//     console.log(this.userName) //undefined
// }

// third method of we are declare the function using arrow
// const chai =()=>{
//     let userName="hitesh"
//     console.log(this.userName) //undefined
// }
//  chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2)=> (num1+num2) //implicite return  method means we dont use of curlybraces and return keyword
// when we used curlybraces that time must be used of return keyword but when we dont used this curlybraces that time used this () bracket and not used return keyword
// implicite return means we dont used the return keyword but explicite return means we used return keyword and curlybraces


//  How to retun object here
// const addTwo = (num1,num2)=> {username:"pavan"}//undefined print honar beacuse we hav eused here curlibraces and dont used here return keyword thats why but we wrap that object in this braket that time print object
const addTwo = (num1,num2)=> ({username:"pavan"})//{ username: 'pavan' } wrap in this () bracket that time get us this object ohk ,,//print honar beacuse we hav eused here curlibraces and dont used here return keyword thats why but we wrap that object in this braket that time print object


console.log(addTwo(2,3))// 5

const myArray = [2,5,3,7,8]

myArray.forEach()