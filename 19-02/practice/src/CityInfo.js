import React, { Component } from 'react'

export class CityInfo extends Component {
  render() {
    console.log(this.props.info)
    return (
      <div>
          <h3>Name</h3>
          <h4>Temperature</h4>
          <h4>Cloudy</h4>
          <h5>Rain</h5>
          <h5>Wind</h5>
      </div>
    )
  }
}

export default CityInfo