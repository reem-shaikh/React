import React from "react";
import { Routes, Route } from "react-router-dom";

//importing components 
import About from "./About.js";
import Contact from "./Contact.js";
import Error from "./Error.js";

const App = () => {
  return (
    <>
    {/* whne we go to the application, based on the routes, render the application */}
      <Routes>
        {/* exact is a keyword used to tell the browser, that only if the user types the exact path, then only it will display the particular component */}
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    {/* <About></About>
    <Contact></Contact> */}
    </>
  );
}

export default App;