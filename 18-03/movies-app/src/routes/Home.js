import React from 'react'
import Container from '@mui/material/Container'
import SearchList from '../components/SesrchList'

const Home = () => {
  return (
    <>
        <Container maxWidth="xl" sx={{mt: 4}}>
            <SearchList />
        </Container>
    </>
  )
}

export default Home
