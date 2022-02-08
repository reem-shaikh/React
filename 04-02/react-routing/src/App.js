import React from "react";
import { Routes, Route } from "react-router-dom";

//importing components 
import About from "./About.js";
import Contact from "./Contact.js";

const App = () => {
  return (
    <>
    {/* whne we go to the application, based on the routes, render the application */}
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    {/* <About></About>
    <Contact></Contact> */}
    </>
  );
}

export default App;