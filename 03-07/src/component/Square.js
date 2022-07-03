import React from "react";

//object destructuring the props 
const Square = ({ value, onClick }) => {
  // const renders = useRef(0)
  // console.log('square at index', renders.current++)

  // console.log('value', value)
  
  //when value is null we want to render squares class defined inside index.css 
  //otherwise when value is true, then we render the squares class along with the value class which is either .X or .O
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
      {/* rendering x / o over here */}
    </button>
  );
};

export default Square;