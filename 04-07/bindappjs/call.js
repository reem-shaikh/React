let name = {
    firstname: 'reem',
    lastname: 'shaikh',
    printFullName: function(){
        //each and every function in js has access to the this keyword 
        console.log(this.firstname + " " + this.lastname)
    }
}

//name.printFullName()
//youtuber ruby 

//using call method we can do function borrowing, we can borrow objects of another function 
let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
//we want this to be pointing to name2 object 
name.printFullName.call(name2)

//CALL another way: we can take out the common function 
