import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCard from './ImageCard'

const ImageList = () => {
// 4x3 grid
const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true]
  return (
    // we placed imageCard component inside ImageList 
    <>
    {/* mt-4 to add margin between navbar and first grid row*/}
      <Container fluid className='mt-4'>
        <Row>
             {arr.map((single_elem, idx) => {
                    return <Col sm={4} key={idx}>
                              <ImageCard/>
                            </Col>
                })}
        </Row>
      </Container>
    </>
  )
}

export default ImageList
