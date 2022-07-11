import React from 'react';
import { Link } from 'react-router-dom';
import { getArtistImage } from '../util';
import Image from './Image';

const ArtistList = ({ list, loadMore, showLoadMore, horizontal = true }) => {
  return (
    <div className={`flex gap-3 mt-4 w-full overflow-x-auto ${horizontal ? "flex-nowrap" : "flex-wrap justify-evenly"}`}>
      {list.map((singleArtist, idx) => {
        if (singleArtist === -1) {
          return (
            <div className="flex-none w-32 animate-pulse rounded-lg" key={idx}>
              <div className="bg-slate-700 h-20 w-28"></div>
              <div className="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
            </div>
          );
        } else {
          return (
            <div className='border-4 border-transparent hover:border-blue-400'>
            <div>
            <Link to={`/artist/${singleArtist.id}`} key={idx}>
              <div className="flex-none w-32 cursor-pointer">
                <Image className="w-32 h-38  rounded-lg" src={getArtistImage(singleArtist.id)} />
                <p className="m-0 text-sm text-white pl-1">{singleArtist.name}</p>
              </div>
            </Link>
            </div>
            </div>
          );
        }
      })}
    </div>
  )
}

export default ArtistList;