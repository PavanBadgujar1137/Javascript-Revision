// const tinderUser = new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firsdtname:"Hitesh",
            lastName:"chaudhari"
        }
    }
}
// console.log(regularUser.fullName.userfullname.lastName)

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 3:"b"} 

// const obj3={obj1,obj2}  //Object.asign( is used to copy to all values from these objects and combine in one new object)
// const obje3=Object.assign({},obj1,obj2)// {} this is target and and obj1,obj2 there are source copy on target 

const obj3={...obj1,...obj2}
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'b' }

const users = [ 
    {
        id:1,
        email:"h@gmail.com",
      } ,{
        id:2,
        email:"h@gmal.comi",
      } ,{
        id:1,
        email:"h@gmail.com",
      } ,{
        id:1,
        email:"h@gmail.com",
      }, {
        id:1,
        email:"h@gmail.com",
      },
]
users[1].email
// console.log(tinderUser)//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ] his type is array 
// console.log(Object.values(tinderUser))// [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))// true: hasOwnProperty is used to check the given key is presnt or not in object give us answer in the form of boolean

// Array destructuring array destructuring

//  Object Destructuring 

const course ={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// course.courseInstructor

// const {courseInstructor}=course
// console.log(courseInstructor)// Hitesh

const {courseInstructor:instructor}=course
console.log(instructor)// Hitesh


// const navbar = ({company})=>{ // here we used {company}  or props.company 

// }

// navbar(comapny="hitesh")

// Before comes data from the backend in form of XML structure but now come the data from the backent in the form of JSON()
//  key and value also in the form of string in JSON
{
    "name":"hitesh",
    "courseName":"Js in hindi",
    "price":"free"
}