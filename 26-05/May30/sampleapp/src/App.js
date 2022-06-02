
import {useState} from 'react'
import Position from './Position';

function App() {
  const [showPosition, setShowPosition] = useState(true)


 return (
   <div className='app'>
    {showPosition ? <Position/> : false}
    <button onClick={() => setShowPosition(false)}>do not track</button>
   </div>
 )
 }

export default App;




















