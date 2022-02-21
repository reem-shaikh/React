import React from "react";
import styled from "styled-components";
import {WeatherIcons} from "../App.js";

export const WeatherInfoIcons = {
    sunset: "icons/temp.svg",
    sunrise: "icons/temp.svg",
    humidity: "icons/humidity.svg",
    wind: "icons/wind.svg",
    pressure: "icons/pressure.svg",
};


const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
  color: white;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
  color: white;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
  color: white;
`;

const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.3);
  color: white;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: white;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  color: white;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
  color: white;
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    //making name and value dyanamic 

    return (
        <InfoContainer>
          {/* src=/icon/temp.svg */}
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
              {/* 19:47 |  sunrise */}
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

/*
const WeatherInfoIcons = {
    sunset: "icons/temp.svg",
    sunrise: "icons/temp.svg",
    humidity: "icons/humidity.svg",
    wind: "icons/wind.svg",
    pressure: "icons/pressure.svg",
};

*/

const WeatherComponent = (props) => {
  //weather passed as props from parent component App.js
    const {weather} = props;

    //if it contains d its a day, if it contains n its night 
    const isDay = weather?.weather[0].icon?.includes('d')

    //creating a new Date object and returning the current time 
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <WeatherContainer>
                <Condition>
                  {/* 30 C | CLoudy */}
                  {/* celcius = kelvin - 273 */}
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
                {/* <WeatherIcon src="/icons/perfect-day.svg"></WeatherIcon> */}
            </WeatherContainer>

            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>

            <WeatherInfoContainer>
              {/* if its day provide the sunset PM time 
              else provide sunrise time */}
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>

                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;