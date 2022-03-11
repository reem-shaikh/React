import React, {useState, useEffect} from 'react'
import './App.css';
import DisplayCount from './DisplayCount';

function App() {

  // useState used to mimick state from class based components 
  // array destructuring 
  const [count, setCount] = useState(0)
  const [name, setName] = useState('geek')
  const [DisplayCount, setDisplayCount] = useState()

  // useEffect used to mimic lifecycle methods
  // it takes 2 arguments
  // 1st arg- callback function 
  // 2nd arg- array of dependencies (optional)

  const print = ()=> {
    console.log('hello')
  }

  useEffect(print, [name])
  // like componentDidMount

  // instead of this function and useeffect we can pass it in one statement 
  // useEffect(() => {
  //   console.log('hello')
  // }, [])


  // its called a depenedency array because print is dependent on the name 
  // whenever value of name is changed print callback function is run

  //how do you replicate componentdidmount in functional component 
  // you pass empty dependency array inside useffect 
  // useEffect(print,[])

  //how do you replicate componentDidUpdate in functional component 
  //pass states inside dependency array inside useEffect 
  //useEffect(print, [name, count])

  //how do you replicate componentDidUnmount in functional component 
  // useEffect(()=> {
  //   console.log(hello)

  //   return () => {
  //     console.log('bye')
  //   }
  // }, [])




  const increase = () => {
    // setCount is the new value of count function
    setCount(count + 1)
    setName('reem')

  }

  const decrease = () => {
    // setCount is the new value of count function
    setCount(count - 1)

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useState</h1>
        {/* passing sttae as props */}
        {/* <DisplayCount name={name} count={count}></DisplayCount> */}

        {/* changing value of parent component from child component */}
        <DisplayCount increase={increase} decrease={decrease}/>


      </header>
    </div>
  );
}

export default App;
