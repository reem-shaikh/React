import React, { Component } from 'react'
import { AppContext } from './Context'

export default class Content extends Component {
  render() {
    return (
      <>
        {this.context.isDarkTheme ? (
          <h2>It is night time, time to sleep 💤💤💤</h2>
        ) : (
          <h2>Rise and Shine 😎😎😎</h2>
        )}
      </>
    )
  }
}

// whenever you want to use the context, you can use it like this
Content.contextType = AppContext
