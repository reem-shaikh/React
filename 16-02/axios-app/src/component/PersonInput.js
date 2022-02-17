import React from 'react'
//importing axios from the axios library we just installed 
import axios from 'axios'
import PersonList from './PersonList'

class PersonInput extends React.Component {
  state = {
      name: '',
  }

  handleChange = (event) => {
      this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
      event.preventDefault()

      const user = {
          name: this.state.name 
      }

      // we can use post to create a resource 
      axios.post('https://jsonplaceholder.typicode.com/posts', { user }).then(res => {
          console.log('response',res)
          console.log('data',res.data)
      })
  }

  render(){
      return (
         <form onSubmit={this.handleSubmit}>
             <label>
                 Person Name:
                 <input type="text" name="name" onChange={this.handleChange}/>
             </label>
             <button type="submit">Add</button>
         </form>
      )
  }
}

export default PersonList