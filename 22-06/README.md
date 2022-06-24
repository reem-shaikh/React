# Styled components 
Styled components is an additional package we install to create styled components. 
- its a package, because were installing an additional thing on top of the react library 
- it makes giving css to any component easy, can be used with different technologies. 
- any css properties you dont use in your css file, will be removed. when you use styled components. 
- Styled-components is a library built for React and React Native developers. It allows you to use component-level styles in your applications. Styled-components leverage a mixture of JavaScript and CSS using a technique called CSS-in-JS.
- Styled-components is a CSS-in-JS styling library that uses tagged template literals in JavaScript and the power of CSS to provide a platform that allows you to write actual CSS to style React components

> installation
```bash
npm install --save styled-components
```
- use pascal casing 
> solves problem:
- css cannot handle props
When you write css it doesnt depend on prop, styled-components integrate props

- How do you handle psuedo classes?
> App.js 
```bash
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
        <Button primaryColor='red'>click me </Button>
    </div>
  );
}

export default App;
```
> Button.js 
```bash
import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
  #just before compilation, its processed - preprocessor 
   from {
    # transform: rotate(0 deg)
    # translate: translateY(250px)
    transform scale(2)
   }
   to {
    # transform: rotate(360deg)
    # transform: translateY(0px) 
    #no change shape, size, only position x-y

    transform: scale(0)
    #change shape, size, not the position
   }
`
#if we have not passed the prop then it takes the fallback value
const Button = styled.button`
      background-color: orange;
      color: ${({ primaryColor }) => primaryColor || 'black'};
      animation: ${rotation} 5s linear infinite;
      &:hover {
        background-color:  ${props => props.primaryColor || 'black'};
        color: blue;
      }
`;

#we specify props over here in 2 ways 
#1.normal prop way
#color: ${props => props.primaryColor || 'black'};

#2.object destructuring way 
#${({ primaryColor }) => primaryColor || 'black'};

export default Button
```
> css reference 
[](https:#www.youtube.com/kepowob)

### Advantages:
- You have scoping, each component has its own css. 
- you can use props. theme switching, or re-rendering on change of state is very easy
- no need of inline styling. CSS is seperate and JS is seperate. 
- you can have psuedo classes and psuedo elements better with styled in single line. 
- css is more clean because you dont have to write in terms of js, 
```bash
borderRadius:  ❌
border-radius: ✅
```