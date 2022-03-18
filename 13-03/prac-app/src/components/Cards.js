import React from 'react'
import '../styles/cart.css'
import '../styles/navbar.css'

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item

  return (
//     <div className="cards">
// <div className="image_box">
//         <img src={img} alt="" />
//       </div>
//       <div className="details">
//         <p>{title}</p>
//         <p>{author}</p>
//         <p>Price - {price}Rs</p>
//         <button onClick={() => handleClick(item)}>Add to Cart</button>
//       </div> 

//     </div>


<div className="box">
<span className="discount">-10%</span>
<div className="image">
    <img src={img} alt="" />
    <div className="icons">
        <a href="#" className="fas fa-heart"></a>
        <a className="cart-btn" onClick={() => handleClick(item)}>add to cart</a>
        <a href="#" className="fas fa-share"></a>
    </div>
</div>
<div className="content">
    <h3>{title}</h3>
    <div className="price">Rs <span>{price}</span> </div>
    {/* <button onClick={() => handleClick(item)}>Add to Cart</button> */}
</div>
</div>
  )
}


export default Cards

// id, title, autor, price, img

/*

  <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
                <img src="{img} alt="">
                <div className="icons">
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="cart-btn">add to cart</a>
                    <a href="#" className="fas fa-share"></a>
                </div>
            </div>
            <div className="content">
                <h3>f{title}</h3>
                <div className="price">Rs <span>{price}</span> </div>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>

*/