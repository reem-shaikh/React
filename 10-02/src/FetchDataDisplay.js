import React, { Component } from "react";
import "./App.css";
import ChildTwo from "./ChildTwo";

class FetchDataDisplay extends Component {
  // url - https://reqres.in/api/users

  constructor() {
    super();
    this.state = {
      data: [{}],
      //data is array of objects 
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });
    // const x = [
    //   {
    //     name: "abhishek",
    //     age: 25,
    //   },
    //   {
    //     name: "geek",
    //     age: 30,
    //   },
    //   {
    //     name: "geekster",
    //     age: 20,
    //   },
    // ];

    // x.map((element) => {
    //   console.log(element);
    // });

    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((result) => {
        //whenever we update the state over here, it will show up when the data is fetched (takes some time) and component will re-render
        console.log(result.data)
        this.setState({ data: result.data });
      });
  };

  displaySomething = () => {
    return <div>bye</div>;
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          hellooo
          <button onClick={this.fetchData}>fetch data</button>
          {/* printing array of objects inside JSX */}
          {this.state.data.map((geekster, index) => {
            console.log("geekster", geekster);
            return (
              <ChildTwo
                key={index}
                first_name={geekster.first_name}
                email={geekster.email}
                img={geekster.avatar}
                last_name={geekster.last_name}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default FetchDataDisplay;