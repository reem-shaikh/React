# Context API 
Using Context API with class based components 

> App.js 
```bash
import ThemeSwitcher from './components/ThemeSwitcher';
import Content from './components/Content';
import Context from './components/Context';

function App() {
  return (
    {/* context is an HOC */}
      <Context>
        {/* content and themeswitcher is present inside the Context component */}
        <ThemeSwitcher />
        <Content />
      </Context>
  );
}

export default App;
```
> Context.js 
- Context is created over here 
```bash
import React, { Component, createContext } from 'react';

# were creating context variable here 
const AppContext = createContext();
export {AppContext};

export default class Context extends Component {
  constructor() {
    super();
    #CONTEXT STATE 
    this.state = {
      # initially dark theme is set to false 
      isDarkTheme: false,
    }
  }

  # switch to dark theme
  setDarkTheme = () => {
    this.setState({isDarkTheme: true});
  }

  # set to light theme 
  setLightTheme = () => {
    this.setState({isDarkTheme: false});
  }

  render() {
    let ctxObj = {
      isDarkTheme: this.state.isDarkTheme,
      #HELPER FUNCTIONS 
      setDarkTheme: this.setDarkTheme,
      setLightTheme: this.setLightTheme 
    };
    return (
      <AppContext.Provider value={ctxObj}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
```
> ThemeSwitcher.js 
- Context states (isDarkTheme & isLightTheme) are consumed over here 
```bash
import React, { Component } from 'react'
import { AppContext } from './Context';

#consuming the context over here 
export default class ThemeSwitcher extends Component {
  setTheme = (e) => {

    if(e.target.checked) {
      this.context.setDarkTheme();
    } else {
      this.context.setLightTheme()
    }
  }

  render() {
    #were retreiving context from AppContext
    console.log(this.context);

    return (
      <>
      <input type="checkbox" id='theme_checkbox' checked={this.context.isDarkTheme} onChange={this.setTheme} />
      <label htmlFor='theme_checkbox'>Make it Night Time</label>
      </>
    )
  }
}

ThemeSwitcher.contextType = AppContext;
```
> Content.js 
- Context state isDarkTheme is consumed over here 
```bash
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

Content.contextType = AppContext;
```
> Note that: In order to use the context, you'll need to specify the the contextType. 
