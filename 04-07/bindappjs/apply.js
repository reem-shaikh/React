let printFullName = function(hometown, state){
    //each and every function in js has access to the this keyword 
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state)
}

let name = {
    firstname: 'reem',
    lastname: 'shaikh',
}
printFullName.call(name, 'lucknow', 'up')

//using call method we can do function borrowing, we can borrow objects of another function 
let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
//we want this to be pointing to name2 object 
// printFullName.call(name2, 'mum', 'MH')
printFullName.apply(name2, ['mum', 'MH'])

//console:
// reem shaikh lucknow up
// meow shaikh mum MH