import React from 'react'

function Button({handleClick, children}) {
  console.log('button')
  return (
    //props.children refers to whats defined between the button tags in ParentComponent.js 
    <div>
        <button onClick={handleClick}>
            {children}
        </button>
    </div>
  )
}

export default React.memo(Button)
//export default Button