import React, { useEffect, useState } from 'react'
import { trackImage, napster } from '../util';
import { useDispatch } from 'react-redux';
import { changePlayingTrack } from '../slice';
import '../App.css'
const TopAlbums = () => {
  const [albumList, setAlbumList] = useState([]);
  const dispatch = useDispatch();
  //add a useEffect to fetch data from top albums endpoint 
  useEffect(() => {
    (async _ => {
      //GET Top Albums
      // Returns a list of the top albums across Napster, updated daily. Optionally paged.

      // /v2.2/albums/top
      const response = await napster.get('/albums/top');
      setAlbumList(response.data.albums);
    })();
  }, []);
  return (
    <>
      <h3 class="text-2xl">Top Albums</h3>
      <div class="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {albumList.map((singleAlbum, idx) => {
          return (
            <div class="flex-none w-32 cursor-pointer" key={idx}
            onClick={_ => dispatch(changePlayingTrack(singleAlbum.id))}>
              <img className='border-4 border-transparent hover:border-blue-400' src={trackImage(singleAlbum.id)} />
              <p class="m-0 text-sm text-gray-600 pl-1">{singleAlbum.name}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default TopAlbums