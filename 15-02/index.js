
class Person {
    constructor(age, name){
        console.log('constructor', age, name)

        this.age = age 
        this.name = name
    }

    someFunction(){
        console.log('some function')
        // add functionality to the object 
    }
}

class Coder extends Person{
    constructor(age, name, skill){
        console.log('cder')
        //must call super() in derived class 
        super(age, name)
        this.skill = skill
    }

    render(){

    }
}

const y = new Coder(33, 'dhoni','react')
console.log('y', y)
