import React, { useEffect, useState } from 'react'
import { napster } from '../util';
import '../App.css'
// import { Link } from 'react-router-dom';
import HorizontalAlbumList from './HorizontalAlbumList';

const TopAlbums = () => {
  //const [albumList, setAlbumList] = useState([]);
  const [albumList, setAlbumList] = useState(Array(20).fill(-1));

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
      <h3 className="text-2xl">Top Albums</h3>
      <HorizontalAlbumList albumList={albumList} />
      {/* <div className="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {albumList.map((singleAlbum, idx) => {
            if (singleAlbum === -1) {
              return (
                <div className="flex-none w-32 animate-pulse rounded-lg" key={idx}>
                  <div className="bg-slate-700 h-28 w-28"></div>
                  <div className="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
                </div>
              );
            } else {
              return (
                <Link to={`/album/${singleAlbum.id}`}>
                <div className="flex-none w-32 cursor-pointer" key={idx}>
                  <img className='border-4 border-transparent hover:border-blue-400 rounded-lg' src={trackImage(singleAlbum.id)} />
                  <p className="m-0 text-sm text-gray-600 pl-1">{singleAlbum.name}</p>
                </div>
              </Link>
              );
            }
        })}
      </div> */}
   
    </>
  )
}

export default TopAlbums