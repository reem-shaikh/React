import Header from "./components/Header";
import ImageList from "./components/ImageList";
import Popup from "./components/Popup";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

// were opening the popup in app.js 
//were closing the popup in popup.js 
function App() {
  console.log(process.env.REACT_APP_API_KEY)
  //All the states will be in App.JS

  //state which is responsible for setting the display of the popup 
  //if its false, it means popup is hidden 
  //if its true, it means popup shows up over your main website 
  const [showModal, setShowModal] = useState(false);

  //state which is responsible for storing an array of images which is fetched from unsplash API 
  const [imageList, setImageList] = useState([]);

  //state which is responsible for setting the data inside the popup 
  const [modalData, setModalData] = useState({});

  //state which logs in the data from the search bar that the user types
  const [searchKey, setSearchKey] = useState("");

  //when searchKey has any changes in it, this useEffect which takes searckey as a dependency is called 
  //inside this were making a call to the API endpoint to fetch the JSON data and update the imageList state with that data 
   useEffect(() => {
    if(searchKey !== "") {
      axios.get(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageList(response.data.results));
    }
  }, [searchKey])

  //when closeModal is triggered this state which is responsible for displaying the popup on the website it switched to false 
  const closeModal = () => setShowModal(false);

  //when openModal is triggered 
  //the state which is responsible for displaying popup on the website is set to true 
  //the image inside the popup is updated to match the image of the image we clicked
  //how do we acheive that? 
  //well, there are a couple ways, 
  const openModal = id => {
    //we can make an API call to fetch the id of the image that we want to show up inside the popup 
    //axios.get(`https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_API_KEY}`)
    // .then(response => setImageList(response.data))

    //or we can fetch the data based on this given condition
    //when the id that is passed matches the id present inside imageList then display it 
    const selected_image = imageList.find(single_elem => single_elem.id === id);
    setModalData(selected_image);
    setShowModal(true); 
  }

  //when the app is mounted for the first time an API call is made to fetch the images and update the state that is responsible for storing all the images fetched inside the state
  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data));
  }, []);

  return (
    <>
    {/* were passing these states as props */}
      <Header setSearchKey={setSearchKey} />

      {/* when an image is clicked, openModal is invoked, which is responsible for setting the popup display to true and setting the image same as the image it was clicked on */}
      <ImageList cardClick={openModal} images={imageList} />

      {/* when Popup is clicked closeModal is invoked, since within popup we'll have a button which is responsible for setting the popup display to false */}
      <Popup showModal={showModal} closeModal={closeModal} modalData={modalData} />

    </>
  );
}

// app.js (parent)
// header.js (child)
// ImageList.js (child)
// Popup.js (child)

export default App;