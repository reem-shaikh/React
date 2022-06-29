import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayingTrack } from '../slice';
import playingAnimation from '../playing-animation.gif';

const SingleTrackCard = ({trackDetail, index}) => {
  const dispatch = useDispatch();
  //card          - parent 
    //play button - child 

  //due to event bubbling, when child div is clicked its shown in this order: child -> parent.

  //when user clicks on the card we want the music to play 
  const isPlaying = useSelector(state => state.playingTrack === trackDetail.id);


  const playSong = () => {
    dispatch(changePlayingTrack(trackDetail.id));
  }

  return (
    <>
    {/*
        sm:w-5/12 	width: 41.666667%;
        md:w-1/4    width: 25%;
        lg:w-1/5    width: 20%;
    */}

    {/* were placing the event handler in the parent div, because when we click on the parent div, the changes will automatically propogate to the child div */}
      <div onClick={playSong} className={`w-full sm:w-5/12 md:w-1/4 lg:w-1/5 border-2 flex items-center hover:bg-blue-100 hover:border-blue-700 ${isPlaying ? "border-blue-700 bg-blue-100" : "border-gray-700"} rounded-md p-3 cursor-pointer`}>
        <span>{index}.</span>
        <span className='ml-2'>{trackDetail.name}</span>
        {/* when isPlaying state is true, we want to display the equalizer gif file (transparent sound wave animation small) other show the play icon */}
        {/* we downloaded the equalizer and run it through a background gif remove background and paste it in the src folder*/}
        {isPlaying ? (
          <img src={playingAnimation} alt="Playing animation" className="h-12 ml-auto"/>
        ) : (
          <span className='text-4xl ml-auto justify-self-end -mt-1 cursor-pointer hover:text-blue-500'><FontAwesomeIcon icon={faCirclePlay} /></span>
        )}
      </div>
    </>
  )
}

export default SingleTrackCard