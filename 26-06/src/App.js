import './App.css';
import NavigationBar from './components/NavigationBar';
// import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
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
          </Routes>
          <Footer /> 

        </CssBaseline>
       </ThemeProvider>
    </>
  );
}

export default App;