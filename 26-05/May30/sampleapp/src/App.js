import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [likes, setLikes] = useState(0)
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [match, setMatch] = useState(false)

  const [users, setUsers] = useState([])

  //you can add as many useEffect as you want 
  //use Effect is called when component is mounted
  useEffect(() => {
    console.log('hello world')

    //cleanup - runs during unmounting only when the dependency array is empty (used for cleaning state / event listeners/ memory )
    return () => {
      console.log('this will only execute when unmounted')
    }
  }, [])

  //every time any change takes placee on likes state, useEffect will be executed 
  useEffect(() => {
    console.log('update world')
  }, [likes])

  useEffect(() => {
    if(pass1 === pass2){
      setMatch(true)
    }else{
      setMatch(false)
    }

  }, [pass1, pass2])

  //why does this crash?
  // useEffect(() => {
  //   //js attached ; after return statement and it treats it as one statement 
  //   return 
  //   () => {
  //     console.log('this will only execute when unmounted')
  //   }
  // }, [])

  // execute this API when component is first mounted 
  {/* Fetch - https://reqres.in/api/users */}
  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(response => setUsers(response.data))

    //we could also do async-await approach 
    // (async () => {
    //   const res = await fetch('https://reqres.in/api/users');
    //   const response = await res.json();
    //   setUsers(response.data);
    // })();
    
  }, [])

 

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={() => setLikes(likes + 1 )}>like</button>
        <h3>{likes}</h3>
        <button onClick={() => setLikes(likes - 1 )}>dislike</button>

        <input type='text' onKeyUp = {e => setPass1(e.target.value)} />
        <input type='text' onKeyUp = {e => setPass2(e.target.value)} />
        {match ? <h3>password match</h3> : <h3>password dont match</h3>} */}
      <ul>
          {users.map((single_user, idx) => {
                console.log(single_user)

                return <li>{single_user.first_name} {single_user.last_name}</li>
          })}
      </ul>

      </header>
    </div>
  );
}

export default App;




















