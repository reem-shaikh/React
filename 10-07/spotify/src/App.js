import React from 'react'
import Nav from '../../spotify/src/components/Nav'
import Main from '../../spotify/src/components/Main'
import Player from './components/Player'
import './App.scss'

const App = () => {

  return (
    <>
          <div className="outerWrap">
            <div className="App">
              {/* we integrated CssBaseline API to change the background color on toggle */}
              <Nav />
              <Main />
            </div>
            <Player />
          </div>
   
    </>
  )
}

export default App
