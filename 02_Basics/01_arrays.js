// array

const myArray = [0,1,2,3,4,5] //resizable , icludes also other data type only in javscript 
const myHeors= ["shaktiman","naagraj"]

const myArray2=new Array(1,2,3,4,5,6,)
// console.log(myArray[0])

// Arrays methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9) //Insert the element on first position

// myArray.shift() // Remove the element from the first position in array

// console.log(myArray.includes(9)) // Includes function used to our given element present or not in array
// console.log(myArray.indexOf(3)) // indexOf function means our given element present in array of which position or indexing

const newArr = myArray.join()  // array joint in string
// console.log(newArr)
// console.log(typeof newArr)  string type when we apply on that array joint function 
 

// console.log(myArray) 
// console.log(typeof myArray)  return object of given array when we print 

// slice,splice
console.log("A",myArray) // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArray.slice(2,4)  //  main use of slice fun is here i have  pass of two indexes 2 and 4 means that get us elemnt from index 2 to 4-1 mean index 3 and after then get us main array fully
console.log(myn1) //[ 2, 3 ]
console.log("B",myArray) //B [ 0, 1, 2, 3, 4, 5 ]
 
const mya2= myArray.splice(1,3) // main use of splice fun is here ew have pass two index 1 and 2 get us value 1 to 2 and again get us value in original array like remaining ohk 
console.log(mya2 ) //[ 1, 2, 3 ]
console.log("c",myArray) //c [ 0, 4, 5 ]