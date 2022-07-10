import React from 'react'
import { Route, Routes } from "react-router-dom";
import Search from "../Pages/Search";
import Home from '../Pages/Home';
import Album from '../Pages/Album';
import Artist from "../Pages/Artist";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">
  
      <button
          type="button"
          className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="w-6 inline-block">
             <h1>◀</h1> 
          </span>
        </button>

        <button
          type="button"
          className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="w-6 inline-block">
             <h1>▶</h1> 
          </span>
        </button>
      </div>
      <div className="mainContent">
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/album/:albumId" element={<Album />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/search">
              <Route index element={<Search />} />
              <Route path=":query" element={<Search />} />
            </Route> 
          </Routes>
      </div>
    </div>
  )
}

export default Main
