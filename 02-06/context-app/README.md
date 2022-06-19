### Problems with prop drilling
--> Problems with Prop Drilling --> Readability --> Memory --> Not so efficient

--> Prop Drilling is bad because the readability/ semantics is bad, also it takes more memory which makes it not so efficient. If we have multiple children then we have to to acheive prop drilling on all those children, so the maintainance becomes easy.

By using contextAPI, we dont have to worry about prop-drilling or state lifting. 

> Why do we need state?
To manage data 

#### In prop drilling this is how the components would pass data 
> ChildA.js 
```bash
const ChildA = () => {
  var name = 'string'
  return (
    <div><ChildB name={name}/></div>
  )
}

export default ChildA
```
> ChildB.js 
```bash
const ChildB = (props) => {
  return (
    <div><ChildD name={props.name}/></div>
  )
}

export default ChildB
```
> ChildD.js 
```bash
const ChildD = (props) => {
  return (
    <div>{props.name}</div>
  )
}

export default ChildD
```
### Context API 
Instead of passing props via prop-drilling, we use context-API through which we can pass data from parent to the target component. 

- When were passing props from Ancestor to Descendent (when were going more than one level down ) we need to use contextAPI instead. 

--> Context allows us to pass data from ancestor to descendent without using prop drilling. 

--> Context says wheerever your source is create it as provideer, wherever your destination is create it as consumer. 
- Provider (This will provide the data)
- Consumer (This will consume the data)

Comparitively to prop-drilling consumer API is more secure. 

### Steps to implementing createContext()
```bash
1. Create a context using createContext()
2. Context that you created export it 
3. Where we have the data give the Provider 
4. Wherever we want to import it just import it within Consumer 
```
1. Create a context by running createContext() Context which we created export it, where we have the data give the provider
> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import {useState, createContext} from 'react'

const context = createContext()
function App() {
  #if we have some state here 
  const [name, setName] = useState('reem')

  return (
    <div className="App">
      #anything inside the provider can access the data
      <context.Provider value={name}>
         <Child1/>
      </context.Provider>

    </div>
  );
}

#we need to export it
export {context}
export default App;
```
2. wherever we want to import it, just do import and use consumer
- consumer requires a function, and this function will be called everytime the data changes 
```bash
import React from 'react'
#importing context in child 
import {context} from '../App'

function Child4() {
  return (
    <context.Consumer>
      {data => {
        return (
            <div>Name: {data}</div>
        )
      }}
    </context.Consumer>
  )
}

export default Child4

# DOM:
Name: reem
```
### Within one Provider can we pass multiple data?
Well technically we can, but if were making change in one data and the other data is not changed, then it will be re-rendered as well (irrespective of whether it had any changes in it or not)

### what is babel, webpack ?
We type in JSX in react, we can give extension as .js or .jsx both will work.
- Conversion from JSX to JS - babel 
- bundling from react code to HTML/CSS/JS- webpack 

### Can we lift state using context?
state lifting - first we lift the state from child components and we transfer it to the parent component and then we send the prop to the child components either on every child level via prop drilling or directly via context api 
![](g8.PNG)

If we placed an input at ChildD, then we would lift it, then we would drill it. (this is discussed in passing more than 1 data in context API example)

### Passing one data via Context API 
> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import {useState, createContext} from 'react'
import ChildA from './components/ChildA';

const context = createContext()

function App() {
  const [name, setName] = useState('reem')

  return (
    <div className="App">
      <context.Provider value={name}>
         <ChildA/>
      </context.Provider>

    </div>
  );
}

export {context}
export default App;
```
> ChildD.js 
In this example, were technically updating the state from child component and the results are rendered at the parent component.
```bash
import React from 'react'
import {context} from '../App'
const ChildD = () => {
  return (

  <context.Consumer>
    {data => {
      return (
        <div>
         <p>Name: {data} </p>
        </div>
      )
    }}
  </context.Consumer>
  )
}

export default ChildD

DOM:
name: reem
```
### Passing more than one data via Context API 
> You can have many contexts in one app. 

We can have one context inside another and pass more than one data from parent component to child component 
> App.js 
```bash
import './App.css';
import Child1 from './components/Child1';
import {useState, createContext} from 'react'
import ChildA from './components/ChildA';

const context = createContext()
const setContext = createContext()

function App() {
  #if we have some state here 
  const [name, setName] = useState("")

  return (
    <div className="App">
      <context.Provider value={name}>
        <setContext.Provider value={setName}>
          <Child1/>
          <ChildA/>
        </setContext.Provider>
      </context.Provider>
    </div>
  );
}

export {context, setContext}
export default App;
```
> ChildD.js 
In this example, were technically updating the state from child component and the results are rendered at the parent component.
```bash
import React from 'react'
import {setContext} from '../App'

const ChildD = () => {
  return (
  #we are sharing (function) data from any component to any other component, not necessarily from parent to child component 
  #Lifting state from ChildD to App.js and then the state is passed as props to Child4.js directly through context API 
  <setContext.Consumer>
    {param => {
      return (
        <div>
          <input type='text' onKeyUp={(e => param(e.target.value))} />
        </div>
      )
    }}
  </setContext.Consumer>
  )
}

export default ChildD
```
> Child4.js 
```bash
import React from 'react'
import {context} from '../App'

const Child4 = () => {
  return (
  <context.Consumer>
    {param => {
      return (
        <div>
          <p>{param}</p>
        </div>
      )
    }}
  </context.Consumer>
  )
}

export default Child4
```
![](g15.PNG)

> This is how were acheiving state lifting. 
Data is going from ChildD (where state is set) to App.js and then its send from App.js to Child4 (where state is printed)
![](g13.PNG)

### Advantage 
- even if we move the component's position and add additional components in between ancestor and descendent and if we passed props via context API its not going to make any difference. This allows us to maintain the code easily.

- In case of prop-drilling if we added components in between ancestor and descendent, then we'd have to individually change all the components in between to link to the very next child component which (therefore, propdrilling aint a practical option)

For example, if we already had 3 existing components i.e ChildA, ChildB and ChildD and if we were to add an existing component say ChildC in between ChildB and ChildD, then, we'd have to link ChildB to ChildC and further link ChildC to ChildD. If instead of having to send props down at every level, we wouldve used context API which ensures that props are passed directly from the parent/provider to the child/consumer component, then we wouldnt have to make any link changes in between.

> ChildA.js 
```bash
const ChildA = () => {
  var name = 'string'
  return (
    <div><ChildB name={name}/></div>
  )
}

export default ChildA
```
> ChildB.js 
```bash
const ChildB = (props) => {
  return (
    <div><ChildD name={props.name}/></div>
  )
}

export default ChildB
```
> ChildD.js 
```bash
const ChildD = (props) => {
  return (
    <div>{props.name}</div>
  )
}

export default ChildD
```
- Note: one provider can have two or more consumers
If we have 4 states, we need to make 4 providers and pass it as 4 values. 

### We can even seperate the contexts in seperate files 
We defined all the contexts in seperate files. 

> NameContext.js 
```bash
import { createContext } from "react";
const nameContext = createContext()
export default nameContext 
```
> setNameContext.js 
```bash
import { createContext } from "react";
const setNameContext = createContext()
export default setNameContext 
```
> lastNameContext.js 
```bash
import { createContext } from "react";
const lastNameContext = createContext()
export default lastNameContext 
```
> setLastNameContext.js 
```bash
import { createContext } from "react";
const setLastNameContext = createContext()
export default setLastNameContext 
```
### When you pass TWO values through Context API 
> App.js 
```bash
import './App.css';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import { useState } from 'react';

import nameContext from './NameContext';
import setNameContext from './SetNameContext';

function App() {
  const [name, setName] = useState("");

  return (
    <nameContext.Provider value={name}>
        <setNameContext.Provider value={setName}>
                <Child1 />
                <ChildA />
        </setNameContext.Provider>
    </nameContext.Provider>
  );
}

export default App;
```
> ChildD.js 
```bash
import React from 'react'
import setNameContext from '../SetNameContext'

const ChildD = () => {
  return (
  #we are sharing (function) data from any component to any other component, not necessarily from parent to child component 
  #Lifting state from ChildD to App.js and then the state is passed as props to Child4.js directly through context API 
  <setNameContext.Consumer>
    {param => {
      return (
        <div>
          <input type='text' onKeyUp={(e => param(e.target.value))} />
        </div>
      )
    }}
  </setNameContext.Consumer>
  )
}

export default ChildD
```
> Child4.js 
```bash
import React from 'react'
import nameContext from '../NameContext'

# The Problem: callback hell 
const Child4 = () => {
  return (
    <nameContext.Consumer>
      {param => {
         return (
            <p>{param}</p>
         )
      }}
    </nameContext.Consumer>
  )
}

export default Child4
```

### When you pass more than TWO values through Context API 
### The Problem: Callback Hell: When you have more than a couple contexts, the readibility becomes confusing
import multiple imports in a nested format, but this becomes harder to manage and read and causes callback hell. 
![](g9.PNG)

> App.js 
```bash
import './App.css';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import { useState } from 'react';

import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastNameContext from './LastNameContext';
import setLastNameContext from './SetLastNameContext';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <nameContext.Provider value={name}>
        <lastNameContext.Provider value={lastName}>
        <setNameContext.Provider value={setName}>
          <setLastNameContext.Provider value={setLastName}>
                <Child1 />
                <ChildA />
          </setLastNameContext.Provider>
         </setNameContext.Provider>
        </lastNameContext.Provider>
    </nameContext.Provider>
  );
}

export default App;
```
> Child4.js 
```bash
import React from 'react'
import nameContext from '../NameContext'
import lastNameContext from '../LastNameContext'

# The Problem: callback hell 
const Child4 = () => {
  return (
    <nameContext.Consumer>
      {firstName => {
        return (
          <lastNameContext.Consumer>
            {lastName => {
              return(
                <h1>Name: {firstName} {lastName} </h1>
              )
            }}
          </lastNameContext.Consumer>
        )
      }}
    </nameContext.Consumer>
  )
}

export default Child4
```
> ChildD.js 
```bash
import React from 'react'
import setNameContext from '../SetNameContext'
import setLastNameContext from '../SetLastNameContext'
const ChildD = () => {
  return (
    <setNameContext.Consumer>
        {setFirstName => {
          return (
            <setLastNameContext.Consumer>
              {setLastName => {
                return (
                    <div>
                      <input type="text" onKeyUp={e => setFirstName(e.target.value)} />
                      <input type="text" onKeyUp={e => setLastName(e.target.value)} />
                    </div>
                )
              }}
            </setLastNameContext.Consumer>
          )
        }}
  </setNameContext.Consumer>
  )
}

export default ChildD
```
![](g77.PNG)

### useContext() to the rescue
- useContext Hook 

> LHS is useContext, RHS is callback hell 
- Child4 written in useContext VS Child4 written in callback hell
![](g10.PNG)

- ChildD written in useContext VS ChildD written in callback hell
![](g11.PNG)

### `useContext()` implementation  
> App.js 
```bash
import './App.css';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import { useState } from 'react';

import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastNameContext from './LastNameContext';
import setLastNameContext from './SetLastNameContext';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <nameContext.Provider value={name}>
        <lastNameContext.Provider value={lastName}>
        <setNameContext.Provider value={setName}>
          <setLastNameContext.Provider value={setLastName}>
                <Child1 />
                <ChildA />
          </setLastNameContext.Provider>
         </setNameContext.Provider>
        </lastNameContext.Provider>
    </nameContext.Provider>
  );
}

export default App;
```
> ChildD.js 
To use the context we defined in seperate files, we import it using the useContext() hook
```bash
import React, { useContext } from 'react'
#Both these contexts are defined outside src 
import setNameContext from '../SetNameContext'
import setLastNameContext from '../setLastNameContext'

const ChildD = () => {
  const setFirstName = useContext(setNameContext);
  const setLastName  = useContext(setLastNameContext);
  
  return (
    <div>
      <input type="text" onKeyUp={e => setFirstName(e.target.value)} />
      <input type="text" onKeyUp={e => setLastName(e.target.value)} />
    </div>
  )
}

export default ChildD
```
> Child4.js 
```bash
import React from 'react'
import nameContext from '../NameContext'
import lastNameContext from '../lastNameContext'
import { useContext } from 'react'

const Child4 = () => {
  const firstName = useContext(nameContext);
  const lastName = useContext(lastNameContext);

  return <h1>Name: {firstName} {lastName}</h1>;
}

export default Child4
```
![](g77.PNG)

### Can we add context in index.js 
the contexts having state cannot be added, it must be added in App.js. 
Within index.js we cannot add state context, we can only add regular contexts which pass (eg:) say a string value

### Were creating a toggle using useContext Hook
1. we created a couple contexts (this is called context (not component))
- ThemeContext.js 
```bash
import { createContext } from "react";
const ThemeContext = createContext();
export default ThemeContext;
```
- setThemeContext.js
```bash
import { createContext } from "react";
const SetThemeContext = createContext();
export default SetThemeContext;
```
Notes:
- its not neccessary to write contexts in pascal casing 
- contexts and utils not mandatory to use pascal casing 
- Pascal casing only important for components. 

2. we made these changes to App.js component 
https://www.geeksforgeeks.org/how-to-create-a-toggle-switch-in-react-as-a-reusable-component/

- ThemeContext is an object which has 2 objects provider and consumer. 
- ThemContext.provider is an hoc and the value were passing is a prop
> App.js 
```bash
import './App.css';
import { useState } from 'react';
import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastNameContext from './LastNameContext';
import setLastNameContext from './SetLastNameContext';
import ThemeContext from './ThemeContext';
import SetThemeContext from './SetThemeContext';
import Main from './Main';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [theme, setTheme] = useState(false);
  #we created a couple theme objects themContext and setThemeContext to pass the state data: theme and setTheme 
  #were ultimately passing these to the Main.js component 
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <nameContext.Provider value={name}>
          <lastNameContext.Provider value={lastName}>
            <setNameContext.Provider value={setName}>
              <setLastNameContext.Provider value={setLastName}>
                <Main />
              </setLastNameContext.Provider>
            </setNameContext.Provider>
          </lastNameContext.Provider>
        </nameContext.Provider>
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
```

> Main.js (we transfered some code from App.js into this for better readability)
- we'll put conditionals inside here (when isLight true, light class is added)
```bash
import React, { useContext } from 'react'
#import logo from './logo.svg';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeContext from './ThemeContext';

#were retreiving the props passed by the context provider object here at the consumer end, over here, weve imported the useContext hook to import the ThemeContext value i.e theme which is requiring for displaying the final theme 
const Main = () => {
  const isLight = useContext(ThemeContext);

  return (
    #when value={theme} is true then simply add the light class from App.css 
    <div className={`App ${isLight?"light": ""}`}>
      <header className="App-header">
        {/* were rendering themeSwitcher component over here */}
        <ThemeSwitcher />
        <Child1 />
        <ChildA />
      </header>
    </div>
  )
}

export default Main
```

3. Create a component ThemeSwitcher.js within src/components
- since `Main.js` encapsulated `ThemeSwitcher.js`, it technically contains all the state that was send through `<SetThemeContext.Provider value={setTheme}>` at `App.js`
- we imported ToggleSwitch.js from GFG https://www.geeksforgeeks.org/how-to-create-a-toggle-switch-in-react-as-a-reusable-component/ 
> ToggleSwitch.js 
```bash
import React, {useContext} from 'react';
import SetThemeContext from '../SetThemeContext';
import '../ThemeSwitcher.css';

#We set the setTheme state in this component 
const ThemeSwitcher = () => {
  const setThemeContext = useContext(SetThemeContext);

  #setTheme function is responsible for setting the state value for setThemeContext, it returns either true or false value, which depicts whether its light mode or dark mode 
  const setTheme = e => {
    console.log(e.target.checked);
    setThemeContext(e.target.checked);
    #true -> light mode
    #false -> dark mode
  }

  return (
    # everytime the user clicks on the checkbox, setTheme function is invoked 
    <div className="container">
      <div className="toggle-switch">
        <input 
          type="checkbox" 
          className="checkbox" 
          name="theme" 
          id="theme"
          onChange={setTheme} 
        />
        <label className="label" htmlFor="theme">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  )
}

export default ThemeSwitcher
```

4. we created a css file `ThemeSwitcher.css`, imported code from GFG and made these changes. 
- In order for ToggleSwitch.js to work, we'll need to import some css styling for it 
> mainly it has these iconic stylings, you can view the rest at `src/ThemeSwitcher.css`
```bash
.inner:before {
    content: "☀️";
    padding-left: 10px;
    background-color: #FEF9A7;
    color: #fff;
  }
  
  .inner:after {
    content: "🌑";
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }
  .switch {
    display: block;
    width: 24px;
    margin: 5px;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
```

- we also added changes to App.css 
```bash
#whenever light class is added, the styling is ultimately taken from here 
.light .App-header {
  background-color: #DFDFDF;
  color: black;
}
```

> Can contexts be called stateful contexts?
stateful components has state - any component that has state in it, is reffered to as stateful components. 
stateless components have no state - if a comonent does not have any state, then its reffered as stateless components. 
- when contexts have state it cannot be called stateful contexts 
compare context to prop, not state because context can be passed, state can be updated. 

### Q. If parent (has state and this is passed to child component as props) then is the child component stateful or stateless?
when a re-render of component happens; props gets changed; state is changed 
```bash
child's re-rendering is because of props, not state 
it doesnt have its own state to track
so child is stateless 
```

### Pure function VS impure function
Pure function will always give the same results when called multiple times with the same parameters / attributes. 
A pure function will always give the same result even if it is shifted to another place. A pure function does not depend on any data other than the parameters. It should not access anything outside of its scope. 

If a function is not doing that, then its an impure function. 
```bash
#no matter how many times you call this function it will always give 12 
const fn = (a, b) => {
  return a + b
}

fn(2, 10)
```
```bash
const fn = () => {
  return Math.random()
}
fn()
```
> Impure 
```bash
#arrays are pass by reference, every time you call this value will be changing 
const fn = (a) => {
  a[0] = a[0] + 1
  return (a)
}
fn([10])
```
> Pure 
```bash
const fn = (a) => {
  b = a[0] + 1
  return (b)
}
fn([10])
```
> Impure - accesiing outside scope 
```bash
const a = [10, 12, 14]
const fn = () => {
  return (a)
}
fn()
```
> Impure - accessing dom 
```bash
const fn = () => {
  document.getElementById('DGIDHEI')
}
fn()
```
> impure - because accessing console 
```bash
const fn = () => {
  console.log('abcd')
}

fn()
```
> Pure functions is required because if we want we can shift them anywhere in our code and they will not break 
1. pure functions will always give same value 
2. pure function never depends on anything outside 
3. pure function does not change the state of whatever is passed 
```bash
const fn = (a) => {
  for(let i = 0; i < a.length; i++){
    a[i] = a[i] + 1
  }
  #array is pass by reference 
}

fn([10, 11, 12])
```
### Pure function vs Impure function
If component is dependent only on the props, then its a pure component, otherwise its reffered as an impure component. 
- pure component can have state, but if your not setting the state then its pure 
> example of pure component 
```bash
import React from 'react'
import ChildD from './ChildD'
const ChildC = () => {
  return (
    <div><ChildD/></div>
  )
}

export default ChildC
```

if there is state inside component or hooks then its impure, because calling it multiple times would give a different output. 

### Controlled VS Uncontrolled components 
> Controlled components 
If component is dependent on some state then its controlled components.
> Uncontrolled - not dependent on parent's prop. Even if were taking props, not dependent 

### Input is controlled, component is uncontrolled 
Its output is dependent on the value of the state 
A controlled component is dependent on the props passed to it by its parent 
```bash
const Component = ({value, setValue}) => {
  return (
    <input type='text' value={value} onChange={e => setValue(e.target.value)}
  )
}
```
> example
```bash
#this component is dependent on the parent through its props
import React from 'react'
import ChildD from './ChildD'
const ChildC = (props) => {
  return (
    <div name={props.name}><ChildD/></div>
  )
}

export default ChildC
```
### Input is controlled, component is uncontrolled 
> Uncontrolled - not dependent on parent's prop. Even if were taking props, not depeendent 
```bash
const Component = () => {
  const [value, setValue] = useState()
  return (
    #input itself is controlled component because it depend on parents prop
    <input type='text' value={value} onChange={e => setValue(e.target.value)} />
  )
}
```
![](r1.PNG)
- `input` is controlled component 
- `Component` is uncontrolled. 

> example
```bash
#this component is not dependent on parent for its props 
import React from 'react'
import ChildD from './ChildD'
const ChildC = () => {
  return (
    <div><ChildD/></div>
  )
}

export default ChildC
```
> example: `index.js `
root has no parent, it doesn't depend on the parent 
```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
);

```

### Input is uncontrolled, component is uncontrolled 
```bash
# component is uncontrolled
const Component = () => {
  const [value, setValue] = useState()

  return (
    #In the input tag over here though, its dependent on the value, but doesnt take props from the parent component -> thats why in this case its uncontrolled 
    <input type='text' value={value}  />
  )
}
```

### Input is uncontrolled, component is uncontrolled 
> many people useRef in uncontrolled 
not dependent on parent's prop, useref just gives the reference 
```bash
const Component = () => {
  const inputRef = useRef()
  return (
    <input type='text' ref={inputRef} />
  )
}
```
- `input` is uncontrolled 
- `Component` is uncontrolled 

![](t1.PNG)





























