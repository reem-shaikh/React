import Album from './pages/Album';
import NotFound from "./pages/NotFound";
import Artist from "./pages/Artist";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Player from "./components/Player";
import Home from "./pages/Home";

const App = _ => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen pb-24">
        <NavigationBar />
        <div className="container mx-auto py-4">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/search">
              <Route index element={<Search />} />
              <Route path=":query" element={<Search />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;