### Higher Order Component 
> The Problem:
Both ClickCounter.js and HoverCounter.js are using the same increementCounter functionality, yet we have seperately defined it in both these files 

- HoverCounter.js 
```bash
import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props){
        super(props)
  
        this.state = {
            count: 0
        }
    }
  
    increementCount = () => {
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
  render() {
    #const { count } = this.state 
    return (
      # everytime you hover on the heading the count increases 
      <div onMouseOver={this.increementCount}>Hover {count} times </div>
    )
  }
}

export default HoverCounter
```
- ClickCounter.js 
```bash
import React, { Component } from 'react'

class ClickCounter extends Component {
  constructor(props){
      super(props)

      this.state = {
          count: 0
      }
  }

  increementCount = () => {
      this.setState( prevState => {
          return {
              count: prevState.count + 1
          }
      })
  }
  render() {
    #const { count } = this.state 
    return (
      <div>
          # when you click on the button it increments the count inside the button itself 
          <button onClick={this.increementCount}> clicked {count}times</button>
      </div>
    )
  }
}

export default ClickCounter
```
> the Solution: 
we couldve reused the increementCount functionality in both ClickCounter.js and HoverCounter.js but instead its been duplicated.

##### How can we reuse this functionality?
we could lift the counter logic and state to Parent and pass it as props to both the child components - State Lifting

If child components are scattered in react component tree, lifting the state wouldnt be the right solution , to fix such a problem we'd need Higher Order Components. 

### Higher Order Components 
Higher Order Components is used to share common functionality between components. HOC is a pattern where a function takes a component as an argument and returns a new component 

#### syntax for HOC pattern:
HOC takes an original component, adds functionality and returns an enhanced component
```bash
const EnhancedComponent = higherOrderComponent(originalComponent)
#for example,
const ironMan = withSuit(TonyStark)
```
#### HOC file naming convention
Pascal casing 

> WithCounter.js 
Instead of Defining the increementCounter functionality in both the components seperately we defined it inside WithCounter.js and passed it as props.
```bash
import React from "react";
#function which accepts originalComponent and returns EnhancedComponent 
const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        #this is the common functionality we want to share 
        constructor(props){
            super(props)
      
            this.state = {
                count: 0
            }
        }
      
        increementCount = () => {
            this.setState( prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
       
        render() {
            #HOC injects name prop to any component that requires it 
            return <OriginalComponent 
                    name='Meow'
                    count={this.state.count}
                    increementCount={this.increementCount}/>
        }
    }
    #originalComponent enhanced with the props is returned as a NewComponent
    return NewComponent
}

export default EnhancedComponent
```
> ClickCounter.js 
```bash
import React, { Component } from 'react'
import EnhancedComponent from './WithCounter'

class ClickCounter extends Component {
  render() {
    #destructuring count and increement count retreived as props from WithCounter.js
    const {count, increementCount} = this.props

    return (
      <div>
          # when you click on the button it increments the count inside the button itself 
          # <button onClick={this.increementCount}>{this.props.name} clicked {count}times</button> 

          <button onClick={increementCount}>{this.props.name} clicked {count}times</button>
      </div>
    )
  }
}

export default EnhancedComponent(ClickCounter)
```
> WithCounter.js 
```bash
const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        # this is the common functionality we want to share 
        constructor(props){
            super(props)
      
            this.state = {
                count: 0
            }
        }
      
        increementCount = () => {
            this.setState( prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        render() {
            # HOC injects name prop to any component that requires it 
            return <OriginalComponent 
                    name='Meow'
                    count={this.state.count}
                    increementCount={this.increementCount}/>
        }
    }
    #originalComponent enhanced with the props is returned as a NewComponent
    return NewComponent
}

export default EnhancedComponent
```
#### Higher Order Components in functional based components 
Using the same example above, but in function based components 

> A.js 
```bash
import React, {useState} from 'react'
import Counter from './Counter'
function A(props) {
# const [count, setCount] = useState(0)

# function increementCount(){
#     setCount(count+1)
# }
const {count, increementCount} = props
  return (
    <div>
        <button onClick={increementCount}>{count} click</button>
    </div>
  )
}

export default Counter(A)
```
> B.js 
```bash
import React, {useState} from 'react'
import Counter from './Counter'
function B(props) {
# const [count, setCount] = useState(0)

# function increementCount(){
#     setCount(count+1)
# }
const {count, increementCount} = props
  return (
    <div>
        <button onMouseOver={increementCount}>{count} click</button>
    </div>
  )
}

export default Counter(B)
```
> Counter.js 
```bash
import React, {useState} from 'react'
#HOC takes original component as input, and returns an enhanced component 

#EnhancedComponent=(originalComponent)
const Counter = (OriginalComponent) => {  
    #function newComponent
    function Counter(props) {
        const [count, setCount] = useState(0)
    
        function increementCount(){
            setCount(count+1)
        }
    
        return (
        <div> 
           <WrappedComponent 
            count={count} 
            increement={increementCount}/>
        </div>
        )
    }
   #return newComponent
   return Counter
}

#export default EnhancedComponent 
export default Counter
```
## Single Page Applications 
React is crazy fast, you can navigate between pages quickly

> SPA 
In a normal JS app, we use index.html for each page, to navigate to a different page it becomes slower to navigate for example, ![](//www.nasa.gov/), However in react which uses SPA which downloads everything initially, such that when user navigate to another page in the menu, it doesnt feel slow, since everything is already downloaded and in memory of the browser. When were fetching the data from the backend from 3rd party applications, for those cases, it will show a loader, in order to implement loader in our application we'll use moment package. React even saves us storage (bandwidth), for instance, every time were going from one menu item to another, footer and menu is common, so when we implement react-routing it saves all the same content of the website so it can re-use it everytime user navigates from one page to another (text is iniitally loaded, images loaded dyanamically later (when media is loaded later)- this is called as lazy loading )

> Throttling - introducing a bottle neck 
When we try to limit the performance using the network tab and keep decreasing the bandwidth. 

### React Router 
> we need to install both these dependencies
```bash
npm i react-router
npm i react-router-dom
#react-router-dom is a wrapper of react-router for DOM applications
#its used for implementing react router for DOM
```
> but if we mention react-router-dom, it automatically installs react-router 
```bash
npm i react-router-dom
```
> installing v6 version of react-router-dom
```bash
npm i react-router-dom@6
# when we specify 6, it installs the latest react version of 6, which is currently 6.3.1
```
#### Note:
All imports are from react-router-dom

#### Setting Template 
> index.js 
```bash
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
```
#### This is how the App.js must be embedded to implement routing
- Browser router is a parent/ ancestor of Routes 
- Routes is a collection of Route.
```bash
<browserRouter>
  <Routes> 
    <Route path='/' element={}>
  </Routes>
</browserRouter>
```
> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Navigation from './components/Navigation';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Navigation/>

         # routes is an HOC 
         <Routes>
           # if path matches show this component 
           <Route path='/homepage' element={<Homepage/>}/>
           <Route path='/about' element={<About/>}/>
      </header>
    </div>
  );
}

export default App;
```
> When we go from one menu item to another it causes a small ms of blank screen. Why?
```bash
by going on address bar and typing enter it means its going to be fetching everything again, 

However if the menu item is clicked on the page itself, it wont be fetching data again, and thats why it shows no ms of blank screen.
```
#### When user clicks on the menu item, it renders that component using Link
> Navigation.js 
```bash
import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <div>
        #make sure the link inside to="" is same as the link inside App.js path=""
        <Link to='/'>default</Link>
        <Link to='/homepage'>home</Link>
        <Link to='about'>About</Link>
        #Link component is used to perform the navugation 
    </div>
  )
}

export default Navigation
```
> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Navigation from './components/Navigation';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Navigation/>
         <Routes>
           #Route component is used to put the condition what element/component to show on which path. 
           <Route path='/homepage' element={<Homepage/>}/>
           <Route path='/about' element={<About/>}/>
         </Routes>
      </header>
    </div>
  );
}

export default App;
```
#### Ways to navigate with menu items 
```bash
Link Component 
This is a better way to navigate 

usenavigate 
This is equavalent to using window.location.href in JS, in order to navigate using react which implements seamless navigation use useNavigate 

#In case of JS:
console:
window.location.href='about'
#page will reload again

Navigate component is used in class based components in place of useNavigate hook in functional component 
```
### useNavigate() hook (Alternative to useHistory)
> Navigation.js 
```bash
import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate()

    const clicked = () => {
        #navigate() contains the path
        #the paath over here is secret
        #inside App.js secret is the path that is defined for Secret.js 
        #Thats why it redirects to the secret component 
        navigate('secret')
    }

  return (
    <div>
        <Link to='/'>default</Link>
        <Link to='/homepage'>home</Link>
        <Link to='about'>About</Link>
        #when the button is clicked it invoked the clicked function which navigates to secret component 
        <button onClick={clicked}>Secret</button>
    </div>
  )
}

export default Navigation
```
> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Navigation from './components/Navigation';
import Secret from './components/Secret';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Navigation/>
         <Routes>
           <Route path='/homepage' element={<Homepage/>}/>
           <Route path='/about' element={<About/>}/>
          <Route path='secret' element={<Secret/>}/>
         </Routes>
      </header>
    </div>
  );
}

export default App;
```
#### Query param and Path Parameter 
Dyanamic 
> When we navigate from one page to another page we can send some data, we pass query parameters in the URL 
```bash
### Query Param example
//www.amazon.in/s?k=laptop
//www.youtube.com/search?q=dhdiehid

### Query Param syntax:
URL?<key>=<value>&<key1>=<value1>
```
> Path parameter - whenever any url has a dyanamic id, user id is dyanamic then its a path parameter
```bash
### Instagram 
instgram.com/yush.dev 

### Youtube 
youtube.com/<channelname>
```
### Acheiving Parameter with Router 
> useSearchParams - used for query parameter 
> useParams - used for Path parameter 


### useParams()
> it helps in creating for query parameters 
```bash
//instagram.com/meow
```
#### if you want to pass one value in the Path parameter 
Simple type `http:#localhost:3000/user/reem` in localhost and it will return the User component 
> App.js 
```bash
import { Route, Routes } from 'react-router-dom';
import User from './components/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          # Path parameter can be implemented by using useParams hook 
          # were adding an extra parameter which we can fetch dyanamically 
            <Route path='/user/:fname' element={<User/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
```
> User.js 
```bash
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {fname} = useParams()
    return (
        <h1>
            User { fname } Page 
        </h1>
    )
}

export default User
```
#### if you want to pass two values in the Path parameter 
> App.js 
```bash
import { Route, Routes } from 'react-router-dom';
import User from './components/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          # Path parameter can be implemented by using useParams hook 
          # were adding an extra parameter which we can fetch dyanamically 
            <Route path='/user/:fname/:lname' element={<User/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
```
> User.js 
```bash
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {fname, lname} = useParams()
    return (
        <h1>
            User { fname } { lname } 
        </h1>
    )
}

export default User
```
### useSearchParams()
> it helps in implementing Query Parameters 
```bash
URL?<key>=<value>&<key1>=<value1>
```
> Use case:
On amazon we have a list of parameters on the lhs, selecting any option will change the url with the query parameter, which allows you to share the link with others or even bookmark the link. 

> App.js 
Inside App.js were defining the url link that we want to link wth a component 
```bash
<Routes>
  <Route path='/user' element={<User/>} />
</Routes>
```
> User.js 
We import the useSearchParams hook, on click on the Active users button we want to set the url to http:#localhost:3000/user?filter=active, were maintaining another state which is responsible f0r checking actve users
then were using ternary conditional rendering to define what to render on the screen based on whether the filter object is active or not. 
```bash
import React from 'react'

#useSearchParams works like useState hook 
#instead of storing the state in memory it stores it in the URL 
import { useSearchParams } from 'react-router-dom'
const User = () => {
const [SearchParams, setSearchParams] = useSearchParams()

# make a check on the active users 
# when filter is true, show active users 
const showActiveUsers = SearchParams.get('filter') === 'active'

    return (
        <h1>
        #User { fname }{lname} 
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>

        #when this button is clicked, it changes the URL to http:#localhost:3000/user?filter=active 
        <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>

        #when this button is clicked, it changes the URL to http:#localhost:3000/
        <button onClick={() => setSearchParams({})}>reset Filter</button>

        #When we click on Active users the filter is toggled to active and according to the condition we set over here when showActiveUsers state is true we want to show active users else show no users 
        {
          showActiveUsers ? <h2>Showing Active users</h2> : <h2>showing no users</h2>
        }
        </h1>
    )
}

export default User
```
> Navigation.js 
Its worth noting that the link defined inside Navigation.js is technically the link button that is rendered on the page, we've passed simple styling to how we want the active link vs unactive links to look like
```bash
      <NavLink
        to="user"
        style={({ isActive }) => isActive ? {color: "white"} : undefined }> Users 
      </NavLink> 
```

### Link VS navlink 
Link renders anchor dom element at the end of the day. 

There's not much difference between link and navlin. in link it dwe can only put style for inactive links(links that have been visited), you have to explicity define it. However, if you use Navlink, it highlights the visited link by default 

- Link is tehcnically like an <a> tag in html
```bash
<a href='/test.html'>Test</a>
```
React-dom packages provides Link 
```bash
<Link to='/test'>Test</Link>
```
- Navlink 
```bash
<NavLink to='/faq' activeStyle={(color:'red', fontWeight:'bold')}> FAQ </NavLink>
```
### No Match Route 
> NoMatch.js 
```bash
import React from 'react'

function NoMatch() {
  return (
    <div>Page Not Found</div>
  )
}

export default NoMatch
```
> App.js 
```bash
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Navigation from './components/Navigation';
import Secret from './components/Secret';
import {Routes, Route} from 'react-router-dom'
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Navigation/>
         <Routes>
           <Route path='/homepage' element={<Homepage/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='secret' element={<Secret/>}/>

           #When user types in a url that doesnt belong to any other Route then we'll simply display this NoMatch component 
           <Route path='*' element={<NoMatch/>} />
         </Routes>
      </header>
    </div>
  );
}

export default App;
```
### Dyanamic Routes 
> Lets take a scenario where 
- localhost:3000/users renders all the users on the page 
```bash
user 1 
user 2
user 3
```
When we click on user 1, which has an id of 1, we want to render this url `localhost:3000/users/id/1` and specify all the details of user 1 

When we click on user 2, which has an id of 2, we want to render this url `localhost:3000/users/2` and specify all the details of user 2 

> The problem:
When you navigate to `localhost:3000/users/id/1` it renders Details about the user, similarly when you navigate to `localhost:3000/users/id/2` it again renders Details about the user
- App.js 
```bash
import {Routes, Route} from 'react-router-dom'
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Navigation/>
            <Routes>
              <Route path='users' element={<Users/>} />
              <Route path='users/1' element={<Details/>} />
              <Route path='users/2' element={<Details/>} />
          </Routes>
      </header>
    </div>
  );
}

export default App;

```
- Users.js 
```bash
import React from 'react'

const Users = () => {
  return (
    <div>
        <h2>user 1</h2>
        <h2>user 2</h2>
        <h2>user 3</h2>
    </div>
  )
}

export default Users
```
- Details.js 
```bash
import React from 'react'

function Details() {
  return (
    <div>
        Details about user 
    </div>
  )
}

export default Details
```
> The Solution: Dyanamic Routes 
- App.js
```bash
     <Routes>
      <Route path='users' element={<Users/>} />
    # <Route path='users/1' element={<UserDetails/>} />
    #<Route path='users/2' element={<UserDetails/>} />

      # use dyanamic route segments instead 
      <Route path='users/:userId' element={<UserDetails>} />
     </Routes>
```
- Users.js 
```bash
import React from 'react'

const Users = () => {
  return (
    <div>
        <h2>user 1</h2>
        <h2>user 2</h2>
        <h2>user 3</h2>
    </div>
  )
}

export default Users
```
> UserDetails.js 
```bash
import React from 'react'

function UserDetails() {
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails
```
#### React Router matches the path that is more specific 
- react router will try to find the matching route, if that is not found it will try to match the dyanamic route.

- id passed for path parameter implemntation using useParams() can be any string, not just a number

- if we have 2 components of the same path, then the path that is defined will be rendered 

- React router matches the route that is more specific

Whenever user enters `http:#localhost:3001/users/admin` on the url, he is redirected to The Admin component. 

> Admin.js 
```bash
import React from 'react'

function Admin() {
  return (
    <div>
        Admin user 
    </div>
  )
}

export default Admin
```
> App.js 
```bash
  <Route 
    path='users/admin' 
    element={<Admin/>} />  
```
### Dyanamic route nesting 
Test it out when you hover to `http:#localhost:3001/users/admin ` it redirects you to the admin component and when you hover to `http:#localhost:3001/users/1` it redirects you to Userdetails component. 
> App.js 
```bash
#nest Both these routes inside users path Route
 <Routes>
   <Route path='users' element={<Users/>}>
        <Route path='userId' element={<UserDetails/>} />
        <Route path='admin' element={<Admin/>} />
      </Route>
   </Routes>
```
> Users.js 
```bash
import React from 'react'
# in Users.js we need to add an outlet component for rendering the child 
import {Outlet} from 'react-router-dom'
const Users = () => {
  return (
    <div>
        <h2>user 1</h2>
        <h2>user 2</h2>
        <h2>user 3</h2>
        <Outlet/>
    </div>
  )
}

export default Users
```
### useLocation() 
useLocation returns the current location object same as `window.location` object in JS. 

> App.js 
```bash
       <Routes>
            <Route path='/user/:fname' element={<User/>} />
        </Routes>
```
> User.js 
When user types `http://localhost:3000/user/rum` in the URL, it renders `user rum page` on the screen, also it prints `my current location is /user/rum`
```bash
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const User = () => {
    const {fname} = useParams()
    # we imported the location object here 
    const location = useLocation()
    console.log(location)
    
    return (
        <>
            User { fname } Page 
            
            <p>my current location is {location.pathname}</p>
        </>
    )
}

export default User
```












