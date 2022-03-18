import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>


<header>

<input type="checkbox" name="" id="toggler" />
<label for="toggler" className="fas fa-bars"></label>

<div className="logo" onClick={() => setShow(true)}>Cafe Studio Bakery<span>.</span></div>

<nav className="navbar">
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#products">products</a>
    <a href="#review">review</a>
    <a href="#contact">contact</a>
</nav>

<div className="icons"  onClick={() => setShow(false)}>
     <a className="fas fa-cart-plus">
    </a>
      <span className="plus">{size}</span>
</div>

</header>
    </nav>
  );
};

export default Navbar;
