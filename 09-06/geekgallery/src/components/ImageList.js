import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const ImageList = (props) => {
  return (
    <>
      <Container fluid className='mt-4'>
        <Row>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.images.map((single_image, idx) => {
              return <Col key={idx}><ImageCard image_details={single_image} /></Col>
            })}
          </Masonry>
        </Row>
      </Container>
    </>
  )
}

export default ImageList

// import { Container, Row, Col } from 'react-bootstrap';
// import ImageCard from './ImageCard';
// //we imported masonry to allign our grid properly 
// import Masonry from "react-masonry-css";
// //there are a certain steps to implement masonry 
// //this article explains it all 
// //https://thewebdev.info/2020/09/04/add-a-masonry-grid-to-a-react-app-with-the-react-masonry-css-library/


// //1. we installed it: npm install react-masonry-css
// //2. we added masonry-styles inside App.css
// //3. import this object 
// //4. define everything inside <Masonry></Masonry> tag
// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// };

// const ImageList = (props) => {
//   //retreived props from App.js 
//   return (
//     <div style={{marginLeft: '20%'}}>
//       <Container className='mt-4'>
//         <Row>
//           <Masonry
//             breakpointCols={breakpointColumnsObj}
//             className="my-masonry-grid"
//             columnClassName="my-masonry-grid_column"
//           >
//               {/* were mapping over every image inside imageList state and were returning onClick function as a prop further to ImageCard.js -> You see how were implementing prop drilling over here 
              
//               were also sending the single image that is extracted from imageList state as a prop to ImageCard.js*/}
//             {props.images.map((single_image, idx) => {
//               return <Col key={idx}>
//                   <ImageCard 
//                      click={props.cardClick} 
//                      image_details={single_image} />

//                      </Col>
//             })}

//             {/* Note that:
//             before we added Masonry which lowkey fixes the image grid styling for us, we were using these 12 based gridding system and setting the number of images for every screen size, for example 

//             when screen size is xxl, we want to render 6 image columns on the page 
//             when screen size is xl, we want to render 4 image columns on the screen 
            
//              {props.images.map((single_image, idx) => {
//                 //xxl-2 (which means 6 columns) -12/2=6
//                //xl -3 (which means 4 columns)   -12/3=4
//               //lg -4 (which means 3 columns)    -12/4=3
//              //sm- 6 (which means 2 columns)     -12/6=2

//                     return <Col sm={6} xxl={2} xl={3} lg={4} key={idx}>
//                     // to integrate masonry breakpoints we need to remove   sm={6} xxl={2} xl={3} lg={4} , since masonry already has its default breakpoints
//                  <ImageCard click={props.cardClick}
//                                          imagedetails={single_image} />
//                             </Col>
//                 })}
   
//             */}
//           </Masonry>
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default ImageList