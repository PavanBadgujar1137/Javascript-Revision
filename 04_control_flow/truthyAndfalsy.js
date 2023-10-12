// const userEmail = "pavanA1234.ai" // if in the variable have something automativcaly decide the true and when wont something in it that time give us false value automatically
// if(userEmail){
//     console.log("Got the email")
// }else{
//     console.log("Dont have user email")
// }

/////////////////////// falsy values /////////////////////

// false,0,-0,BigInt 0n, "",null,undefined,NAN

//////////////////// truthy value //////////////////////////
// "0",'false', " ", [], {},function(){}

// const emptyArray = []
// // check the technique of given array , object, function empty or not 

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}
if(Object.keys(emptyObj).length ===0){  // Object.keys(emptyObj) this part id reurn us array thats why we apply length property of in it to calculate given object is truty or not
    console.log("Object is empty")
}

//  all conditions check in console and mos of used in projects ohk that time we dont uderstand bout it 
// if(false == 0){
//     //answer is true
// }
// if(false == ''){
//     //answer is true
// }
// if(0 ==''){
//     // answer is true
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1= 5??10 // 5
// val1 = null ?? // 10
// val1= undefined ??  // 15
// val1 = null ?? 10 ?? 20
// console.log(val1)

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
