import './App.css';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import { useState } from 'react';

import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastNameContext from './LastNameContext';
import setLastNameContext from './SetLastNameContext';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <nameContext.Provider value={name}>
        <lastNameContext.Provider value={lastName}>
        <setNameContext.Provider value={setName}>
          <setLastNameContext.Provider value={setLastName}>
                <Child1 />
                <ChildA />
          </setLastNameContext.Provider>
         </setNameContext.Provider>
        </lastNameContext.Provider>
    </nameContext.Provider>
  );
}

export default App;