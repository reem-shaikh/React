import React, { Component } from 'react'
//rce 

import CityInfo from "./CityInfo"
import Search from "./Search"

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            cityName: "",
            cityinfo: {},
        }
    }
    #API_KEY = "25a5503889854a94fd093c6b8b7f7b97"
    API_URL= "https://api.openweathermap.org/data/2.5/weather"

    //function to fetch weather information 
    fetchWeather = async(searchCityName){
        //string templating - use variable inside string
        const res = await fetch(`${API_URL}?q=Mumbai&appid=${this.#API_KEY}`)

        const data = await res.json()
        console.log(data)
    }

    cityNameChanged = (newCityName) => {
        console.log('new city name')
        this.setState({
            cityName: newCityName
        })
        this.fetchWeather(newCityName)
    }

  render() {
    return (
    <div>
      <Heading />
      {/* passing function as prop
      callback based approach: passing data from child component to parent component */}
      <Search onCityNameChanged={this.cityNameChanged} />
      <CityInfo />
    </div>
    )
  }
}

export default App