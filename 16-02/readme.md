One of the fundamental tasks of any web application is to communicate with servers through the HTTP protocol. This can be easily achieved using Fetch or Axios. Fetch and Axios are very similar in functionality. Some developers prefer Axios over built-in APIs for its ease of use. The Fetch API is perfectly capable of reproducing the key features of Axios.

### Fetch data using fetch API 
the fetch API provides a JS interface for accessing and manipulating parts of the HTTP pipeline such as requests and responses. its also provides a global fetch() method that provides an easy and logical way to fetch resources asynchronously across the network. 

> The fetch() API is an inbuilt JavaScript method for getting resources from a server or an API endpoint.
The Fetch API provides a fetch() method defined on the window object. It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory argument- the URL of the resource to be fetched. This method returns a Promise that can be used to retrieve the response of the request. 

### List a resource on DOM: using GET 
> reference: https://jsonplaceholder.typicode.com/guide/

> FetchApi.js 
```bash 
import React, {useState} from 'react'

function FetchApi() {

//were using useState to store the data in a state 
const [data, setData] = useState([])

//creating method using arrow function 
// were getting this API from https://jsonplaceholder.typicode.com/
const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=> response.json())
    .then((json)=> {
        console.log(json)
        setData(json)
        // a json object is returned here 
    })

    //api returns a promise in the form of a response object 
    //the json data is logged in the next then
}

  return (
    <>
    {/* on button click we get the api data from the url */}
    <button onClick={apiGet}>Fetch API</button>

    {/* print data state here. json.stringify converts js object to a JSON string */}
    {JSON.stringify(data)}
    <br></br>
    </>
  )
}

export default FetchApi

Document:
as soon as you click on the button, the state is updated and the dom is populated with the json data 
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import FetchApi from './component/FetchApi';

function App() {
  return (
    <div className="App">
      <FetchApi></FetchApi>
    </div>
  );
}

export default App;
```
#### Fetching data onClick and adding it to DOM in li tags 
> FetchApi.js 
```bash 
import React, { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);

  //Get Method - is used to display data 
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  // useEffect is used to fetch the data on page reload 
  // useEffect tells react what the component needs to do when the page is rendered 

    // useEffect(() => {
    //   apiGet();
    // }, []);

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchAPI;
```
> when you click on the fetchapi button, these json data is fetched from the endpoint and displayed in li tags in the DOM
![](1.PNG)

#### Creating a resource using POST 
> reference: https://jsonplaceholder.typicode.com/guide/

> FetchApi.js 
```bash 
import React, { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]); //emprty array
  const [inputs, setInputs] = useState({});  //empty object 
 
  //Get Method
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log('json',json);
        setData(json);
      });
  };

  ✅Post Method
  const apiPost = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
        //parseint converts args to a string 
        userId: parseInt(inputs.userId),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log('json',json));
  };

  //handleChange is called when a user enters a value in the input field 

✅const handleChange = (event) => {
//persist - permanent until its removed 

// Without event.persist() , 
// React will make the first event value as null when second event is fired.
// basically the input field will loose its old value when the new character is inserted 

    console.log('event', event)
    console.log('event name',event.target.name) 
    // based on the input field were entering it can be 
    // title / body / userId 

    event.persist();

    //when this function is called we update the inputs to 
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
      //event.target.value contains the value we entered in the input field 

      //using spread operator were saying, to keep the previos value of all the other inputs 
      //and update the title:"the value entered by user"
    })
    );
  };

  // when you submit the form handleSubmit will be called 
✅const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log('inputs',inputs);
  };

  // useEffect is used to fetch the data on page reload 
  // useEffect tells react what the component needs to do when the page is rendered 

    // useEffect(() => {
    //   apiGet();
    // }, []);

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* get data from users from a form */}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          /> 
          <br />
          <input
            type="text"
            name="body"
            placeholder="body"
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="userId"
            placeholder="userId"
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default FetchAPI;
```
> Note that: JSON is dyanamically assorting an ID 
![](2.PNG)

#### Fetching with axios 
Axios: Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. **It also has the ability to cancel / intercept HTTP requests, unlike fetch API.**

> Axios is a promise based HTTP library

### Installation 
> using cra app
```bash 
on terminal type
> npm install axios 

```
> using CDN links 
```bash 
integrate this link into your index.html file 
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
#### Displaying API data on DOM using axios.get
> PersonList.js 
```bash 
import React from 'react'
//importing axios from the axios library we just installed 
import axios from 'axios'

class PersonList extends React.Component {
  state = {
      persons: []
  }

  componentDidMount(){
      //performs http get request from endpoint 
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
          console.log(res)
          this.setState({persons: res.data})
      })
  }

  render(){
      return (
          <ul>
              {this.state.persons.map(person => 
                <li key={person.id}>{person.title}</li>
               )}
          </ul>
      )
  }
}

export default PersonList
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
import PersonList from './component/PersonList'
import PersonInput from './component/PersonInput'

function App() {
  return (
    <div className="App">
      <PersonList />
    </div>
  );
}

export default App;
```
![](4.PNG)
> Note that: RHS is JSON placeholder data 

#### Difference between axios and fetch 
![](3.PNG)
