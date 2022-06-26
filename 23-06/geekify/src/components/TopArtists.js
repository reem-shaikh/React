import React, { useEffect, useState } from 'react'
import { napster, getArtistImage } from '../util';
import { useDispatch } from 'react-redux';
import { changePlayingTrack } from '../slice';
import '../App.css'

// copy content from TopSongs and paste in this component 
const TopArtists = () => {
  const [artistList, setArtistList] = useState([]);
  const dispatch = useDispatch();
  //add a useEffect to fetch data from top artists endpoint 
  useEffect(() => {
    (async _ => {
      // GET Top Artists
      // Returns an optionally paged list of the top artists across all of Napster, driven by listening activity.
      // /v2.2/artists/top
      const response = await napster.get('/artists/top');
      setArtistList(response.data.artists);
    })();
  }, []);
  return (
    <>
      <h3 class="text-2xl">Top Artists</h3>
      <div class="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {artistList.map((singleArtist, idx) => {
          console.log(singleArtist)

          return (
            <div class="flex-none w-32 cursor-pointer" key={idx} onClick={_ => dispatch(changePlayingTrack(singleArtist.id))}>
              <img class="border-4 border-transparent hover:border-blue-400" src={getArtistImage(singleArtist.id)} />
              <p class="m-0 text-sm text-gray-600 pl-1">{singleArtist.name}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default TopArtists