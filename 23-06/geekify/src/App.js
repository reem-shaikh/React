import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Player from "./components/Player";
import Home from "./pages/Home";
import Album from './pages/Album';
import Artist from './pages/Artist'
import NotFound from "./pages/NotFound";

const App = _ => {
  return (
    <>
      <div class="bg-gray-200 min-h-screen pb-24">
        <NavigationBar />
        <div className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album/:albumId" element={<Album />} />
            <Route path="/artist/:Id" element={<Artist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;