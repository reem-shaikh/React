console.log(this)
//refers to global object 

//in a regular function this refers to the global object 
function sum(){
    var add = 2+2; 
    console.log(add);
    console.log(this);
    //this still refers to global object 
}
sum()

//in strict mode, regular function this refers to undefined 
"use strict"
function sum(){
    var add = 2+2; 
    console.log(add);
    console.log(this);
    //this refers to undefined  
}
sum()

//in a method, this refers to the owner object 
const ruby = {
    name: 'reem shaikh',
    sum: function(){
        var add = 2+2; 
        console.log(add);
        console.log(this);
        //this keyword points to ruby object 
    }
}
ruby.sum()