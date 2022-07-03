import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArtistInfo from '../components/ArtistInfo';
import HorizontalAlbumList from '../components/HorizontalAlbumList';
import SongList from '../components/SongList';
import { napster } from '../util';

const Artist = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();
  
  const [albumList, setAlbumList] = useState(Array(20).fill(-1));
  const [offsetAlbum, setOffsetAlbum] = useState(0);
  //iniitally load More button is shown 
  const [showLoadMoreAlbum, setShowLoadMoreAlbum] = useState(true);

  const [tracksList, setTrackList] = useState(Array(20).fill(-1));
  const [offsetTrack, setOffsetTrack] = useState(0);
  const [showLoadMoreTrack, setShowLoadMoreTrack] = useState(true);

  const [artistDetails, setArtistDetails] = useState({});

  useEffect(() => {
    setAlbumList(Array(20).fill(-1));
    setTrackList(Array(20).fill(-1));
    (async _ => {
      // GET Artist Detail
      // Returns a given artist's name, ID and primary genre.

      // /v2.2/artists/Art.28463069
      try {
        const response = await napster.get(`/artists/${artistId}`);
        const data = response.data.artists[0];
        if (data  === undefined) {
          throw "Data is undefined";
        }

        setArtistDetails(data);
        console.log(data);

        // GET Top Albums for an Artist
        // Returns an optionally paged list of the artist's most popular albums, sorted descendingly by listening activity.
        // /v2.2/artists/Art.28463069/albums/top?limit=5
        const album_response = await napster.get(`/artists/${artistId}/albums/top?limit=20`);
        setAlbumList(album_response.data.albums);

        // GET Top Tracks for an Artist
        // Returns an optionally paged list of the artist's most popular songs, sorted descendingly by listening activity.

        // /v2.2/artists/Art.28463069/tracks/top?limit=10
        const tracks_response = await napster.get(`artists/${artistId}/tracks/top?limit=20`);
        setTrackList(tracks_response.data.tracks);
        setOffsetTrack(20);
      } catch (e) {
        navigate('/404');
      }
    })();
  }, [artistId, navigate]);

  const loadMoreAlbums = () => {
    const oldState = albumList;
    //increement the new 20 changes in albumList state 
    setAlbumList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      const album_response = await napster.get(`/artists/${artistId}/albums/top?limit=20&offset=${offsetAlbum}`);
      if (album_response.data.albums.length  === 0) {
        //if there is no element in album_response.data.albums then set the showloadMoreAlbum state to false which means dont load 
        setShowLoadMoreAlbum(false);
      }
      //were deep copying the oldstate and adding the loaded items appended to it 
      setAlbumList([...oldState, ...album_response.data.albums]);
      //ncrease value of elements in the state by 20 
      setOffsetAlbum(e => e + 20);
    })();
  }

  const loadMoreTracks = () => {
    const oldState = tracksList;
    setTrackList(e => [...e, ...(Array(20).fill(-1))]);
    (async _ => {
      const tracks_response = await napster.get(`/artists/${artistId}/tracks/top?limit=20&offset=${offsetTrack}`);
      if (tracks_response.data.tracks.length  === 0) {
        setShowLoadMoreTrack(false);
      }
      setTrackList([...oldState, ...tracks_response.data.tracks]);
      setOffsetTrack(e => e + 20);
    })();
  }

  return (
    <>
      <ArtistInfo artistDetails={artistDetails} />
      <div className="container mx-auto px-4 relative">
        <p className='text-2xl font-semibold mt-4'>Top Albums</p>
        <HorizontalAlbumList albumList={albumList} loadMore={loadMoreAlbums} showLoadMore={showLoadMoreAlbum} />

        <p className='text-2xl font-semibold mt-6 mb-3'>Top Tracks</p>
        <SongList list={tracksList} loadMore={loadMoreTracks} showLoadMore={showLoadMoreTrack} />
      </div>

    </>
  )
}

export default Artist