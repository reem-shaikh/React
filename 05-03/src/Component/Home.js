import React, { Component } from "react";
import Name from "./Name";
import Details from "./Details";

class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <Name />
        </div>

        <div className="row">
          <Details />
        </div>
      </div>
    );
  }
}

export default Home;