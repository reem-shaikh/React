import React from 'react'
import AppContext from './AppContext'

const Todos = (props) => {
  //const todos = props.todos 
  //const addTodo = props.addTodo

  //in array, we could namee them whatever 
  const {todos, addTodo} = props

  const val = useContext(AppContext)

  return <div>
      {/* display the list using map */}
      {todos.map((item, index) => {
          return (
              <div key={index}>
                  <p>{item}</p> 
              </div>
          )
      })}
      {/*
         take item as an argumnet, whee item is each eleemnt of an array
         return an array of JSX

         every item should have a unique key 
         map gives index along with the item you can set it as the key 
       */}
       <button onClick={addTodo}>add todo</button>
  </div>
}

export default Todos 