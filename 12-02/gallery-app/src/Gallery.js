import React from 'react'
import './Gallery.css'

import Img1 from './img/1.jpeg'
import Img2 from './img/2.jpeg'
import Img3 from './img/3.jpeg'
import Img4 from './img/4.jpeg'
import Img5 from './img/5.jpeg'
import Img6 from './img/7.jpeg'
import Img7 from './img/6.jpeg'
import Img8 from './img/9.jpeg'

const Gallery = () => {
  let data = [
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },

    {
      id: 9,
      imgSrc: Img5,
    },
    {
      id: 10,
      imgSrc: Img4,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img3,
    },
  ]

  return (
    <>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Gallery
