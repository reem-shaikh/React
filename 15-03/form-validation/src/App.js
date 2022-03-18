//import logo from './logo.svg';
import {useState, useRef, react} from 'react';
import './components/FormInput.css';
import FormInput from './components/FormInput';

function App() {
  //instead of creating a seperate state for each label, were initializing all the object of the input field, inside the current value of state, which is an object which takes key-value pairs
   const [values, setValues] = useState({
     username: "",
     email:"",
     password:"",
     confirmPassword:"",
   })

   //array of objects 
    const inputs = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "birthday",
        type: "date",
        placeholder: "Birthday",
        label: "Birthday",
      },
      {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `[A-Za-z0-9]{3,16}$`,
        required: true,
      },
      {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        label: "Confirm Password",
        pattern: values.password,
        required: true,
      },
    ];
  
   
  console.log('re-rendered')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    //were going to be targetting name attribute through this data object
    
    //this line of code gets each value from the input field based on their name attribute
    //it returns the final object with all the key-value pairs we entered in the form fields 
    console.log('object', Object.fromEntries(data.entries()))
  }

  //everytime this function is called
  //in the already existing values[], were making a change in the value attribute
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  
  console.log('values', values)
  return (
    <div className="App">
      <header className="app">
   
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>
          {inputs.map((input) => (
          //initially it gets the placeholder from the values name attribute, onchange values are logged into the input field 
          <FormInput key={input.id} {...input} value={values[inputs.name]} onChange={onChange}/>
          ))}

          {/* 
          instead of creating a seperate input for all these elements, were running the map function and passing props to the child component 
          */}
          {/* 
          <FormInput name='username' placeholder='username' refer={usernameRef}/>
          <FormInput name='email' placeholder='email'/>
          <FormInput name='confirmPassword' placeholder='password'/>
          <FormInput name='confirmPassword' placeholder='password'/> 
          */}
          <button>submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
