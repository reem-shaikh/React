import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import axios from 'axios'
import NewsList from './NewsList'

const Home = () => {
  const [data, setData] = useState([])

  //https://newsapi.org/v2/everything?q=bitcoin&apiKey=d1153fbda8cf401cae9daafbf5b4232b
  //process.env.REACT_APP_NEWS_KEY
  useEffect(() => {
    (async() => {
      axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
      .then((response) => {
        console.log("mwow",response)
        setData(response.data.articles) 
      })
      .catch((error) => console.log(error))
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