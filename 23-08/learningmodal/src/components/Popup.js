import React from 'react'
import {Modal, Button, Container, Col, Row} from 'react-bootstrap';

const Popup = (props) => {
    //props send from App.js 
    //showModal (state which signifies whether the popup should be displayed or not), closeModal(set the showModal state to false), modalData (state which is responsible for setting data inside the popup)
  return (
    <>
      <Modal
        //show the popup based on showModal state, true or false?
        show={props.showModal}
        //close the popup 
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-60w">
      {/* style={{backgroundColor: `${props.modalData?.color}77`}}> */}

                {/* ? is called optional chaining operator
                Typically when you want to access any oject key 
                we do obj.key1 
                console:
                undefined 
                when we want to go more level inside 
                obj.key1.key2 
                console:
                it will crash 
                JS can handle atleast one data, when we want to access deeper objects, such that it doesnt crash, we use something called optional chaining
                - if key1 is defined, check for key2 
                - if key is not defined, then return undefined but atleats dont ccrash 
                This is strict chaining
                props.modalData.urls.full
                This is called optional chaining operator (introduced in ES2020)
                props.modalData?.urls?.full
                */}
        <Modal.Body>
          <Container>
            <Row>
            {/* the link of the image is passed inside src */}
              <Col md={6}>
              <img style={{maxWidth: "100%", maxHeight: "75vh", borderRadius: "5px"}} src={props.modalData?.urls?.full} alt='hi'/>
              </Col>
              <Col md={6}>
                {/* all the user data is rendered on the rhs of the popup */}
                <h3>Uploaded By: {props.modalData?.user?.name} (@{props.modalData?.user?.id})</h3>
                <h4>Upload Date: {props.modalData?.created_at}</h4>
                <hr />
                {/* when there is something inside the description object render it else dont render anything */}
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
        {/* when close button is clicked closeModal is invoked which sets the showModal state to false*/}
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          {/* When download button is clicked,
          all sub objects from modalData is called, to set the styling for the download button 
          
          href is basically the sub object of modalData, it contains the download link -> takes the user to a new page with the image reference, so if the user wants to download it, she can right click and save image*/}
          <Button variant="primary" 
                  style={{backgroundColor: props.modalData?.color, borderColor: props.modalData?.color}} href={props.modalData?.links?.download} target="_blank">Download</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup