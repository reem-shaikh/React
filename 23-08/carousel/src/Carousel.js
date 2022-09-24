import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'
import { data } from './data'
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Items } from './Items'
// import {Card} from './Card';
import youtubelogo from './youtube.png'

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: 'blue', fontSize: '30px' }} />
    </div>
  )
}
const NextBtn = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: 'blue', fontSize: '30px' }} />
    </div>
  )
}

const Carousel = () => {
  return (
    <>
    <div className="slider">
    <div className="slider-container">
      <div className="upper">
        <h1>
          <span className="green-text">Thousands</span>
          <span className="white-text">of lives changed</span>
        </h1>
      </div>
      <p className="desc">
        Hear it from the ones who have been on this journey already
      </p>
      </div>
   </div>
    <div className="carousel-cover">
      <div style={{ margin: '80px' }} className="carousel">
        {/* <h1>Basic carousel</h1> */}
        <Slider
          autoplay
          autoplaySpeed={2000}
          initialSlide={2}
          dots={true}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          // passing props to customize the dots below the carousel
          customPaging={(i) => {
            return (
              <div className="custom">
                <img
                  src={data[i]}
                  alt=""
                  style={{
                    width: '90px',
                    height: '90px',
                    marginBottom: '50px',

                    borderRadius: '50px',
                  }}
                />
              </div>
            )
          }}
          dotsClass="slick-dots custom-indicator"
        >
          {/* iterate over data array */}
          {/* {data.map((item) => (
          <div className="main">
            <img src={item} alt="" style={{ width: "50vw", height: "40vh"}} key={item} />
          </div>
        ))} */}

          {Items.map((item, index) => {
            return (
              <li key={index}>
                {/* <h4>{item.title}</h4>
                              <img src={item.img} alt="" style={{ width: "50vw", height: "40vh"}}></img> */}

                {/* <Card 
                             title = {item.title}
                             img = {item.img}
                             desc = {item.desc}
                             /> */}
                <div class="column">
                  <div class="pic">
                    <img
                      src={item.img}
                      style={{
                        width: '7vw',
                        height: '12vh',
                        borderRadius: '50px',
                      }}
                    />
                    <div class="det">
                      <div class="name">{item.title}</div>
                      <small class="desig">
                        <img
                          src={item.logo}
                          style={{ width: '5vw', height: '8vh' }}
                        />
                      </small>
                    </div>
                  </div>

                  <div class="description">
                    <small class="test">
                      <img class="testimg" src={youtubelogo} />
                      <a href="https://youtu.be/_hWP0gK3_iA" class='a'> Watch Testimonial</a>
                    </small>
                    <p class="content">{item.desc}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </Slider>
      </div>
     
    </div>
    <div class='cta'>
      <button>Read More Testimonials</button>
    </div>

    </>
  )
}

export default Carousel
