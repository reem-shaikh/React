import React from 'react'
import '../App.css'

const ImageCard = (props) => {
  console.log(props.imagedetails)
// props send from imageCard as click(contains openModal function)and image_details(retreiving every image from the state imageList)

//when user clicks on an image, openModal function is called, image id of the image clicked is fetched and that id is passed as an argument 
  const click = () => {
    props.click(props.image_details.id);
  }



  return (
    <>
    {/* when card is clicked click function is called */}
      <div onClick={click} className='imagediv'
       >
        {/* inside the card all of this is rendered  */}
        <img src={props.image_details.urls.thumb} alt="Card img"  className='imag-1'></img>
        {/* <Card.ImgOverlay>
          <Card.Title>{props.image_details.user.name}</Card.Title>
          <Card.Text>{props.image_details.description}</Card.Text>
          <Card.Text>{props.image_details.created_at}</Card.Text>
        </Card.ImgOverlay> */}
      </div>
    </>
  )
}

export default ImageCard