import React from 'react'
import './App.css'
import Navbar from '../../carousel/src/components/Navbar'
import Main from '../../carousel/src/components/Main'
import Carousel from './Carousel'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Carousel/>
    </div>
  )
}
