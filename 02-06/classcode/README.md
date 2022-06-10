### The working of the Code 
https://62a342a192fe183b30a12c7d--helpful-dasik-3ef1d1.netlify.app/

```bash
Further Details about every step of the code implementation is inside the readme of 02/06/app1
```
- Whenever the user clicks on the image, it loads a popup which is rendered on top of the webpage, we've integrated the popup via react-bootstrap and we've integrated the API calls to the API endpoint via axios library. 

- Also we have acheived prop-drilling from App.js to imageList.js to imageCard.js, the main function responsible for opening the popup is defined inside Appjs and the function responsible for closing the popup on clicking on the close button is defined inside ImageCard.js 

- Inside the ImageList.js were mapping over every image present inside the array ImageList and returning the image and the onClick function as props to ImageCard.js 

- While the App.js is passing props to the rest of the components, i.e Header, ImageList and ImageCard. 

- We've also integrated safe API key integration practices where were defining our API keys inside the .env files. This file wont be pushed onto Git so our API keys are safe. 

> App.js 
```bash
import Header from "./components/Header";
import ImageList from "./components/ImageList";
import Popup from "./components/Popup";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  #All the states will be in App.JS

  #state which is responsible for setting the display of the popup 
  #if its false, it means popup is hidden 
  #if its true, it means popup shows up over your main website 
  const [showModal, setShowModal] = useState(false);

  #state which is responsible for storing an array of images which is fetched from unsplash API 
  const [imageList, setImageList] = useState([]);

  #state which is responsible for setting the data inside the popup 
  const [modalData, setModalData] = useState({});

  #state which logs in the data from the search bar that the user types
  const [searchKey, setSearchKey] = useState("");

  #when searchKey has any changes in it, this useEffect which takes searckey as a dependency is called 
  #inside this were making a call to the API endpoint to fetch the JSON data and update the imageList state with that data 
   useEffect(() => {
    if(searchKey !== "") {
      axios.get(`https:#api.unsplash.com/search/photos/?query=${searchKey}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageList(response.data.results));
    }
  }, [searchKey])

  #when closeModal is triggered this state which is responsible for displaying the popup on the website it switched to false 
  const closeModal = () => setShowModal(false);

  #when openModal is triggered 
  #the state which is responsible for displaying popup on the website is set to true 
  #the image inside the popup is updated to match the image of the image we clicked
  #how do we acheive that? 
  #well, there are a couple ways, 
  const openModal = id => {
    #we can make an API call to fetch the id of the image that we want to show up inside the popup 
    #axios.get(`https:#api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_API_KEY}`)
    # .then(response => setImageList(response.data))

    #or we can fetch the data based on this given condition
    #when the id that is passed matches the id present inside imageList then display it 
    const selected_image = imageList.find(single_elem => single_elem.id === id);
    setModalData(selected_image);
    setShowModal(true); 
  }

  #when the app is mounted for the first time an API call is made to fetch the images and update the state that is responsible for storing all the images fetched inside the state
  useEffect(() => {
    axios.get(`https:#api.unsplash.com/photos/?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data));
  }, []);

  return (
    <>
    # were passing these states as props 
      <Header setSearchKey={setSearchKey} />

      # when an image is clicked, openModal is invoked, which is responsible for setting the popup display to true and setting the image same as the image it was clicked on 
      <ImageList cardClick={openModal} images={imageList} />

      # when Popup is clicked closeModal is invoked, since within popup we'll have a button which is responsible for setting the popup display to false 
      <Popup showModal={showModal} closeModal={closeModal} modalData={modalData} />

    </>
  );
}

# app.js (parent)
# header.js (child)
# ImageList.js (child)
# Popup.js (child)

export default App;
```
> ImageList.js  
```bash
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';
#we imported masonry to allign our grid properly 
import Masonry from "react-masonry-css";
#there are a certain steps to implement masonry 
#this article explains it all 
#https:#thewebdev.info/2020/09/04/add-a-masonry-grid-to-a-react-app-with-the-react-masonry-css-library/


#1. we installed it: npm install react-masonry-css
#2. we added masonry-styles inside App.css
#3. import this object 
#4. define everything inside <Masonry></Masonry> tag
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const ImageList = (props) => {
  #retreived props from App.js 
  return (
    <div style={{marginLeft: '20%'}}>
      <Container className='mt-4'>
        <Row>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              # were mapping over every image inside imageList state and were returning onClick function as a prop further to ImageCard.js -> You see how were implementing prop drilling over here 
              
              were also sending the single image that is extracted from imageList state as a prop to ImageCard.js
            {props.images.map((single_image, idx) => {
              return <Col key={idx}>
                  <ImageCard 
                     click={props.cardClick} 
                     image_details={single_image} />

                     </Col>
            })}

            # Note that:
            before we added Masonry which lowkey fixes the image grid styling for us, we were using these 12 based gridding system and setting the number of images for every screen size, for example 

            when screen size is xxl, we want to render 6 image columns on the page 
            when screen size is xl, we want to render 4 image columns on the screen 
            
             {props.images.map((single_image, idx) => {
                #xxl-2 (which means 6 columns) -12/2=6
               #xl -3 (which means 4 columns)   -12/3=4
              #lg -4 (which means 3 columns)    -12/4=3
             #sm- 6 (which means 2 columns)     -12/6=2

                    return <Col sm={6} xxl={2} xl={3} lg={4} key={idx}>
                    # to integrate masonry breakpoints we need to remove   sm={6} xxl={2} xl={3} lg={4} , since masonry already has its default breakpoints
                 <ImageCard click={props.cardClick}
                                         imagedetails={single_image} />
                            </Col>
                })}
   
            
          </Masonry>
        </Row>
      </Container>
    </div>
  )
}

export default ImageList
```
> ImageCard.js 
```bash
import React from 'react'
import {Card} from 'react-bootstrap'


const ImageCard = (props) => {
# props send from imageCard as click(contains openModal function)and image_details(retreiving every image from the state imageList)

#when user clicks on an image, openModal function is called, image id of the image clicked is fetched and that id is passed as an argument 
  const click = () => {
    props.click(props.image_details.id);
  }

  return (
    <>
    # when card is clicked click function is called 
      <Card className="bg-dark text-white mb-4" onClick={click}
        style={{cursor: "pointer"}}>
        # inside the card all of this is rendered  
        <Card.Img src={props.image_details.urls.thumb} alt="Card image"  />
        <Card.ImgOverlay>
          <Card.Title>{props.image_details.user.name}</Card.Title>
          <Card.Text>{props.image_details.description}</Card.Text>
          <Card.Text>{props.image_details.created_at}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default ImageCard
```
> Popup.js 
```bash 
import React from 'react'
import {Modal, Button, Container, Col, Row} from 'react-bootstrap';

const Popup = (props) => {
    #props send from App.js 
    #showModal (state which signifies whether the popup should be displayed or not), closeModal(set the showModal state to false), modalData (state which is responsible for setting data inside the popup)
  return (
    <>
      <Modal
        #show the popup based on showModal state, true or false?
        show={props.showModal}
        #close the popup 
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-60w"
        style={{backgroundColor: `${props.modalData?.color}77`}}>

        <Modal.Body>
          <Container>
            <Row>
            # the link of the image is passed inside src 
              <Col md={6}>
              <img style={{maxWidth: "100%", maxHeight: "75vh", borderRadius: "5px"}} src={props.modalData?.urls?.full} alt='hi'/>
              </Col>
              <Col md={6}>
                # all the user data is rendered on the rhs of the popup 
                <h3>Uploaded By: {props.modalData?.user?.name} (@{props.modalData?.user?.id})</h3>
                <h4>Upload Date: {props.modalData?.created_at}</h4>
                <hr />
                # when there is something inside the description object render it else dont render anything 
                {props.modalData?.description ? (
                  <>
                  <h5>Description:</h5>
                  <h6>{props.modalData?.description}</h6>
                  <hr />
                  </>
                ) : false}
                <h6>Width: {props.modalData?.width}</h6>
                <h6>Height: {props.modalData?.height}</h6>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
        # when close button is clicked closeModal is invoked which sets the showModal state to false
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          # When download button is clicked,
          all sub objects from modalData is called, to set the styling for the download button 
          
          href is basically the sub object of modalData, it contains the download link -> takes the user to a new page with the image reference, so if the user wants to download it, she can right click and save image
          <Button variant="primary" 
                  style={{backgroundColor: props.modalData?.color, borderColor: props.modalData?.color}} href={props.modalData?.links?.download} target="_blank">Download</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup
```