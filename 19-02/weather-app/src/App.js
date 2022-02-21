import React, { useState, Component } from "react";
import styled from "styled-components";
import Axios from "axios";
import audio1 from "./audioclips/1.mp3"
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

//importing howelr as a dependency 
import {Howl, Howler} from 'howler';


//implementing styled components 
export const WeatherIcons = {
  "01d": "icons/sunny.svg",
  "01n": "icons/night.svg",
  "02d": "icons/day.svg",
  "02n": "icons/cloudy-night.svg",
  "03d": "icons/cloudy.svg",
  "03n": "icons/cloudy.svg",
  "04d": "icons/perfect-day.svg",
  "04n": "icons/cloudy-night.svg",
  "09d": "icons/rain.svg",
  "09n": "icons/rain-night.svg",
  "10d": "icons/rain.svg",
  "10n": "icons/rain-night.svg",
  "11d": "icons/storm.svg",
  "11n": "icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: rgba(0,0,0,0.5);
  font-family: Montserrat;
`;

//font-family: 'Montserrat', sans-serif;

const AppLabel = styled.span`
  color: white;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

//The square bracket is used to get the name of the event target and set the value to the state.
const audioclips = [
  {sound: audio1, label: 'audio1'}
]

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  //function responsible for fetching weather from the API 
  const fetchWeather = async (e) => {
    e.preventDefault();

    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fbe27d003759d3f42d9e8fad4e0080b7`,
    );
    //https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=fbe27d003759d3f42d9e8fad4e0080b7
    console.log(response)
    updateWeather(response.data);
    //info updated into weather state, this weather state is passed as a prop in the weatherInfoComponent 
};

const Soundplay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play()
  }
  Howler.volume(1.0)

const RenderButtonSound = () => {
    return audioclips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => this.Soundplay(soundObj.sound)}>
        {soundObj.label}
        </button>
      )

    })
  }


  return (
    <Container>
      
      <AppLabel>React Weather App</AppLabel>
      {/* if weather and city is available for the city user entered in the API, then show weather component otherwise show city component , if user enters a city that is not in the API then show the city component*/}
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;