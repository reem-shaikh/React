import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import React, {useState} from 'react'
//axios allows to make end point request to any api 

function App() {
  const [joke, setJoke] = useState("")

  const getJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then((response)=> {
      console.log(response)
      console.log(response.data.value)
      setJoke(response.data.value)
    })
  }

  return (
    <div>
      {/* when we click on the button, the joke is fetched from the response and set to setJoke */}
      <button onClick={getJoke}>get joke right now</button>
      {joke}
    </div>
  );
}

export default App;
