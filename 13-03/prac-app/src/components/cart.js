import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  // responsible for removing items when user clicks on the remove button
  const handleRemove = (id) => {
    //if the item.id that user chose is not equal to the id of the array which contains all the cards, then showcase the rest of the array excluding the id
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  //initially buffer price set to 4000
  const handlePrice = () => {
    let ans = 4000;
    //manipulate the total price of the cart based on this logic 

    //when first item is added 
    //ans = 4000 + (1 x 89) = 4089
    cart.map((item) => (ans = ans + (item.amount * item.price)));
    setPrice(ans);
  };

  // when page loaded handlePrice() is called 
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>Rs {item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))
      }
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;