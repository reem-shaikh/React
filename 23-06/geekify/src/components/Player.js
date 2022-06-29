import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { trackImage, napster } from '../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//we added fontAwesome icons for the play and pause icon [](https://fontawesome.com/docs/web/use-with/react/)
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


//GET Track Detail
// Returns detailed information about a track or tracks, including artist and album and genre information.
// /v2.2/tracks/tra.51565284

// https://api.napster.com/v2.2/tracks/tra.5156528?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4

//we copies the json data from this endpoint and placed in inside the response object 

//we'll need to target the previewURL property which is in this path response.tracks[0]
const response = { "meta": { "totalCount": null, "returnedCount": 1 }, "tracks": [{ "type": "track", "id": "tra.5156528", "index": 7, "disc": 1, "href": "https://api.napster.com/v2.2/tracks/tra.5156528", "playbackSeconds": 258, "isExplicit": false, "isStreamable": false, "isAvailableInHiRes": false, "name": "Say It Ain't So", "isrc": "USIR10400084", "shortcut": "weezer/weezer-blue-album-deluxe-edition/say-it-aint-so", "amg": "6907998", "blurbs": [], "artistId": "art.954", "artistName": "Weezer", "albumName": "Weezer (Blue Album) (Deluxe Edition)", "formats": [{ "type": "format", "bitrate": 320, "name": "AAC", "sampleBits": 16, "sampleRate": 44100 }, { "type": "format", "bitrate": 192, "name": "AAC", "sampleBits": 16, "sampleRate": 44100 }, { "type": "format", "bitrate": 128, "name": "MP3", "sampleBits": 16, "sampleRate": 44100 }, { "type": "format", "bitrate": 64, "name": "AAC PLUS", "sampleBits": 16, "sampleRate": 44100 }], "losslessFormats": [{ "type": "format", "bitrate": 44100, "name": "FLAC", "sampleBits": 16, "sampleRate": 44100 }], "albumId": "alb.5153820", "isAvailableInAtmos": false, "contributors": { "primaryArtist": "art.954" }, "links": { "artists": { "ids": ["art.954"], "href": "https://api.napster.com/v2.2/artists/art.954" }, "albums": { "ids": ["alb.5153820"], "href": "https://api.napster.com/v2.2/albums/alb.5153820" }, "genres": { "ids": ["g.1053", "g.1050", "g.5"], "href": "https://api.napster.com/v2.2/genres/g.1053,g.1050,g.5" }, "tags": { "ids": ["tag.152196498"], "href": "https://api.napster.com/v2.2/tags/tag.152196498" } }, "previewURL": "https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3" }] };

  //we create a track object to target previewURL which contains the mp3 song file 
const track = response.tracks[0];


const Player = () => {
  //this state specifies whether the song is playing or not (true or false)4
  //were toggling the play/pause button via this state 
  const [isPlaying, setIsPlaying] = useState(false);

  //where is the current knob in the player range? that is the current time 
  const [currentTime, setCurrentTime] = useState(0);

  //create a state for volume, which will track the current volume via a range
  //the volume property takes value from 0 to 1
  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume
  const [volume, setVolume] = useState(0.25);

  ////were setting the current location of the music mp3 file in the song/track object 
  const audioPlayer = useRef();
  const [track, setTrack] = useState({});
  const trackId = useSelector(state => state.playingTrack);

  useEffect(() => {
       // GET Track Detail
      // Returns detailed information about a track or tracks, including artist and album and genre information.

      // /v2.2/tracks/tra.5156528
    (async _ => {
      //if there's nothing in the trackId, when page is initially loaded return false 
      if(trackId === "") {
        return false;
      }

      // assume we clicked on a track from TopSongs.js and its already playing, and we clicked on it again, now when we reclick on it, it doesnt play. why? because the state is not updated

      //so everytime this useEffect runs on trackId change we'll want to set the playing of the previous track to false 
      setIsPlaying(false);

      const response = await napster.get(`/tracks/${trackId}`);
      setTrack(response.data?.tracks[0]);
      console.log(response.data?.tracks[0]);
      //were retreiving the location of the mp3 file for the specific track id passed 
      audioPlayer.current.src = response.data?.tracks[0]?.previewURL;
      //setting the song playing option at Player.js as true 
      setIsPlaying(true);
    })();
  }, [trackId]);

//toggling the isPlaying state when user clicks on it 
  const togglePlayPause = () => {
    setIsPlaying(e => !e);
  }

  
  //we create a mutation observer: mutation observer observes change of object in the dom - over here were observing it using ref 
  //run this useEffect whenever any change to isPlaying state occurs 
  useEffect(() => {
    if(isPlaying) {
      //when isPlaying state is true, then play the song, by targetting it via useRef() current property 
      audioPlayer.current.play();
    } else {
      //when isPlaying state is false, then pause the song, by targetting audioPlayer via useRef() current property 
      audioPlayer.current.pause();
    }
  }, [isPlaying]);
 //This is for 2 way binding (works both in controls and player.js), in the TogglePlayPause function we changed the state, in this useEffect were integrating the play/pause changes in player range as well.

  // currentTime property specifies the current playback time in seconds.
  //were updating the currentTime state when audio tag is triggered
  const playerCurrentTimeUpdate = e => {
    const currentTime = e.target.currentTime;
    setCurrentTime(currentTime);
  }

  const changeCurrentTime = e => {
     //To change the currentTime, were extracting its present value 
    const currentTime = e.target.value;
     //setting its present value 
    setCurrentTime(currentTime);
    //specifying the currentTime to the audioPlayer, so both our controls and player range are synced while the music is playing 
    audioPlayer.current.currentTime = currentTime;
  }

   //were setting the volume by targetting the current value of volume passed which can be from 0 to 1 
  const changeVolume = e => {
    const volume = e.target.value;
    setVolume(volume);
  }
//everytime any change occurs in the volume state, run this useEffect
  //here were setting the volume property by targetting audioPlayer via useRef() current property 
  useEffect(() => {
    audioPlayer.current.volume = volume;
  }, [volume])
  //This is for 2 way binding (works both in controls and player.js), in the changeVolume function we changed the state, in this useEffect were integrating the volume changes in player range as well.

  return (
    <>
      {/* we added another navigation bar component to the bottom  */}
    {/* we cleaned up all the nav content, we added classes to fix it to the bottom and fixed the width to 100% (w-full) */}
      <footer className=" fixed bottom-0 w-full">
         {/* were using Player.js as a proxy to send data to the control that is hidden */}
         {/* <audio ref={audioPlayer} onTimeUpdate={playerCurrentTimeUpdate}></audio> */}

           {/* while we were building the logic, we kept controls visible, but now we removed it from the audio tag */}
        <audio controls ref={audioPlayer} onTimeUpdate={playerCurrentTimeUpdate}>
        </audio>
         {/* while playercurrenttimeupdate() is responsible for setting the current time
         changecurrenttime() is responsible for changing the current time as the range changes */}
        
        {/* we added input type range to integrate the player range scroll  */}
        {/* when the value of the range is changed, were passing the currentTime to the function changeCurrentTime */}
        <input type="range" className="w-full -mb-4" value={currentTime} max={30} onChange={changeCurrentTime} />
        <div className='bg-gray-800'>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
               {/* div 1 */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                  {/* <img className="h-full p-2" src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' /> */}

                {/* when the user clicks on the image its also setting dyanamic image in the player.js */}
                <img className="h-full p-2" src={trackImage(track?.albumId)} alt="Album Cover" />
                  {/* <h3 class="text-white">Song Name</h3> */}

                  {/* when user clicks on the name its also setting dyanamic name in player.js */}
                <h3 class="text-white">{track?.name}</h3>
              </div>
              {/* div 2 */}
              {/* when the isPlaying state is true, song is paused
              when its false, song is played
              
              iniitally the state is false (music paused), when user clicks on the button, its toggled to true (music played)*/}
              <div className="flex-1 flex items-center justify-center">
                <button className='text-white z-50' onClick={togglePlayPause}>
                  {/* {isPlaying ? "Pause" : "Play"} */}

                  {/* instead of printing pause and play on toggle, we print these icons instead */}
                
                {/* when isPlaying state is true, it means that the audio is playing and thats why wemust display the Pause icon to the user, giving user the control to pause the song */}
                  {isPlaying ? (
                    <FontAwesomeIcon  icon={faPause} />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} />
                  )}
                </button>
              </div>
               {/* div 3 */}
              {/* were setting the volume range here, since max value of volume property is 1 were specifying that, were also specifying that we want the music volume to incrrement everytime user scrolls 0.01 step in the range */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <input className='w-24' type="range" value={volume} onChange={changeVolume} max={1} step={0.01} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Player