import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster } from '../util';
import { useNavigate } from 'react-router-dom';

import SingleTrackCard from '../components/SingleTrackCard';
import AlbumInfo from '../components/AlbumInfo';

const Album = () => {
  // use useParams to retreive the albumId from path parameter
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [albumDetails, setAlbumDetails] = useState({});
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    //exceptional handling
    (async _ => {
      try {
        //GET Album Detail
        // Returns detailed information about a given album, including its tracks.

        // /v2.2/albums/Alb.54719066
        const response = await napster.get(`/albums/${albumId}`);
        setAlbumDetails(response.data?.albums[0]);

        
        // GET Album Tracks
        // Returns a list of the specified album's tracks.

        // /v2.2/albums/Alb.54719066/tracks
        const tracks_response = await napster.get(`/albums/${albumId}/tracks`);
        setTrackList(tracks_response.data.tracks);
      } catch (e) {
        navigate("/404");
      }
    })();
  }, [albumId, navigate])
  return (
    <>
     {/*   
     <div className='h-52 z-0 -mt-4' style={{ backgroundImage: `url('${trackImage(albumId)}')`,
       filter: "blur(5px)", backgroundSize: "cover" }}></div>
      <div className="container mx-auto px-4 -mt-52 z-2 relative">
        <img src={trackImage(albumId)} className="p-8" alt='album'/>

        <p className='text-3xl font-semibold -mt-7 text-center'>{albumDetails.name}</p>
        <Link to={`/artist/${albumDetails.contributingArtists?.primaryArtist}`}>
          <p className='text-lg underline hover:text-blue-700 font-semibold text-center'>{albumDetails.artistName}</p>
        </Link>
        <p className='text-center mt-4'>Released X years ago{albumDetails.originallyReleased}</p>
        <div className='flex justify-center mt-4 gap-2'>{albumDetails.tags?.map((singleTag, idx) => {
          return (
            // tags displayed in chips via map 
            <div key={idx} className="bg-gray-300 rounded-full px-2 pb-1 inline border-blue-300 border-2">
              <span>{singleTag}</span>
            </div>
          )
        })}</div> */}
      <AlbumInfo albumDetails={albumDetails} />
      <div className="container mx-auto px-4 relative">

        <div className='py-4'>
          <div className='border-gray-400 w-full border-t'></div>
        </div>

        <div className='flex gap-2 flex-wrap justify-evenly items-center'>
          
          {/* songs in the album */}
          {trackList.map((singleTrack, idx) => {
            return (
              <SingleTrackCard key={idx} index={idx + 1} trackDetail={singleTrack} />
            );
          })}
        </div>

        <p className='text-center mt-5 text-xs text-gray-400'>{albumDetails.copyright}</p>
      </div>
    </>
  )
}

export default Album;