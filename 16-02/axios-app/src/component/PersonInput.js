import React from 'react'
//importing axios from the axios library we just installed 
import axios from 'axios'
import PersonList from './PersonList'

class PersonInput extends React.Component {
  constructor(){
      super()

  this.state = {
      name: '',
  }
  }

  handleChange = (event) => {
  this.setState({ name: event.target.value })

    console.log('event',event.target.value )
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
        //  <form onSubmit={this.handleSubmit}>
        //      <div>
        //      <label>Person Name:</label>
        //          <input type="text" name="name" onChange={this.handleChange}/>
        //     </div>
        //      <button type="submit">Add</button>
        //  </form>

    <div className='app-container'>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>name</label>
                <input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <button type="submit">submit</button>
        </form>
     </div>
      )
  }
}

export default PersonInput