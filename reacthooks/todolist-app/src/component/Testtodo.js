// lets revise some JS methods which we'll be implementing 

// filter() - creates a new array of the array elements that pass the condition 
var ages = [10, 12, 19, 20]
var b = ages.filter(checkAdult)
console.log(b)

function checkAdult(age){
    return age>=18
}

// slice(start, end) 
// create a new array based on where the array started and ended from
//       0   1   2   3   4
var a = [10, 20, 30, 40, 50]
var c = a.slice(1, 4)
// prints 20, 30, 40 

var d = a.slice(1)
// prints 20, 30, 40, 50


// splice(which index you want to insert value, how many numbers deleting, new value to insert )
//       0    1   2  3
var e = [10, 20, 30, 50]
e.splice(2, 0, '40')
// 10, 20, 30, 40, 50 