import React from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ImageCard = (props) => {
  console.log(props.imagedetails)


  const navigate = useNavigate();
  const click = () => {
    //when user clicks on the card we want to navigate them to image/imageid
    navigate(`/image/${props.image_details.id}`);
    //and from the app.js component the route will set /image/id and send the user to the Details component 
  }

  return (
    <>
      <Card className="bg-dark text-white mb-4"   onClick={click}
        style={{cursor: "pointer"}}>

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
