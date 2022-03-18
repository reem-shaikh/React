import React, { useState } from "react";
import list from "../data";
import Cards from "./Cards";
import "../styles/amazon.css";
import '../styles/navbar.css'

const Amazon = ({ handleClick }) => {

  return (
<section class="products" id="products">

<h1 class="heading">Bakery<span> Items</span> </h1>

<div class="box-container">
      {/* list is defined inside data.js */}
      {list.map((item) => (
        // pass key otherwise it throws an error
        // were passing the item prop because we want to fetch the item that the user clicked on 
        <Cards key={item.id} item={item} handleClick={handleClick} />
      )
      )}
</div>
</section>
  );
};

export default Amazon;

/*
</section>


*/