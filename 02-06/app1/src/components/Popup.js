import React from 'react'
import {Modal, Button, Container, Row, Col} from 'react-bootstrap'

const Popup = (props) => {
  //1. first we pasted the modal code inside static-bootstrap 

  //2. we cut the button and state and paste it inside App.js since were handling states over there 

  //3. states are defined in app.js and passed as props to Pop.js 
  return (
    <>
    {/* show modal or hide modal depends on the props passed */}
      <Modal
        show={props.showModal}
        onHide={props.closeModal}
        backdrop="static"
        keyboard={false}
        centered 
        dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
              <Row>
              <Col md={6}>
                <img style={{width: '100%'}}
                />
              </Col>
              <Col md={6}>
                  <h2>Name: </h2>
                  <h3>Uploaded by:</h3>
                  <h5>Upload Date:</h5>
                  <br/>
                  <p>Tag1, Tag2, Tag3</p>
            
              </Col>
              </Row>  
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="primary">Download</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup