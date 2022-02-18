// form - you fill data and submit 
// we'll create a form and submit the data using POST request 
class App extends React.Component {
  constructor() {
      super()
      this.state = {
          firstName: "", 
          job: "",
      }
  }

  // instead of returning an object we created 
  // we want to insert data from form and send it to API 
  postData = (someUser) => {
    // create this user in post request
    //   const newUser = {
    //     name: 'geekster',
    //     job: 'placement of students',

    //   }

      //were telling axios to go to this endpoint (RequestUrl:https://reqres.in/api/users )and hand it this object newUser 
      axios.post("https://reqres.in/api/users", {someUser}).then((res) => console.log(res))
      //axios.post takes 2 arguments 

    //res returns in console:
    
  }

  submitForm = (e) => {
    e.preventDefault()
    console.log('submitting form', this.state.firstName, this.state.job)

    //instead of a constant object, were assigning the state value 
      const user = {
        name: this.state.name,
        job: this.state.job,

      };
  }

  // its calling axios.post with the data were passing to the form 
  postData(user)
  
  changeName = (event) => {
    // we add this setstate to change the value of input field as we type it in it 
    // if we dont add setstate then it will set the default set value 
    // this.state = {
    //     firstName: ""
    // }
    this.setState(prev => {
        return {
            firstName: event.target.value
        }
    })
      console.log('event',event.target.value )
  }

  changeJob = (event) => {
//updating job property of state using setstate
//whatever we type is updated in input field of job 
    this.setState(prev => {
        return {
            job: event.target.value
        }
    })
      console.log('event',event.target.value )
  }


  render() {
    return (
      <div className='app-container'>
         <div className="alert alert-primary" role="alert">
            this is bootstrap
         </div>
         {/* 
         post: take data, put in post request and send data to backend and telling backend to do something with the data 
         we create a post on social media and click on post 
         for example, 
         - save the data in the database and display it to whomever view it  */}
         <form onSubmit={this.submitForm}>
             <div>
                 <label>name</label>
                 <input placeholder="Name" value={this.state.firstName} onChange={this.changeName} />
                {/* whenver we type anything in input field it will call onChange function */}
                {/* 
                controlled component - components where we can control the value and onchange  */}
             </div>

             <div>
                 <label>job</label>
                 <input placeholder="job" value={this.state.job} onChange={this.changeJob} />
             </div>
             <button type="submit">submit</button>
         </form>
         <button onClick={this.postData}>post some data</button>
      </div>
    )
  }
}

// export default App 
ReactDOM.render(<App/>, document.getElementById('root'))