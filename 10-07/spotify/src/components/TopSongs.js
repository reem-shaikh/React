import React, { useEffect, useState } from 'react'
import { napster, getAlbumImage } from '../util'
import { useDispatch } from 'react-redux';
import { changePlayingTrack } from '../slice';
import Image from './Image';
import '../App.scss'

const TopSongs = () => {
  const dispatch = useDispatch();
  const [trackList, setTrackList] = useState(Array(20).fill(-1));
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/tracks/top');
      setTrackList(response.data.tracks);
    })();
  }, []);

    return (
    <div className='top'>
    <h1>Top songs</h1>
    <div className="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto margin-left-10">
       {trackList.map((singleTrack, idx) => {
          if (singleTrack === -1) {
            return (
              <div className="flex-none w-32 animate-pulse rounded-lg" key={idx}>
                <div className="bg-slate-700 h-28 w-28"></div>
                <div className="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
              </div>
            );
          } else {
            return (
              <div className='outerWrap border-4 border-transparent hover:border-blue-400'>
                <div className='cardsWrap'>
              <div className="flex-none w-32 cursor-pointer" key={idx} onClick={_ => dispatch(changePlayingTrack(singleTrack.id))}>
                <Image className=" w-32 h-32  rounded-lg" src={getAlbumImage(singleTrack.albumId)} />
                <p className="m-0 text-sm text-white pl-1">{singleTrack.name}</p>
              </div>
              </div>
              </div>
            );
          }
        })}
     </div>
      </div>
    );
  }
 

export default TopSongs;