import React, { useEffect, useState } from 'react'
import { napster, trackImage } from '../util'
import { useDispatch } from 'react-redux';
import { changePlayingTrack } from '../slice';
// import '../App.css'

const TopSongs = () => {
  //const [trackList, setTrackList] = useState([]);

  //were filling the entire array with -1 initially with a size of 20
  const [trackList, setTrackList] = useState(Array(20).fill(-1));
  const dispatch = useDispatch();

  useEffect(() => {
    (async _ => {
    // GET Top Tracks for an Artist
    // Returns an optionally paged list of the artist's most popular songs, sorted descendingly by listening activity.

    // /v2.2/artists/Art.28463069/tracks/top
      const response = await napster.get('/tracks/top');
      console.log(response)
      setTrackList(response.data.artists);
    })();
  }, []);

  return (
    <>
      <h3 className="text-2xl">Top Artist Songs</h3>
      {/*  we added overflow scroll and w-full with flex no wrap to allign all the scroll items  */}
      {/* in order to integrate scroll without scrollbar, we add overflow-auto here and in App.css we added webkit:scrollbar {display: none;} */}
      <div className="flex flex-nowrap gap-4 mt-4 w-full overflow-x-auto">
        {trackList.map((singleTrack, idx) => {
          //when singleTrack is -1, it means the data is not yet retreived from the API endpoint, thats when were rendering a pulsate effect instead
         if (singleTrack === -1) {
          return (
            <div className="flex-none w-32 animate-pulse rounded-lg" key={idx}>
              <div className="bg-slate-700 h-28 w-28"></div>
              <div className="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
            </div>
          );
        } else {
          return (
             // we need to get the album image for the track
            //we'll need to set the id to retreive the specific track image

            //https://api.napster.com/v2.2/artists/Art.28463069/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4
            <div className="flex-none w-32 cursor-pointer" key={idx} onClick={_ => dispatch(changePlayingTrack(singleTrack.id))}>
              {/* we passed the id of the image as an argument to trackImage */}
              <img className="border-4 border-transparent hover:border-blue-400 rounded-lg" src={trackImage(singleTrack.albumId)} alt='track'/>
              {/* <img className="border-4 border-transparent hover:border-blue-400 rounded-lg" src={getArtistImage(singleTrack.id)} alt='track'/> */}
              <p className="m-0 text-sm text-gray-600 pl-1">{singleTrack.name}</p>
            </div>
          );
        }
        })
        }
      </div>
    </>
  )
}


export default TopSongs