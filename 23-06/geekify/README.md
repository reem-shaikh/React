## Audio App using Tailwind 
### Register on Napster 
> API KEY 
```bash
OGQxNjNkMmQtYTNiMS00NTllLTkyMDktMmFlMTEzMTMxNzA1
```
> API SECRET
```bash
OGE3ZDNlODYtYzViYi00MWY4LTk0YzYtZjYzZDg1N2RiZDJi
```
> Create .env, install env-cmd, configure the package.json 

### Tips:
- [Use this tool to code compar](https://url-decode.com/tool/code-compare)
- alt + shift + control on any component tag, it takes you to that component 
- alt + click repeatedly to highlights all the places then you can change multiple tags at the same time. 

### Features 
- Home
- Search
- artist
- album 
- favorite
- top songs and playlists 
- categories 

### Packages installed 
- Tailwind CSS 
- axios 
- env-cmd 
- redux

## Wireframe 
- we'll try mobile-first approach (mobile compatible website) 
```bash
previously, we used to do desktop first approach, then we used to design for mobile approach
```
> Home page 
![](oop.PNG)
- menu on the lhs (navigationBar.js)
- scroll for top songs scroll (TopSongs.js)
- scroll for top artists 
- scroll for playlists 
- popup for volume  
- bottom player (Player.js)

> Playlist page - list of songs, artist on top
![](ooip.PNG)

#### The Code 
> App.js 
```bash
import NavigationBar from "./components/NavigationBar";
import Player from "./components/Player";
import Home from "./pages/Home";

const App = _ => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <NavigationBar />
        <div className="container mx-auto py-4">
          <Home />
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;
```
> NavigationBar.js 
- Navigate to [Tailwind UI](https://tailwindui.com/components), were going to be integrating the free component provisions from the components provided here and customising them to suit our needs. we choose Navbars and copy the code for it 
- we commented the dropdown from the user icon
- we added a usestate to toggle the menu bar when the website is mobile sized, by simply defining a usestate, and on click of the icon on the lhs that appears on mobile screen, were toggling the state, which was initially set to false, and within the menu itms div we set the display to hidden when showMenu is false, when the icon is clicked its toggled to true and the display icon is then then to true, for which we set display:block. 
```bash
import {useState} from 'react'
// we imported navigation bar from tailwind 

const NavigationBar = () => {
  ✅const [showMenu, setShowMenu] = useState(false);
//   const [showrightMenu, setShowrightMenu] = useState(false);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              {/* <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> */}
              
              ✅<button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={_ => setShowMenu(e => !e)}>

                <span className="sr-only">Open main menu</span>
                {/*
                  Icon when menu is closed.

                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block"
                */}
                <svg className="block h-6 w-6" xmlns="http:{//www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/*
                  Icon when menu is open.

                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                */}
                <svg className="hidden h-6 w-6" xmlns="http:{//www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* Heroicon name: outline/bell */}
                <svg className="h-6 w-6" xmlns="http:{//www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile dropdown */}
              {/* <div className="ml-3 relative">
                <div>
                  <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"  onClick={_ => setShowrightMenu(e => !e)}>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>

              <div className={`sm:hidden ${showrightMenu ? "block" : "hidden"}`} >\
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
               </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* ✅we wanted it to be hidden and only when showMenu is false when button is clicked so we set the code using useState toggle 
      */}
        <div className={`sm:hidden ${showMenu ? "block" : "hidden"}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar
```
> util.js 
within this file we configured the API client, and exported both of them as named exports.
- Navigate to (https://developer.prod.napster.com/api/v2.2#images-apis)
```bash
import axios from "axios";

const napster = axios.create({
  baseURL: 'https://api.napster.com/v2.2/',
  timeout: 10000,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
});

const trackImage = trackId => {
  return `https://api.napster.com/imageserver/v2/albums/${trackId}/images/500x500.jpg`;
  
    //get track or album image 
    //https://api.napster.com/imageserver/v2/albums/{album_id}/images/{size}.{extension}
}

export {napster, trackImage};
```
> TopSongs.js 
Right below home, this component is rendered, which is technically responsible for fetching all the top tracks from the API endpoint storing it in trackList state. mapping over this state and extracting each element inside it. the final image id lies in this path: data -> tracks -> album id
![](ppl.PNG)

- so we retreive it, and pass it through an api instance of trackImage which is technically responsible for getting the image for the particular track. 
```bash
import React, { useEffect, useState } from 'react'
import { napster, trackImage } from '../util'

const TopSongs = () => {
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    (async _ => {
    //Top Tracks
    //Returns a list of the top tracks across Rhapsody, updated daily.
      const response = await napster.get('/tracks/top');
      console.log(response)
      setTrackList(response.data.tracks);
    })();
  }, []);

  return (
    <>
      <h3 className="text-2xl">Top Songs</h3>
      {/*  we added overflow scroll and w-full with flex no wrap to allign all the scroll items  */}
      <div className="flex flex-nowrap gap-4 mt-4 w-full overflow-x-scroll">
        {trackList.map((singleTrack, idx) => {
          return (
            // we need to get the album image for the track
            //we'll need to set the id to retreive the specific track image
            <div className="flex-none w-32" key={idx}>
              <img src={trackImage(singleTrack.albumId)} />
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
```
> Player.js 
This component is set in the bottom, we imported navigation bar and set the style property to bottom, we also cleaned up the code and added song image at the lhs, song name in the middle and the range on the top of the player.js 
```bash
import { useState } from 'react'

const Player = () => {
  return (
    <>
    {/* we added another navigation bar component to the bottom  */}
    {/* we cleaned up all the nav content, we added classes to fix it to the bottom and fixed the width to 100% (w-full) */}
      <nav className=" fixed bottom-0 w-full">

        {/* we added input type range to integrate the player range scroll  */}
        <input type="range" className="w-full -mb-4" />
        <div className='bg-gray-800'>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* div 1 */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <img className="h-full p-2" src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
              </div>
              {/* div 2 */}
              <div className="flex-1 flex items-center justify-center">
                <h3 className="text-white">Song Name</h3>
              </div>
              {/* div 3 */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              </div>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Player
```
[part 1](https://magical-marzipan-12d715.netlify.app/)

### Integrating redux 
![](redux.PNG)
- we installed redux and reduxjs/toolkit
- we created slice.js with state playingtrack
- integrate the store at index.js 
- in TopSongs.js and TopAlbums.js we dispatch actions which changes current playing song based on the change in the id.  the image we clicked on stored in the PlayingTrack state from redux store
- the song for the particular id is retreieved through useselector

#### For all the components given below we add the same functionality
were using Player.js as a proxy to send data to the control that is hidden
> Player.js 
![](player.PNG)
- To retreive the track details of a particular track we imported an API JSON data in an object response 
- then we used the response object to further target the object where the previewURL lies which contains the mp3 song for the targetted track id 
- Within the player component were maintaining multiple states, main state which handles the player range is audioPlayer which targets all the audio properties via useRef which is used to target the DOM elements 
- furthermore we retreived the stored track id from the store using useSelector()
- were maintaing a track state which is responsible for targetting the endpoint to retreive the id of the track in a useEffect within which we also set the location of the audioPlayer to point at the previewURL object. 
- furthermore, were toggling the play/pause button and setting ternary conditions to perform when boolean value is true then set the isPlaying state to true 
- we also created a mutation observer, which is technically a function which observes changes of object over the DOM and were setting the play() and pause() attribute on conditional rendering within a useEffect which would get rendered only when isPlaying has any changes. we also set the audioPlayer state current property 
- We maintain another couple functions for volume range, one for setting volumea and the other which gets rendered on useEffect change, here we set the set the audioPlayer state current property
- We maintain another couple functions for changing the currentTime, in one function were setting the current time and in the other were setting the audioPlayer state current property
- Note that: were binding the audio controls property and the player range this is called two way binding. 
- we've set the onTimeUpdate event handler which invoked the function responsible for setting the state of th current time, while the input range is responsible for invoking the function responsible for setting the audioPlayer current property 

> components 
![](comp.PNG)
- In all these components were acheiving the same: dispatching actions
- were retreiving a value from the API endpoint and updating the state, mapping over that state and rendering all the divs containing images within it, when the user clicks on the div, were going to dispatch actions. 
- when we dispatch actions say in this case its changePlayingTrac(singleTrack.id) it technically redirects us to slice.js where the action and the reducer is defined and within here were simply storing the track.id within the payload, and the reducers defined here is simply compiled within createSlice() and within index.js were creating an instance of the configureStore() within which were passing our reducer and through the Porvider component tags were passing the store object. 

> util.js 
- within util.js were creating utlities that required for our app, were confuguring the API client over here
- Album image(Top artist song) within TopSongs.js 
- Artist Image(Top artists) within TopArtists.js 
```bash
import axios from "axios";

const napster = axios.create({
  baseURL: 'https://api.napster.com/v2.2/',
  timeout: 10000,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
});

//get track or album image 
//https://api.napster.com/imageserver/v2/albums/{album_id}/images/{size}.{extension}
const trackImage = trackId => {
  return `https://api.napster.com/imageserver/v2/albums/${trackId}/images/500x500.jpg`;
  //Album image(Top artist song)
  //itll technically show the album image the song belongs to
}

//For fetching the Artist Image
// we add an api client in util.js for getting artist image 
// GET Artist Images
// Returns a list of licensed images for an artist.
///v2.2/artists/Art.28463069/images

//we can add size/extension of the image at the end 
///v2.2/artists/Art.28463069/images/{size}.{extension}
const getArtistImage = artistId => {
  return `https://api.napster.com/imageserver/v2/artists/${artistId}/images/150x100.jpg`;
  //Artist Image(Top artists)
}

export {napster, trackImage, getArtistImage};
```





