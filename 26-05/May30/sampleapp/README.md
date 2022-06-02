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

#### Lifecycle of react component using `useEffect`
> App.js 
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
#### To do List 
- useEffect - cleanup 
- axios 
- Asynchronous state management 
- useRef 

### codesandbox.io
website using which we can create react application without the need of having nodeJS installed on machine. 
- sign in with git -> create sandbox -> choose react -> it creates a react environment for you

#### How to acheive cleanup in useEffect?
> App.js 
```bash
import {useState} from 'react'
import Position from './Position';

function App() {
  const [showPosition, setShowPosition] = useState(true)
 return (
   <div className='app'>
    {showPosition ? <Position/> : false}
    <button onClick={() => setShowPosition(false)}>do not track</button>
   </div>
 )
 }

export default App;
```
> Position.js 
```bash
import {useEffect, useState} from 'react'

function Position() {
  const [mouse, setMouse] = useState({x:0, y:0})

  #useEffect shows what happens when component is first mounted 
  useEffect(() => {
  
    const fn = (e) => {
      console.log(e)
      console.log('tracking', e.x, e.y)
      #we added event listener at mounting time 
      #on mouse moving, it tracks the coordinates at x and y 
       setMouse({
         x: e.x,
         y: e.y
       })

    }
  #Its a new feature in React 18, Inside useEffect, whenever your setting a state which is defined outside its inner scope, i.e its dependent on previous state, encapsulate it inside callback expecially if your adding an event listner linked to that function 

  # States are asynchronous in nature. 
  # if you want to access a previous state from within useEffect 
  # then use a callback method method taking argument as the old value and return new value.

  # Its not a react 18 feature, it has been a part of react 17 as well, however rn react 18 is making it more strict to not use it. 


  #for instance you cannot do this 
  # const id = window.addEventListener('mousemove',  const fn = (e) => {
  #     console.log(e)
  #     console.log('tracking', e.x, e.y)
  #     #we added event listener at mounting time 
  #     #on mouse moving, it tracks the coordinates at x and y 
  #      setMouse({
  #        x: e.x,
  #        y: e.y
  #      })

  #   })

  const id = window.addEventListener('mousemove', fn)

  #cleanup function is executed when component is unmounted 
  #when it gets unmounted we want to remove all of this listeners 
  return () => {
    window.removeEventListener('mousemove', id)
    console.log('removed')
  }
}, [])

  
 return (
   <div>
   # setInterval executes after some interval 
    <h3>x:{mouse.x} || y:{mouse.y}</h3>
   </div>
 )
 }

export default Position;
```
### some JS code examples 
```bash
function fn(){
  # everything inside is lexically scoped, binded to the function fn
  let a = 10 
  function fn2(){
    console.log(a)
  }

  return fn2
}

const a = fn() #function fn2() { console.log(a) }
console.log(a)
a()            #10
```
















