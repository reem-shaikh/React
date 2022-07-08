import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster } from '../util';
import SongList from './SongList';
import AlbumList from './AlbumList'

const AlbumTab = () => {
  const { query } = useParams();
  const [trackList, setTrackList] = useState(Array(20).fill(-1));
  const [offset, setOffset] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if(query === undefined || query === "") {
      setTrackList([]);
      return;
    }
    setTrackList(Array(20).fill(-1));
    setOffset(0);
    (async _ => {
      try {
        // Returns an array of typed results by substring.
        // /v2.2/search?query=weezer&per_type_limit=5&offset=5
        const response = await napster.get(`/search?query=${query}&type=album&per_type_limit=20&offset=0`);
        // setTrackList(response.data.tracks);
        setTrackList(response.data.search.data.albums);
        setOffset(20);
        setShowMore(true);
      } catch(e) {
        setTrackList([]);
      }
    })();
  }, [query]);

  const loadMore = () => {
    const oldState = trackList;
    setTrackList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      // Returns an array of typed results by substring.
      // /v2.2/search?query=weezer&per_type_limit=5&offset=5
      const response = await napster.get(`/search?query=${query}&type=album&per_type_limit=20&offset=${offset}`);
      if (response.data.search.data.albums === 0) {
        setShowMore(false);
      }
      setTrackList([...oldState, ...response.data.search.data.albums]);
      setOffset(e => e + 20);
    })();
  }

  return (
    <>
      {/* <SongList list={trackList} loadMore={loadMore} showLoadMore={showMore}  showtrackImages={true}  /> */}

      {/* were rendering AlbumTab and ArtistTab in their own individual components unlike TrackTab which goes from SongList -> SingleTrackCard.js  */}
      <AlbumList albumList={trackList} horizontal={false} loadMore={loadMore} showLoadMore={showMore}  />
    </>
  )
}

export default AlbumTab