// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//there are two types of objects 1) literal and 2) singleton: means raay makes from teh constructore


// singleton Object create using the Object.create method
// Object.create()


// Object literals

const mysym =Symbol("pavan") //when will we have insert the symbolo in objcet that time follow this syntac [keyName]:"", and access Jsuser[keyName] in it diiference of typeOf

const Jsuser={
   name:"Pavan",
   "full name":"Pavan Amrut Badgujar",
   [mysym]:"key1",
   age:18,
   location:"Jalgaon",
   email:"pavanabad01@gmail.com",
   isLoggedIn:false,
   lastLoginDays:["Monday","Saturday"]
}
console.log(Jsuser.email) // dont used this format to access the key value pairs in javscript because of  {"full name":"Pavan Amrut Badgujar"}
console.log(Jsuser["email"])
console.log( Jsuser[mysym]) 

Jsuser.email="Oavan2004@gmail,com"
// Object.freeze(Jsuser) // when we apply freez function on object that time wont change the object 
Jsuser.email="pavan5000@gmail.com"
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user")
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)// when we do same object to reference that tme use the this.getUsKeyNAmeOfOurObject

}

// console.log(Jsuser.greeting)// undifined print 
// console.log(Jsuser.greeting()) // get us eeor TypeError: Jsuser.greeting is not a function
// console.log(Jsuser.greeting) // get us refrence of the funtion dont execute function only come the reference of the given funvtion

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())

