import React from 'react'
//importing axios from the axios library we just installed 
import axios from 'axios'

class PersonList extends React.Component {
  state = {
      persons: []
  }

  componentDidMount(){
      //performs http get request from endpoint 
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
          console.log(res)
          this.setState({persons: res.data})
      })
  }

  render(){
      return (
          <ul>
              {this.state.persons.map(person => 
                <li key={person.id}>{person.title}</li>
               )}
          </ul>
      )
  }
}

export default PersonList