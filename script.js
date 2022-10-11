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