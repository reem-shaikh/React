import NavigationBar from "./components/NavigationBar";
import Player from "./components/Player";
import Home from "./pages/Home";

const App = _ => {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <NavigationBar />
        <div className="container mx-auto py-4">
          <Home />
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;