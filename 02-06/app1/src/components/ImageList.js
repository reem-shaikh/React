import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ImageCard from './ImageCard'
import Masonry from 'masonry-layout'

const ImageList = (props) => {
// 4x3 grid
const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true]
  return (
    // we placed imageCard component inside ImageList 
    <>
    {/* mt-4 to add margin between navbar and first grid row*/}
      <Container fluid className='mt-4'>
        <Row>
             {props.images.map((single_image, idx) => {
                //xxl -2 (which means 6 columns) -12/2=6
               //xl -3 (which means 4 columns)   -12/3=4
              //lg -4 (which means 3 columns)    -12/4=3
             //sm- 6 (which means 2 columns)      -12/6=2
                    return <Col sm={6} xxl={2} xl={3} lg={4} key={idx}>
                              <ImageCard click={props.cardClick}
                                         imagedetails={single_image} />
                            </Col>
                })}
        </Row>
      </Container>
    </>
  )
}

export default ImageList
