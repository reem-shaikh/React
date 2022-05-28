const Form= () => {
  const [data, setData] = React.useState("#000000");
  const [range, setRange] = React.useState(0)
  //using event handlers / event listeners as particular functions 
  //handlers - are handling events 
  //function you written to handle events are called event handlers 
  const keyPressed = (event) => {
    //console.log('something typed', event)
    console.log(event.target.value);
    setData(event.target.value)
  }

  const rangeChange = (e) => {
    console.log(e.target.value * 2)
    setRange(e.target.value * 2)
  }

  //event handlers are special functions which have specific functions related to events 
  //regular functions can be handled from anywhere 
    return (
      <div>
        <h1>this is form</h1>
        <input type='color' onChange={keyPressed}></input>
        <input type='range' onChange={rangeChange}/>
        <div style={{width: `${range}px`, height: `${range}px`, backgroundColor: data}}></div>
        <p>{data}</p>
        {/* input didnt re-render, it didnt call the function keyPressed again */}

        {/* use input type:color */}
      </div>
    )
  }

  