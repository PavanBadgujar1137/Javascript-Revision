// startind date calculate from the January 1, 1970
// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate) // type of date is object beacuse already we have take instance of date on line number 4

// let myCreateDate = new Date(2023,2,23)
// let myCreateDate = new Date(2023,2,23,5,3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)// get us miliseconds grom the date og 1 january 1970 of till (1695709313031)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // when we do dateDotNow/1000 that time get us seconds


let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)// here we have add 1 beacuse month start from the 0
console.log(newDate.getDay())

const newDates=newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDates)