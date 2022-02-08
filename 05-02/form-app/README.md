### Form using 1 component 
> Multipleinputs.js 
```bash 
import React, {useState} from 'react';
//usestate import 

export const MultipleInputs = () => {

  //we created a state variable for every input field 
  //these two are useState variables 
  const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  //stored in empty array 
  const [records,setRecords] = useState([]);

  const handleInput = (e) => {
       console.log('event', e)
       const name = e.target.name;
       console.log('name', name)

       //getting individual values the user entered 
       const value= e.target.value;
       console.log('value', value)

       // targetting all input fields using spread operating
       setuserRegistration({...userRegistration,
       [name]: value
       //inisde [] refers to dyanamic data based on whatever input field yur targetting

       //were getting data (complete value) that the user entered from here 
      })

  }


//store the data in object/array that the user entered over here 
const handleSubmit = (e) => {
  e.preventDefault();

  //creating new object to store the data 
  //it sets a new id for each input field we entered 
  const newRecord = {...userRegistration, id:new Date().getTime().toString() }
  console.log('new record', newRecord)

  console.log(records)
  //inside records state variable store newRecord (i.e everything we entered inside the input field)
  setRecords([...records, newRecord])

  setuserRegistration({username:"", email:"", phone:
  "", password:""})
}


return (
  <>
  <div className="container">
        <div className="title">
            Registration
        </div>
        <form action="" onSubmit={handleSubmit}>
            <div className="user-details">
                <div className="input-box">
                    <span className="details">
                      <label htmlFor="username">Full Name</label>
                    </span>
                    <input type="text" name="username" 
                    value={userRegistration.username}
                    onChange={handleInput}
                    id="username"
                    placeholder="enter your name" 
                    autoComplete="on"
                    required />
                </div>

                <div className="input-box">
                    <span className="details">
                         <label htmlFor="email">e-mail</label>
                    </span>
                    <input type="email" name="email" 
                    value={userRegistration.email}
                    onChange={handleInput}
                    id="email"
                    autoComplete="on"
                    placeholder="enter your email" required
                    />
                </div>

                <div className="input-box">
                    <span className="details">
                        <label htmlFor="phone">Phone</label>
                    </span>
                    <input type="tel" name="phone"
                    value={userRegistration.phone}
                    onChange={handleInput}
                    id="phone"
                    autoComplete="on"
                    placeholder="enter your phone number" required />
                </div>

                <div className="input-box">
                    <span className="details">
                      <label htmlFor="password">Password</label>
                    </span>
                    <input type="password" name="password"
                    value={userRegistration.password}
                    onChange={handleInput}
                    id="password"
                    autoComplete="on"
                    placeholder="enter your name" required />
                </div>
        
            </div>
            {/* user details ends */}
            <button type="submit" className="button" >submit</button>
          </form>      
    </div>
    <div className='column'>
    {
    records.map((currentElem) => {
      return (
        <div className='showDataStyle'>
          {/* u = {currentElem.username}
          e = {currentElem.email}
          ph = {currentElem.phone}
          pass= {currentElem.password}  */}

        <p>{currentElem.username}</p>
        <p>{currentElem.email}</p>
        <p>{currentElem.phone}</p>
        <p>{currentElem.password}</p>   
       </div>
      );
    })
  }
    </div>

     </>
  );
};

export default MultipleInputs;
```
> App.js 
```bash 
import logo from './logo.svg';
import './App.css';
//importing our component
import MultipleInputs from './component/MultipleInputs.js';


const App = () => {
  return (
     <>
     <MultipleInputs></MultipleInputs>
     </>
  );
}

export default App;
```