import {useEffect, useState} from 'react'

function Position() {
  const [mouse, setMouse] = useState({x:0, y:0})
 // const[time, setTime] = useState(0)

//   let interval = setInterval(() => {
//     setTime(time+1)
//   }, 1000)

//   useEffect(() => {
//   let interval = null

//   interval = setInterval(() => {
//     setTime(time+1)
//     //can also be written like this;
//     //setTime(time => time + 1)
//     //settime(_ => ++_)
//     //setTime((time) => return time + 1)
  
//   }, 1000)

//   return () => clearInterval(interval);
//   }, [])

  useEffect(() => {
  
    const fn = (e) => {
      console.log(e)
      console.log('tracking', e.x, e.y)
      //we added event listener at mounting time 
      //on mouse moving, it tracks the coordinates at x and y 
       setMouse({
         x: e.x,
         y: e.y
       })

    }
  const id = window.addEventListener('mousemove', fn)

  //cleanup function is executed when component is unmounted 
  //when it gets unmounted we want to remove all of this listeners 
  return () => {
    window.removeEventListener('mousemove', id)
    console.log('removed')
  }
}, [])

  
 return (
   <div className='app'>
   {/* setInterval executes after some interval */}
    <h3 >x:{mouse.x} || y:{mouse.y}</h3>
    {/* <h4>{time}</h4> */}
   </div>
 )
 }

export default Position;
