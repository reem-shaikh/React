// The bind() method binds the this keyword to the passed object and  retrns a new binded function, which can be invoked later 

const youtuber = {
    name: 'ruby',
    content: 'programming',
    feature: function(){
        console.log(`youtuber ${this.name}`)
    }
    //this refers to owner object over here 
    //this refers to context of execution 
}

youtuber.feature()
//console: youtuber ruby 

let youtuberFun = youtuber.feature;
youtuberFun()
//console: undefined 

//we need to bind object youtuber with common function youtuberFun2
let youtuberFun2 = youtuber.feature.bind(youtuber)
//bind method takes object as a first argument and creates a new function 
youtuberFun2()

