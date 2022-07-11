import { Link } from 'react-router-dom';
import { getAlbumImage } from '../util';
import Image from './Image';

const AlbumList = ({ albumList, loadMore, showLoadMore, horizontal=true }) => {
  return (
    <>
      <div className={`flex gap-3 mt-4 w-full overflow-x-auto ${horizontal ? "flex-nowrap" : "flex-wrap justify-evenly"}`}>
        {albumList.map((singleAlbum, idx) => {
          if (singleAlbum === -1) {
            return (
              <div className="flex-none w-32 animate-pulse rounded-lg" key={idx} >
                <div className="bg-slate-700 h-28 w-28"></div>
                <div className="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
              </div>
            );
          } else {
            return (
              <div className='outerWrap border-4 border-transparent hover:border-blue-400'>
              <div className='cardsWrap'>
              <Link to={`/album/${singleAlbum.id}`} key={idx}>
                <div className="flex-none w-32 cursor-pointer">
                  <Image className='h-32 w-32 rounded-lg' src={getAlbumImage(singleAlbum.id)} />
                  <p className=" m-0 text-sm text-white pl-1">{singleAlbum.name}</p>
                </div>
              </Link>
              </div>
              </div>
            );
          }
        })}
      </div>
    </>
  )
}

export default AlbumList