import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
function App() {
    const url = 'https://reqres.in/api/users?page=2'

    //apidata[] will be populated afyer json is fetched 
    const [apiData, setApiData] = useState([])
   
    //when component is mounted 
    useEffect(() => {

    fetch(url)
      .then((r) => r.json())
      .then((result) => {
        console.log(result.data)
        setApiData(result.data)
        // everytime state is updated, component will be re-rendered 
      })

     }, [])
     console.log('apidata', apiData)

     return (
       <div className='App'>
         <header className='App-header'>
           {/* map is a higher order function 
              takes another function as an input  */}
            fetching data 
            {
            apiData.map((item) => {
              //array apiData is a collection of objects 
              //when we map over ti we get each of its object one at a time 
              console.log('item', item)

              return (
                <div key={item.id}>
                  {/* // each child should have a unique key  */}
                  <img src={item.avatar}/>
                  <p>{item.first_name}</p>
                  <p>{item.Last_name}</p>
                  <p>{item.email}</p>
                  <hr/>
                </div>
              )
            })
            }
          </header>
       </div>
     )
}

export default App;
