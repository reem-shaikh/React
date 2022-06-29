import React, { useEffect, useState } from 'react'
import { napster, getArtistImage } from '../util';
import '../App.css'

// copy content from TopSongs and paste in this component 
const TopArtists = () => {
  //const [artistList, setArtistList] = useState([]);
  const [artistList, setArtistList] = useState(Array(20).fill(-1));

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
            if (singleArtist === -1) {
              return (
                <div class="flex-none w-32 animate-pulse rounded-lg" key={idx}>
                  <div class="bg-slate-700 h-20 w-28"></div>
                  <div class="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
                </div>
              );
            } else {
              return (
                //https://api.napster.com/v2.2/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4
                <div class="flex-none w-32 cursor-pointer" key={idx} >
                  <img class="border-4 border-transparent hover:border-blue-400 rounded-lg" src={getArtistImage(singleArtist.id)} alt='artist' />
                  <p class="m-0 text-sm text-gray-600 pl-1">{singleArtist.name}</p>
                </div>
              );
            }
        })}
      </div>
    </>
  )
}

export default TopArtists