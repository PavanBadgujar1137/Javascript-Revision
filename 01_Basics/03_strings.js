const name = "Pavan"
const repoCount = 50
// console.log(name + repoCount + " Value") Dont folow this syntax for that used backtics (` `)

// Because of in backtigs stringInterpolation means we can direct inject our variable in it using the ${`variableName`} symbol

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('pavan-1137-es')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('v'))

// const newString = gameName.substring(0,4)
// console.log(newString)

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString)

// const newStringOne = "               hitesh   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20chaudhari"
console.log(url.replace('%20','-'))

console.log(url.includes("hitesh"))

console.log(gameName.split('-'))
console.log(gameName.includes('pa'))