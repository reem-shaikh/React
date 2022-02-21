import React, { Component } from 'react'

export class Search extends Component {
  constructor(props){
      super(props)
      this.state = {
          cityName: 'Mumbai'
      }
  }

  searchCity(){
    console.log('search called')

    //accesing the props that was passed from the parent component in the child component 
    this.props.cityNamechanged(this.state.cityName)
  }

//   cityNamechanged(e){
//       const newCityName = e.target.value;

//       this.setState({
//           cityName: newCityName
//       })
//   }

  render() {
    return (
    // when JSX is returning something it needs to be enclosed in a div
    
    //everything JSX returns is an object 
    //JSX can only return 1 object  - because function can only return one thing at a time 
      <div>
          {/* when onsubmit would be called it would reload the page, if you dont want to refresh the page you can use action="#" 
          
          its similar to e.preventDefault()
          thag we would pass as an arg inside searchCity
          */}
          <form action="#" onSubmit={this.searchCity}>
          {/* returning button and input */}
          <input type="text" 
          placeholder='enter city name' 
          value={this.state.cityName}/>
          <button>search</button>
          </form>
      </div>
    )
  }
}

export default Search