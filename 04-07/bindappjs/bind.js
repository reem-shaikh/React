//BIND - to bind and keep the copy of the method 
//it binds method with object and returns us the copy of the method which can be called later 
let printFullName = function(hometown, state){
    //each and every function in js has access to the this keyword 
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state)
}

let name = {
    firstname: 'reem',
    lastname: 'shaikh',
}
// printFullName.call(name, 'lucknow', 'up')

let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
// we want this to be pointing to name2 object 
let print = printFullName.bind(name2, 'mum', 'MH')
console.log(print) //[Function: bound printFullName]

//bind returns a copy which can be invoked later 
print() //meow shaikh mum MH
