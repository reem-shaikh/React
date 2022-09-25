import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'
// import { data } from './data'
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
      <ArrowBackIosIcon style={{ color: 'white', fontSize: '15px' }} />
    </div>
  )
}
const NextBtn = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: 'white', fontSize: '15px' }} />
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
            autoplaySpeed={3000}
            initialSlide={24}
            dots={true}
            infinite
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            // passing props to customize the dots below the carousel
            customPaging={(i) => {
              return (
                <div className="custom">
                  <img
                    src={Items[i].img}
                    alt="bg-img"
                    className='bg-icons'
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
                  <div className="column">
                    <div className="pic">
                      <img
                        src={item.img}
                        className='dp'
                        alt="dp on card"
                        style={{
                          width: '8vw',
                          height: '14vh',
                          borderRadius: '50px',
                        }}
                      />
                      <div className="det">
                        <div className="name">{item.title}</div>
                        <small className="desig">
                          <img
                            alt="logo on card"
                            className='cardlogo'
                            src={item.logo}
                            style={{ width: '7vw', height: '8vh' }}
                          />
                        </small>
                      </div>
                    </div>

                    <div className="description">
                      <small className="test">
                        <img
                          className="testimg"
                          src={youtubelogo}
                          alt="youtube logo"
                        />
                        <a href="https://youtu.be/_hWP0gK3_iA" className="a">
                          Watch Testimonial
                        </a>
                      </small>
                      <p className="content">{item.desc}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </Slider>
        </div>
      </div>
      <div className="cta">
        <button>Read More Testimonials</button>
      </div>
    </>
  )
}

export default Carousel
