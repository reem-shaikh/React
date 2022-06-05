import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import Popup from './components/Popup';
import {Button} from 'react-bootstrap'
import axios from 'axios'

// were opening the popup in app.js 
//were closing the popup in popup.js 
function App() {
  console.log(process.env.REACT_APP_API_KEY)

  // all the states will be inside App.js 
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [imageList, setImageList] = useState([])

  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  //https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}
  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data))
  }, [])

  return (
    <div className="App">
     <Header/>

     {/* this button is from  static back drop */}
     {/* <Button variant="primary" onClick={openModal}>
        Launch static backdrop modal
      </Button> */}

     <ImageList cardClick={openModal}
                images={imageList}   />
     {/* when you click on the button only then it will close, if you click anywhere out in the website it wont work */}
     <Popup showModal={showModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
