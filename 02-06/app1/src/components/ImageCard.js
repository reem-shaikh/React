import React from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ImageCard = (props) => {
  console.log(props.imagedetails)


const navigate = useNavigate();
  const click = () => {

    navigate(`/image/${props.image_details.id}`);
  }

  return (
    <>
    
      <Card className="bg-dark text-white mb-4" onClick={click}
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
// import React from 'react'
// import {Card} from 'react-bootstrap'


// const ImageCard = (props) => {
//   console.log(props.imagedetails)
// // props send from imageCard as click(contains openModal function)and image_details(retreiving every image from the state imageList)

// //when user clicks on an image, openModal function is called, image id of the image clicked is fetched and that id is passed as an argument 
//   const click = () => {
//     props.click(props.image_details.id);
//   }

//   return (
//     <>
//     {/* when card is clicked click function is called */}
//       <Card className="bg-dark text-white mb-4" onClick={click}
//         style={{cursor: "pointer"}}>
//         {/* inside the card all of this is rendered  */}
//         <Card.Img src={props.image_details.urls.thumb} alt="Card image"  />
//         <Card.ImgOverlay>
//           <Card.Title>{props.image_details.user.name}</Card.Title>
//           <Card.Text>{props.image_details.description}</Card.Text>
//           <Card.Text>{props.image_details.created_at}</Card.Text>
//         </Card.ImgOverlay>
//       </Card>
//     </>
//   )
// }

// export default ImageCard