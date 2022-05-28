// this is html element 
const h1 = document.createElement("h1")
h1.innerText = 'this is not JSX'
console.log('h1', h1)

//telling the machine to add the html element as a child of the root element 

// imperative coding - were specifying each step 
//document.getElementById('root').appendChild("h1")

//Howwver React is declarative coding, we define what should happen and react under the hood will accomplish it 

// JSX elements are objects under the hood and react is handling how to display / render it 
// const element =  (
// <div>
//    <h1>this is JSX</h1>
// </div>
// );
// console.log('element', element)

// creating a react component 
class Something extends React.Component {
    //overriding the method of the parent class React.component - polymorphism 
    constructor(){
        super()
        this.geek = 'ster';
        //react state 
        this.state = {key: 'value'};
    }

    render(){
        return(
            //returns JSX 
            <div>
                <h1>meow</h1>
            </div>
        );
    }

    someFunc(){
        return (
            <div>
                <h1>someFunc</h1>
            </div>
        );
    }
}

// class ChildOne extends Something {
//     constructor() {
//       super();
//       this.child = "i am child";
//     }
//   }
  
//   const x = new ChildOne();
//   console.log(x);
//  {
//     "refs": {},
//     "updater": {},
//     "geek": "ster",
//     "state": {
//         "key": "value"
//     },
//     "child": "i am child"
// }
  

// const x = new Something
// console.log('x',x)

// accessing the render methid
// ReactDOM.render(x.render(), document.getElementById('root'))

// ReactDOM.render(element, document.getElementById('root'))
//reactDOM.render(what to print, where to print) takes 2 arguments 


// ⛓️PROTOTYPE CHAINING
// if obejct doesnt find the function on its own it goes to the prototype and try to find it - prototype chaining 
console.log('func',x.someFunc())
// we can even add this to reactdom.render
// ReactDOM.render(x.someFunc(), document.getElementById('root'))


// React gives special syntax instead of writing 
// const x = new Something
// ReactDOM.render(x.render(), document.getElementById('root'))

// we can write 
//ReactDOM.render(<Something/>,  document.getElementById('root'))
const app_elem = document.getElementById('root');
const react_root = ReactDOM.createRoot(app_elem);
react_root.render(<App />);
