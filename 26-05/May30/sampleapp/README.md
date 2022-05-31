### useEffect 
to run some code initially when component is loaded
```bash
# Difference between mounting and rendering 
- when component is added first to web page - mounted 
- when component is displayed - rendered 

# Lifecyle of a react component:
# 1. Mounting happens first (component born)
# 2. Rendering happens next (component updated)
# 2. unmounted happens last (component destroyed)

Mounting, rendering, unmounting takes place inside useEffect hook.

When there is a state update, re-rendering occurs. Over here the component is updated 
```
its possible that a component is mounted and not rendered 

> Lifecycle of react component using `useEffect`
```bash
import {useEffect, useState} from 'react'

function App() {
  const [likes, setLikes] = useState(0)
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [match, setMatch] = useState(false)

  #you can add as many useEffect as you want 
  #use Effect is called when component is mounted
  useEffect(() => {
    console.log('hello world')

    #cleanup - runs during unmounting only when the dependency array is empty (used for cleaning state / event listeners/ memory )
    return () => {
      console.log('this will only execute when unmounted')
    }
  }, [])

  #every time any change takes placee on likes state, useEffect will be executed 
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

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setLikes(likes + 1 )}>like</button>
        <h3>{likes}</h3>
        <button onClick={() => setLikes(likes - 1 )}>dislike</button>

        <input type='text' onKeyUp = {e => setPass1(e.target.value)} />
        <input type='text' onKeyUp = {e => setPass2(e.target.value)} />
        {match ? <h3>password match</h3> : <h3>password dont match</h3>}
      </header>
    </div>
  );
}

export default App;
```
