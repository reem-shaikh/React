import React, { useEffect, useState } from 'react'
import { napster } from '../util';
import '../App.scss'
import AlbumList from './AlbumList';

const TopAlbums = () => {
  const [albumList, setAlbumList] = useState(Array(20).fill(-1));
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/albums/top');
      setAlbumList(response.data.albums);
    })();
  }, []);
  return (
    <div className='top'>
      <h2>Top Albums</h2>
      <AlbumList albumList={albumList} />
    </div>
  )
}

export default TopAlbums