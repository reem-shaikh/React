import React from 'react'

function Title() {
  console.log('Title')
  return (
    <div>Title component</div>
  )
}

export default React.memo(Title)
//export default Title