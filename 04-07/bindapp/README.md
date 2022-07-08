## This Keyword 
This keyword refers to the object it belongs to. It has different valus depending on where its used. 

- Alone, this refers to the global object (window object)
```bash
console.log(this)
#refers to global object 
```
- In a regular function this refers to the global object 
```bash
function sum(){
    var add = 2+2; 
    console.log(add);
    console.log(this);
    #this still refers to global object 
}
sum()
```
- In a regular function, with strict this refers to undefined 
```bash
#in strict mode, regular function this refers to undefined 
"use strict"
function sum(){
    var add = 2+2; 
    console.log(add);
    console.log(this);
    #this refers to undefined  
}
sum()
```
- In a method, this refers to the owner object 
```bash
const ruby = {
    name: 'reem shaikh',
    #this will always point to the object in which your method is defined.
    sum: function(){
        var add = 2+2; 
        console.log(add);
        console.log(this);
        #this keyword points to ruby object 
    }
}
ruby.sum()
# in JavaScript function context is defined while calling the function, not while defining it
```
### Call, Apply, Bind 

## Call 
> using call method we can do function borrowing, we can borrow objects of another function 
```bash
let name = {
    firstname: 'reem',
    lastname: 'shaikh',
    printFullName: function(){
        #each and every function in js has access to the this keyword 
        console.log(this.firstname + " " + this.lastname)
    }
}

#name.printFullName()
#youtuber ruby 

#using call method we can do function borrowing, we can borrow objects of another function 
let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
#we want this to be pointing to name2 object 
name.printFullName.call(name2)
#meow shaikh 
```
> We can even CALL another way: we can take out the common functionality 
```bash
#CALL another way: we can take out the common function 
let printFullName = function(){
    #each and every function in js has access to the this keyword 
    console.log(this.firstname + " " + this.lastname)
}

let name = {
    firstname: 'reem',
    lastname: 'shaikh',
}
printFullName.call(name)

#using call method we can do function borrowing, we can borrow objects of another function 
let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
#we want this to be pointing to name2 object 
printFullName.call(name2)
```
## Apply 
> same as call, only we need to pass the array of objects as the second parameter 
```bash
let printFullName = function(hometown, state){
    #each and every function in js has access to the this keyword 
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state)
}

let name = {
    firstname: 'reem',
    lastname: 'shaikh',
}
printFullName.call(name, 'lucknow', 'up')

#using call method we can do function borrowing, we can borrow objects of another function 
let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
#we want this to be pointing to name2 object 
# printFullName.call(name2, 'mum', 'MH')
printFullName.apply(name2, ['mum', 'MH'])

#console:
# reem shaikh lucknow up
# meow shaikh mum MH
```
## Bind
to bind and keep the copy of the method. it binds method with object and returns us the copy of the method which can be called later  
```bash
let printFullName = function(hometown, state){
    #each and every function in js has access to the this keyword 
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state)
}

let name = {
    firstname: 'reem',
    lastname: 'shaikh',
}
# printFullName.call(name, 'lucknow', 'up')

let name2 = {
    firstname: 'meow',
    lastname: 'shaikh',
    
}
# we want this to be pointing to name2 object 
let print = printFullName.bind(name2, 'mum', 'MH')
console.log(print) #[Function: bound printFullName]

#bind returns a copy which can be invoked later 
print() #meow shaikh mum MH
```
### Why do we need Bind?
The bind() method binds the this keyword to the passed object and  retrns a new binded function, which can be invoked later 

#### Binding with JS objects 
> To call a normal method defined inside an object we do this 
```bash
let info = {
    name: 'ruby',
    TellName: function(){
        return this.name
    }
}

console.log(info.TellName())
#terminal:
#node whyBind.js 
#ruby 
```
> However, we write it like this, it gives undefined because this keyword is not available to anotherInfo object 
```bash
let info = {
    name: 'ruby',
    TellName: function(){
        return this.name
    }
}

anotherInfo = info.TellName
console.log(anotherInfo())
#terminal:
#node whyBind.js 
#undefined because this keyword is attached to info object not to anotherinfo
```
> to make the this keyword available to anotherInfo we need to bind info object to it 
```bash
anotherInfo = info.TellName
#bind takes info as the first argument and returns a new function
console.log(anotherInfo.bind(info)())
#terminal:
#node whyBind.js 
#ruby 
```
#### Binding with classes 
> This is how you would normally call a function using the new keyword 
```bash
class BindInfo{
    constructor(){
        this.name = 'ruby'
    }
    hello(){
        return this.name
    }
}

info = new BindInfo()
console.log(info.hello())
#terminal 
#node whyBindTwo.js 
#ruby 
```
> However, this would return undefined because Bindinfo is attached to this keyword, otherInfo is not 
```bash
class BindInfo{
    constructor(){
        this.name = 'ruby'
    }
    hello(){
        return this.name
    }
}

info = new BindInfo()
otherInfo = info.hello
console.log(otherInfo())
#terminal 
#node whyBindTwo.js 
#undefined because Bindinfo is attached to this keyword, otherInfo is not 
```
> To fix, this undefined problem and to attach this keyword to otherinfo we use bind()
```bash
info = new BindInfo()
otherInfo = info.hello
console.log(otherInfo.bind(info)())
#terminal 
#node whyBindTwo.js 
#ruby 
```
> another way to attach bind() method, attaching bind in the constructor 
```bash
class BindInfo{
    constructor(){
        this.name = 'ruby';
        this.hello = this.hello.bind(this);
    }
    hello(){
        return this.name
    }
}

info = new BindInfo()
otherInfo = info.hello
console.log(otherInfo())
#terminal 
#node whyBindTwo.js 
#ruby 
```
#### Another example using binding 
> In normal method call approach 
```bash
const youtuber = {
    name: 'ruby',
    content: 'programming',
    feature: function(){
        console.log(`youtuber ${this.name}`)
    }
    #this refers to owner object over here 
    #this refers to context of execution 
}

youtuber.feature()
#console: youtuber ruby 
```
> returns undefined, because this keyword is not attached to youtuberFun
```bash
const youtuber = {
    name: 'ruby',
    content: 'programming',
    feature: function(){
        console.log(`youtuber ${this.name}`)
    }
    #this refers to owner object over here 
    #this refers to context of execution 
}

let youtuberFun = youtuber.feature;
youtuberFun()
#console: undefined 
```
> bind method to the rescue 
```bash
const youtuber = {
    name: 'ruby',
    content: 'programming',
    feature: function(){
        console.log(`youtuber ${this.name}`)
    }
    #this refers to owner object over here 
    #this refers to context of execution 
}

#we need to bind object youtuber with common function youtuberFun2
let youtuberFun2 = youtuber.feature.bind(youtuber)
#bind method takes object as a first argument and creates a new function 
youtuberFun2()
#console: youtuber ruby 
```
## Binding event handlers in React 
we bind event handlers because of the way this keyword works in JS. in the context of react components, here's why event binding is required?

> Note: If your functions don't require access to the state of your component, then sure, you don't need to bind them

> When we pass a setState object in a function, we need to ensure that we bind the function otherwise it can throw an error, for instance this code would throw an error 
```bash
import React, { Component } from 'react'

export default class EventBind extends Component {
  #rconst 
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }
  }

  clickHandler(){
    this.setState({
        message: 'gdbye'
    })
    #this keyword within event handler is undefined, thats why event binding is necessary in class based components 
    console.log(this)
    #this is the typical behavior of this keyword 

  }
  render() {
    return (
      <>
      {/* If your functions don't require access to the state of your component, then sure, you don't need to bind them. */}
      <p>{this.state.message}</p>

      {/* when user clciks on the button change the message */}
      <button onClick={this.clickHandler}>click</button>
      </>
    )
  }
}

```
> This Typeerror occurs because clickHandler is pointing to state object, which doesnt yet know the existence of setState function. the setState function is only a property of Component instance. To let the app know of the existence of setState we'll bind the app. There are technically 3 ways to acheive binding. 
1. binding in the render method 
2.  approach in official react dom - binding the event handler in the constructor as opposed to binding in the render method 
3. using arrow function in render method 

------
### 1. Binding in the render method 
```bash
import React, { Component } from 'react'

export default class EventBind extends Component {
  #rconst 
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }

  }

  clickHandler(){
    this.setState({
        message: 'gdbye'
    })
    #this keyword within event handler is undefined, thats why event binding is necessary in class based components 
    console.log(this)
    #this is the typical behavior of this keyword 

  }
  render() {
    return (
      <>
      {/* If your functions don't require access to the state of your component, then sure, you don't need to bind them. */}
      <p>{this.state.message}</p>

      {/* Data binding in React can be achieved by using a controlled input . A controlled input is achieved by binding the value to a state variable and a onChange event to change the state as the input value changes. */}
      <button onClick={this.clickHandler.bind(this)}>click</button>
      </>
    )
  }
}
```
#### 2. Binding the event handler in the constructor as opposed to binding in the render method 
```bash
import React, { Component } from 'react'

export default class EventBind extends Component {
  #rconst 
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    this.setState({
        message: 'gdbye'
    })
    #this keyword within event handler is undefined, thats why event binding is necessary in class based components 
    console.log(this)
    #this is the typical behavior of this keyword 

    #there are number of ways to bind event handlers in react.
    #1. binding in the render method 
    #2. using arrow function in render method 
    #3. approach in official react dom - binding the event handler in the constructor as opposed to binding in the render method 
  }
  render() {
    return (
      <>
      {/* If your functions don't require access to the state of your component, then sure, you don't need to bind them. */}
      <p>{this.state.message}</p>

     {/*The argument in favour of adding these lines to the constructor is so that the new bound functions are only created once per instance of the class. but either of these methods (callback approach or the first approach) will create a new function every time the component is re-rendered. */}
      {/* 
      <button onClick={this.clickHandler}>click</button>  */}
      </>
    )
  }
}
```
#### 3. using arrow function in render method instead of bind() method: introduced in ES6
```bash
import React, { Component } from 'react'

export default class EventBind extends Component {
  #rconst 
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'hello'
    }

  }

  clickHandler(){
    this.setState({
        message: 'gdbye'
    })
    #this keyword within event handler is undefined, thats why event binding is necessary in class based components 
    console.log(this)
    #this is the typical behavior of this keyword 

  }
  render() {
    return (
      <>
      {/* If your functions don't require access to the state of your component, then sure, you don't need to bind them. */}
      <p>{this.state.message}</p>

      {/* To avoid the need for binding we have something introduced in ES6 as arrow functions. Using the arrow function to call this. setState will lead to avoid the use of bind.22 */}
      {/* <button onClick={() => this.clickHandler()}>click</button> */}

      </>
    )
  }
}
```
#### 4. Instead of specifying the callback function in the render, you can also define it within the constructor 
```bash
import React, { Component } from 'react'

export default class Counter extends Component {

  constructor(props) {
      console.log('constructor')
      super(props)

      this.state = {
          counter: 0
      }

      this.increement = () => this.setState({counter: this.state.counter + 1})

      this.decreement = () => this.setState({counter: this.state.counter - 1})
  }
    
  incrementParent = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log('render')
    return (
    <>
    <div>Counter: {this.state.counter}</div>
    # in this example, we defined the callbacks for both increement and deecrement within the constructor 
    <button onClick={this.increement}>Increement</button>
    <button onClick={this.decreement}>decreement</button>
    # we've defined the callback for this function before the render() and after the constructor()
    <button onClick={this.incrementParent}>increase child</button>

    

    </>
    )
  }
}
```
### Which method is preffered to be used?
- When we define the binding in the constructor the new function is created only once per instance of the class, even when the component is re-rendered, only one instance of the class would be created 
- However, the other callback approach and defining the bind in the render() would technicaly create a new function very time the component is re-rendered. 