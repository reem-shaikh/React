import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import Search from './pages/Search';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

function App() {
  //were retreiving the theme state from the redux store here 
  const theme = useSelector(state => state.theme);

  const themeObject = createTheme({
    palette: {
      //mode: 'dark' or mode: 'light'
      mode: theme,
    },
  });

  return (
    <>
    {/* we integrated CssBaseline API to change the background color on toggle */}
      <ThemeProvider theme={themeObject}>
        <CssBaseline >
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/post/:id' element={<Detail />} />
            <Route path='/search' element={<Search />} />
          </Routes>
          <Footer />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
