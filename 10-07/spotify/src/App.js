import React from 'react'
import Nav from '../../spotify/src/components/Nav'
import Main from '../../spotify/src/components/Main'
import Player from "./components/Player";
import './App.scss'

const App = () => {
  return (
    <div className="outerWrap">
      {/* app has a height set to 100vh-90vh to accomodate the music controls at the bottom */}
      <div className="App">
        <Nav />
        <Main />
      </div>
        <Player />

      {/* this is the bottom player range */}
      {/* <div className="musicControls">music controls</div> */}
    </div>
  )
}

export default App
