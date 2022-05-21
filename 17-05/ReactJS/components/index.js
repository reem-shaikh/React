//In react 16 we used this syntax 
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// )


//In React 17, we use this syntax
// const container = document.getElementById('app')
// const root = ReactDOM.createRoot(container)
// root.render(<App/>)

//whatever happens in the <App/> is rendered on the DOM  
//App.js contains all the list of components we want to render on the app 

//Shortcut for this React17 syntax 
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);