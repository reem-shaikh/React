import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import axios from 'axios'
import NewsList from './NewsList'

const Home = () => {
  const [data, setData] = useState([])

  //https://newsapi.org/v2/everything?q=bitcoin&apiKey=d1153fbda8cf401cae9daafbf5b4232b
  //process.env.REACT_APP_NEWS_KEY

//#### Note: 
// Initially I used the newsapi to render the json content, but after deployment i was getting this getting this error: Failed to load resource: the server responded with a status of 426 (). I read online to find a fix, but figured out, that they only support their API's on localhost and they removed their support from hosting services. Thats why I created a seperate JSON file with the same endpoint data and fetched it via axios. 
  useEffect(() => {
    (async() => {
      // axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
      axios.get(`/sampleOutput.json`)
      .then((response) => {
        console.log("mwow",response)
        setData(response.data.articles) 
      })
      .catch((error) => console.log(error))

      // sampleOutput.map(response => {
      //   setData(response.data.articles) 
      //   return(
      //   // console.log("mwow",response)
      //   <div>response</div>
      //   )
      // })

    })();
  }, []);


  return (
    <>
      <Container fixed>
        <NewsList data={data}/>
      </Container>
    </>
  )
}

export default Home