import React from 'react'
import TopAlbums from '../components/TopAlbums'
import TopArtists from '../components/TopArtists'
import TopSongs from '../components/TopSongs'

const Home = () => {
  return (
    <>
      <div className="container pl-2">
        <br />
        <TopSongs />
        <br />
        <TopAlbums />
        <br />
        <TopArtists />
      </div>
    </>
  )
}

export default Home