// practicing var datatpye//

var course = 'checking Var datatype'
course = "overrided" // it will override the course variable value
console.log(course)
var course2 = 'sham'

function checkVar() {
    man = course + course2 // here man is default defined as var datatype
    console.log(course)
    console.log(man)
}
checkVar()
console.log(window.man)
    // var is under window object

// practicing let datatpye//

let mark = 2
var co = 'variable'
    // let course = 3 <--------- thorow error becoz course is already defined 
let s1 = 'zero'
let m = mark + co
console.log(m) /// will return '2variable'
n = mark + s1
console.log(n) // will return '2zero'
o = mark + 3
console.log(o) // will add bothh value
p = mark + o
console.log(p) // will add both integers

function checklet() {
    let man = 'Shubham'
    console.log(man)

}
checklet()

const v = 'shubham'
console.log(v)
    // const keyword cant be re declared and changed the value , supports function and block level scope like let keyword
    // in LWC we dont use Var keyword we only use let and const.

//----------------Datatype-------

var x = 10 // ranges to +-(253 -1)
console.log(typeof(x)) // typeof keyword is usedd to return 'data type value'
var name1 = 'name'
console.log(typeof name1)

// Equality Comparision
// Normal comparision only compares value not datatype
// Strict Comparision compares value and datatype both we prefer this in LWC for less bugs.

console.log(3 == 3) // true
console.log(3 == "3") // true
console.log(3 === "3") // false 
console.log(3 === 3) // true
console.log('nikhil' == 'NIKHIL') //false
console.log('nikhil' === 'Nikhil') //false


// null v/s undefined 
// when a var is decalred but not defined
var c
console.log(c) // undefined

var d = null
console.log(d) // Null

console.log(c == d) // true
console.log(c === d) // false
    // if u want to send null value then use null never use undefined

// Spread Operator
// it behaves diffrent in diffrent use case
// operator shape is three consequtive dots
var arr = ["a", "b", "c", "d"]
console.log(arr)
    //to print array with index
console.log(arr[0]) // will print 'a'

// javascripts Objects 
// it is used when we have to assign many properties to similar objects

var obj = {
    "name": "Shubham",
    "Phone": "+91XXXXXXX",
    "City": "Ranchi",
    "Full Name": "S Mehta"

}
console.log(obj) // will print ever value inside obj
console.log(obj.name) // will print name value inside obj
console.log(obj.City) // will print City value inside obj
    //console.log(obj.Full Name) --> // will thorw error
console.log(obj["Full Name"])
    // to add value in objects
obj.hobbies = "Poetry"
console.log(obj.hobbies) // will print value inside hobbies of obj

// EXPANDING OF STRING
let greeting = "Hello Everyone"
let charlist = [...greeting] // covert string to a char array
console.log(greeting)
console.log(greeting[4]) // will return 'o'
console.log(charlist) // will return char array
console.log(charlist[4]) //will also return o

// combining an array]

let arr1 = ["amazon", "google"]
let arr2 = ["facebook", "instagram"]
let arr3 = [...arr2, ...arr1]
console.log(arr3) // will append both array

// adding any values to array
let array1 = ["rudra", "shiv"]
let array2 = [...array1, "ram"]
console.log(array2)

// combining objects
let obj1 = {
    name: "salesforce",
    age: "10",
    Rank: "4"
}
let obj2 = {
    name: "vlocity",
    age: "3"
}
let obj3 = {...obj1, ...obj2 }
console.log(obj3) // this will merge 2nd placed object with uncommon value

// shalllow copy
var arr10 = ["x", "y", "z"]
arr10.push(20)
var arr11 = [...arr10]
arr11.push("nikhil")
console.log(arr11)