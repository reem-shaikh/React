import React, { useEffect, useState } from 'react'
import { napster, trackImage } from '../util'
import { useDispatch } from 'react-redux';
import { changePlayingTrack } from '../slice';
import '../App.css'

const TopSongs = () => {
  const [trackList, setTrackList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async _ => {
    // GET Top Tracks for an Artist
    // Returns an optionally paged list of the artist's most popular songs, sorted descendingly by listening activity.

    // /v2.2/artists/Art.28463069/tracks/top
      const response = await napster.get('/tracks/top');
      console.log(response)
      setTrackList(response.data.tracks);
    })();
  }, []);

  return (
    <>
      <h3 className="text-2xl">Top Songs</h3>
      {/*  we added overflow scroll and w-full with flex no wrap to allign all the scroll items  */}
      {/* in order to integrate scroll without scrollbar, we add overflow-auto here and in App.css we added webkit:scrollbar {display: none;} */}
      <div className="flex flex-nowrap gap-4 mt-4 w-full overflow-x-auto">
        {trackList.map((singleTrack, idx) => {
          return (
            // we need to get the album image for the track
            //we'll need to set the id to retreive the specific track image
            <div class="flex-none w-32 cursor-pointer" key={idx} onClick={_ => dispatch(changePlayingTrack(singleTrack.id))}>
            {/* we passed the id of the image as an argument to trackImage */}
            <img class="border-4 border-transparent hover:border-blue-400" src={trackImage(singleTrack.albumId)} />
            <p class="m-0 text-sm text-gray-600 pl-1">{singleTrack.name}</p>
          </div>
          );
        })}

        {/* we imported flexbox nd grid https://tailwindcss.com/docs/flex#initial*/}
        {/* <div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div>
        <div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div><div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div><div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div><div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div> */}
      </div>
    </>
  )
}


export default TopSongs