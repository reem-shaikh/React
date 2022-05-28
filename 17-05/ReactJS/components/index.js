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


const app_elem = document.getElementById('app');
const react_root = ReactDOM.createRoot(app_elem);
react_root.render(<App />);