// let a = 10
// const b = 20
// var c = 30 


// var c=300
let a=300 //global scope

{} //curlibraces scope
if(true){
    // console.log("Inner:",a) //block socpe
    let a = 10 //
    const b = 20
    // var c = 30
    // console.log("Inner:",a) 
}

// console.log(a)//10  ReferenceError: a is not defined
// console.log(b)//20 ReferenceError: a is not defined
// console.log(c)//30  //30

function one(){
    const userName = "Pavan"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
// one()


//Scope in browser and node is different
// Closer means function in function middle function access the variables or values of outside of function
// child function can acces thes vlause of the parent function


if (true){
    const username ="pavan"
    if(username === "pavan"){
        const website=" youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ******************** intersting ********************

//  it is the part of Hoisting

// console.log(addOne(5)) //6
function addOne(num){
    return num+1
}

addTwo(5) // Cannot access 'addTwo' before initialization
const addTwo = function(num){ //expression also and function we can say anything
    return num+2
}
