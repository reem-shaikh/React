#### Query param and Path Parameter 
Dyanamic 
> When we navigate from one page to another page we can send some data, we pass query parameters in the URL 
```bash
### Query Param example
https://www.amazon.in/s?k=laptop
https://www.youtube.com/search?q=dhdiehid

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
https:#instagram.com/meow
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










