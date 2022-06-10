import Header from "./components/Header";
import ImageList from "./components/ImageList";
import Popup from "./components/Popup";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

import Detail from './components/Detail'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';

// # were opening the popup in app.js 
// #were closing the popup in popup.js 
function App() {
  console.log(process.env.REACT_APP_API_KEY)
  // #All the states will be in App.JS

  // ✅#commenting this state 
  // #state which is responsible for setting the display of the popup 
  // #if its false, it means popup is hidden 
  // #if its true, it means popup shows up over your main website 
  // #const [showModal, setShowModal] = useState(false);

  // #state which is responsible for storing an array of images which is fetched from unsplash API 
  const [imageList, setImageList] = useState([]);

  // ✅#commenting this state 
  // #state which is responsible for setting the data inside the popup 
  // #const [modalData, setModalData] = useState({});

  // #state which logs in the data from the search bar that the user types
  const [searchKey, setSearchKey] = useState("");

  // #when searchKey has any changes in it, this useEffect which takes searckey as a dependency is called 
  // #inside this were making a call to the API endpoint to fetch the JSON data and update the imageList state with that data 
   useEffect(() => {
    if(searchKey !== "") {
      axios.get(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageList(response.data.results));
    }
  }, [searchKey])

  // ✅#since were not implementing the popup anymore, we commented these two functions
  // #const closeModal = () => setShowModal(false);

  // # const openModal = id => {
  // #   const selected_image = imageList.find(single_elem => single_elem.id === id);
  // #   setModalData(selected_image);
  // #   setShowModal(true); 
  // # }

  // ✅#were commenting this useEffect since well be implementing infinite scroll using react-infinite-scroll

  // #when the app is mounted for the first time an API call is made to fetch the images and update the state that is responsible for storing all the images fetched inside the state
  // #note that: it only updates to about 20 images 
  // # useEffect(() => {
  // #   axios.get(`https://api.unsplash.com/photos/?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
  // #   .then(response => setImageList(response.data));
  // # }, []);


  const loadFunc = (e) => {
    console.log(e);
    axios.get(`https://api.unsplash.com/photos/?page=${e}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageList(old => [...old, ...response.data]));
  }

  return (
    <>
      <Header setSearchKey={setSearchKey} />

      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<ImageList images={imageList} />} />
    
          <Route path="/image/:id" element={<Detail />} />
        </Routes>
      </InfiniteScroll>

      <Footer />
    </>
  );
}


export default App;