import React, { Component } from 'react'
import './App.css'
import bruh from './audioclips/1.mp3'
import {Howl, Howler} from 'howler'

const audioclips = [
  //object inside array 
  {sound: bruh, label:'lofi music for studying'}
]
export default class App extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play()
  }

  RenderButtonSound = ()=> {
    return audioclips.map((soundobj, index) => {
      return (
        <button key={index} onClick={() => this.SoundPlay(soundobj.sound)}>
        {soundobj.label}
        </button>
    )
    })
  }
  render() {
    Howler.volume(1.0)
    return (
      <div>
        {this.RenderButtonSound()}
      </div>
    )
  }
}

