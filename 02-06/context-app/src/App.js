import './App.css';
import { useState } from 'react';
import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastNameContext from './LastNameContext';
import setLastNameContext from './SetLastNameContext';
import ThemeContext from './ThemeContext';
import SetThemeContext from './SetThemeContext';
import Main from './Main';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [theme, setTheme] = useState(false);
  //we created a couple theme objects themContext and setThemeContext to pass the state data: theme and setTheme 
  //were ultimately passing these to the Main.js component 
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <nameContext.Provider value={name}>
          <lastNameContext.Provider value={lastName}>
            <setNameContext.Provider value={setName}>
              <setLastNameContext.Provider value={setLastName}>
                <Main />
              </setLastNameContext.Provider>
            </setNameContext.Provider>
          </lastNameContext.Provider>
        </nameContext.Provider>
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;