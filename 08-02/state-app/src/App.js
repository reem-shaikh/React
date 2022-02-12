import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Folder from "./component/Folder";
import File from "./component/File";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   finalData: {}
    // }
  }

  render() {
    return (
      <div className="App">
        {/* 
        <i className="blue folder icon"></i>
        <i className="caret down icon"></i> 
        <i className="caret right icon"></i>
        <i className="blue folder icon"></i>
        /> 

        */}
        <div className="container">
          {/* 
          <Folder name="src" />
          <Folder name="node_modules" />
          <Folder name="public" /> 
          <File name="music.mp3" /> 
          */}

{/* react component 'folder' with props defined in App component can have children defined within  and these children can be passed as props to the folder 'component'*/}
          {/* 
          <Folder name="public">
            <div>
              <p>
                njansjan
                <h1>hello</h1>
                <h1>bye</h1>
              </p>
            </div> 
          </Folder> 
          
          */}

          <Folder name="src">
            {/*
            every folder component has its own state which is false by default 
            */}
            <Folder name="virat">
              <Folder name="namika">
                  <File name="ZNMD.mp4" />
                  <File name="dhoni.jpeg" />
                  <File name="sehwag.png" />
              </Folder>
              <Folder name="dhoni" /></Folder>
            <File name="ZNMD.mp4" />
            <File name="dhoni.jpeg" />
            <File name="sehwag.png" />
          </Folder>
        </div>
      </div>
    );
  }
}

export default App;