import React from "react";
import { Route, Routes } from "react-router-dom";

//importing components 
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<About/>}/>
    </Routes> 
    {/* <About></About>
    <Contact></Contact> */}
    </>
  );
}

export default App;