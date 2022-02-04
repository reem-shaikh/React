### Inheritance
```bash 
    <script>
        class Person {
            //passing 2 properties 
            constructor(name, age){
                this.name = name 
                this.age = age 
            }

            //method 
            printInfo(){
                console.log('i am', this.name, 'age is', this.age, 'experience of', this.YOE)
            }
        }

        const x = new Person('geek', 20)
        console.log(x)

        //x is object of class Person
        x.printInfo()

        //programmer inherits properties of person 
        class Programmer extends Person {
            constructor(name, age, YOE){
                //super() biult in method which runs the parent constructor 
                super(name, age)
                this.YOE = YOE
            }
        }

        const p = new Programmer('geekster', 23,3)
        console.log("programmer",p)

        //we didnt define printInfo() method inside programmer class, but since programmer is inheriting values from parent we can use this method 
        p.printInfo()
    </script>

console:
Person {name: 'geek', age: 20}
index.html:20 i am geek age is 20 experience of undefined
index.html:44 programmer Programmer {name: 'geekster', age: 23, YOE: 3}
index.html:39 i am geekster age is 23 experience of 3
```
#### Polymorphism 
- it allows a way to perform a single action in different forms 
overide the parent method and add extra information to it 
```bash 
    <script>
        class Person {
            //passing 2 properties 
            constructor(name, age){
                this.name = name 
                this.age = age 
            }

            //method 
            printInfo(){
                console.log('i am', this.name, 'age is', this.age, 'experience of', this.YOE)
            }
        }

        const x = new Person('geek', 20)
        console.log(x)

        //x is object of class Person
        x.printInfo()

        //programmer inherits properties of person 
        class Programmer extends Person {
            constructor(name, age, YOE){
                //super() biult in method which runs the parent constructor 
                super(name, age)
                this.YOE = YOE
            }

            ✅printInfo() of parent is overiding the childs method 
            printInfo(){
                console.log('i am', this.name, 'age is', this.age, 'experience of', this.YOE)
            }
        }

        const p = new Programmer('geekster', 23,3)
        console.log("programmer",p)

        p.printInfo()
    </script>

console:
Person {name: 'geek', age: 20}
index.html:20 i am geek age is 20 experience of undefined
index.html:44 programmer Programmer {name: 'geekster', age: 23, YOE: 3}
index.html:39 i am geekster age is 23 experience of 3
```
#### Inheriting all the methods of component class which is already predefined in react 
> src/App.js 
```bash 
import logo from './logo.svg';
import './App.css';

✅React provides all functionalities required to display components on the application 
import React, {Component} from 'react';

✅Inheritance
class App extends Component {

✅render() method present in component class 
✅Polymorphism - render() overides the component class provided by react 
  render(){

    ✅render method is a function which returns JSX 
    return (
      <div className="App">
       <button>
         <a>hello</a>
       </button>
      </div>
    );
  }
}
export default App;
```
> the starting point of any code execution starts from src/index.html
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   
   ✅everything written inside src/App.js (App component) will be rendered on the #root element 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//reactDOM.render(<App />,  document.getElementById('root'))

reportWebVitals();
```
> public/index.html
```bash 
  <div id="root"></div>
```
### We'll print the App component contents on the screen 
> src/App.js (App component)
```bash 
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
       <button>
         <a>hello</a>
       </button>
      </div>
    );
  }
}


export default App;

```
> src/index.html. Note that: were importing App from src/App.js 
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
✅import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   
✅everything written inside src/App.js (App component) will be rendered on the #root element 
  <React.StrictMode>
    ✅<App />
  </React.StrictMode>,
  document.getElementById('root')
);

//reactDOM.render(<App />,  document.getElementById('root'))

reportWebVitals();
```
Application: 
```bash 
a button named hello printed on screen 
```
### Creating a custom component and printing its components on the screen 
> src/ Card.js 
```bash 
import React, {Component} from 'react'

class Card extends Component{
    render(){
        return(
            <div className="container">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat fugiat perferendis nisi praesentium, quasi ipsam cum eius maiores iure rem deleniti voluptas adipisci nostrum accusamus asperiores vitae doloremque ab et totam magni. Hic, magnam? Est esse accusamus sit aspernatur.
                </p>
            </div>
        );
    }
}

✅exporting Card
export default Card;
```
> src/index.js 
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

✅importing Card from Card.js 
import Card from './Card.js';

ReactDOM.render(
  <React.StrictMode>
    ✅<Card />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
![](11.PNG)

#### Rendering both the components (App.js and Card.js) on the screen 
> src/App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

✅were importing card component in App.js (App component)
import Card from './Card.js';

class App extends Component {
  render(){
    return (
      <div className="App">
       <button>
         <a>hello</a>
       </button>

      ✅inserting card component, inside App component 
      <Card> </Card>
       
      </div>
    );
  }
}

export default App;
```
> src/index.js
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card.js';

ReactDOM.render(
  <React.StrictMode>
    ✅<App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
![](12.PNG)

#### Props 
props is used to pass properties to react components

src/App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
✅were importing card component in App.js (App component)
import Card from './Card.js';

class App extends Component {
  render(){
    return (
      <div className="App">
       <button>
         <a>hello</a>
       </button>
       ✅<Card name="Reem"></Card>

      </div>
    );
  }
}


export default App;
```
> src/index.js (unchanged)
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
> src/Card.js 
```bash 
import React, {Component} from 'react'

class Card extends Component{
    // Constructor added 
    ✅props contains all the data that we sent from App.js compoenent to Card.js component
    constructor(props){
        super(props)
        this.state = {myName: 'Geek'}
    }
    render(){
        return(
            <div className="container">
                ✅this is imported from App.js 
                <h2>This is Props: {this.props.name}</h2>

                <h2>This is property of class Card: {this.state.myName}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat fugiat perferendis nisi praesentium, quasi ipsam cum eius maiores iure rem deleniti voluptas adipisci nostrum accusamus asperiores vitae doloremque ab et totam magni. Hic, magnam? Est esse accusamus sit aspernatur.
                </p>
            </div>
        );
    }
}

export default Card;
```
![](13.PNG)

#### Rendering 2 Cards with different information 
> src/App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//were importing card component in App.js (App component)
import Card from './Card.js';

class App extends Component {
  render(){
    return (
      <div className="App">
       <button>
         <a>hello</a>
       </button>
       <hr />
       ✅these are 2 different components, they only share the same structure 
       <Card name="Reem" age="20"></Card>
       <hr />
       ✅we want cards to look exatly the same, but use seperate data 
       <Card name="Bro" age="20"></Card>

      </div>
    );
  }
}


export default App;
```
> src/Card.js 
```bash 
import React, {Component} from 'react'

class Card extends Component{
    // Constructor added 
    // props contains all the data that we sent from App.js compoenent to Card.js component
    constructor(props){
        super(props)
        this.state = {myName: 'Geek'}
    }
    render(){
        return(
            <div className="container">
                <h2>This is Props: {this.props.name}</h2>
                <h2>This is Props: {this.props.age}</h2>
                <h2>This is property of class Card: {this.state.myName}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat fugiat perferendis nisi praesentium, quasi ipsam cum eius maiores iure rem deleniti voluptas adipisci nostrum accusamus asperiores vitae doloremque ab et totam magni. Hic, magnam? Est esse accusamus sit aspernatur.
                </p>
            </div>
        );
    }
}

export default Card;
```
> src/index.js (remains same)
```bash 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
![](14.PNG)


