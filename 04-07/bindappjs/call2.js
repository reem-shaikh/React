//CALL another way: we can take out the common function 
let printFullName = function(){
    //each and every function in js has access to the this keyword 
    console.log(this.firstname + " " + this.lastname)
}

let name = {
    firstname: 'reem',
    lastname: 'shaikh',
}
printFullName.call(name)

//using call method we can do function borrowing, we can borrow objects of another function 
let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
//we want this to be pointing to name2 object 
printFullName.call(name2)