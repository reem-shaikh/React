import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  // by lifting the state from Cards.js and amazon.js we placed this function in parent component 
  const handleClick = (item) => {
    // if the item user selected is already present in the array item[] then dont add it to the cart 
    if (cart.indexOf(item) !== -1) 
    {
      return;
    }
    console.log(cart.indexOf(item))
    //Cart.push(item)
    setCart([...cart, item]);
    console.log('cart', cart)
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    console.log('ind', ind)

    const arr = cart;
    console.log('arr', arr)
    arr[ind].amount += d;
    console.log(arr[0])

    // when the user tries to remove items below 0 amount, then set the arr amount as 1, because items cannot be in the negative spectrum 
    if (arr[ind].amount === 0)
    {
     arr[ind].amount = 1;
    }
     setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {/* when show:true - amazon
          when show:false - cart
      */}
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
};

export default App;