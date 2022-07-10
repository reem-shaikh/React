import React, { useEffect, useState } from 'react'
import { napster } from '../util';
import ArtistList from './ArtistList';
import '../App.scss'

const TopArtists = () => {
  const [artistList, setArtistList] = useState(Array(20).fill(-1));
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/artists/top');
      setArtistList(response.data.artists);
    })();
  }, []);
  return (
    <div className='top'>
      <h2>Top Artists</h2>
      <ArtistList list={artistList} />
    </div>
  )
}

export default TopArtists