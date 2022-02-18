class App extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "",
        job: "",
        phone:"",
        email:"",
        password:"",
      };
    }
  
    postData = (someUser) => {
      // const newUser = {
      //   name: "abhishek",
      //   job: "placement of students",
      // };
      axios.post("https://reqres.in/api/users", {someUser}).then((res) => {
        console.log('res',res);
        console.log('data',res.data.data)
      });
    };
  
    submitForm = (e) => {
      e.preventDefault();
      const user = {
        name: this.state.name,
        job: this.state.job,
        phone: this.state.phone,
        email: this.state.email, 
        password: this.state.password,
      };
  
      //convert js object to json string
      this.postData(user);
  
      // axios.post("https://reqres.in/api/users", { user }).then((res) => {
      //   console.log(res);
      // });
  
      console.log("submitting form ", this.state.name, this.state.job, this.state.phone, this.state.email, this.state.password);
    };
  
    changeName = (event) => {
      this.setState((prev) => {
        return {
          name: event.target.value,
        };
      });
      // console.log(event.target.value);
    };
  
    changeJob = (event) => {
      this.setState((prev) => {
        return {
          job: event.target.value,
        };
      });
      // console.log(event.target.value);
    };

    changePhone = (event) => {
      this.setState((prev) => {
        return {
          phone: event.target.value,
        };
      });
      // console.log(event.target.value);
    };

    changeEmail = (event) => {
      this.setState((prev) => {
        return {
          email: event.target.value,
        };
      });
      // console.log(event.target.value);
    };

    changePassword = (event) => {
      this.setState((prev) => {
        return {
          password: event.target.value,
        };
      });
      // console.log(event.target.value);
    };
  
    render() {
      // console.log(this.state);
      return (
    <div className="app-container">
      <section className="Form my-4 mx-5">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-lg-5">
                    <img src="1.jpg" className="img-fluid" alt="" />                
                </div>  
            <div className="col-lg-7 px-5 pt-5">
                <h1 className="font-weight-bold py-3">Hello!</h1>
                <h4>Create an account</h4>
                <form onSubmit={this.submitForm}>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="name" placeholder="Enter Full Name"   
                                value={this.state.name}
                                onChange={this.changeName}className="form-control my-3 p-2"  required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="job" placeholder="Enter Job"   
                                value={this.state.job}
                                onChange={this.changeJob}className="form-control my-3 p-2"  required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="tel" name="phone" placeholder="Enter your phone number"                                
                                value={this.state.phone}
                                onChange={this.changePhone} className="form-control my-3 p-2"  required />
                            </div>
                        </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <input type="email" placeholder="email address" 
                            value={this.state.email}
                            onChange={this.changeEmail}
                            className="form-control my-3 p-2" required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-7">
                            <input type="password" placeholder="******"
                            value={this.state.password}
                            onChange={this.changePassword}
                            className="form-control my-3 p-2" required/>
                        </div>
                    </div>
                    <div className="form-row my-3">
                        <div className="col-lg-7">
                           <button type="submit" className="btn1 mb-2 mt-3" onClick={this.postData} >Create My Account</button>
                        </div>
                    </div>

                    <a href="#">Read the Terms & Conditions</a>
                    <p >Already have an account? <a href="#">Login Here</a></p> 
                </form>
            </div> 
            {/* col ends */}

          </div>
          {/* row ends */}
        </div>
        {/* container ends */}

    </section>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));