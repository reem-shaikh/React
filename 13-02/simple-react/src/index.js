//you dont have to import anything because cdn links by default attaches to the window context 
console.log(window.App)
// class App extends React.Component {
//     render(){
//         return (
//             <h2>Hey Geeks</h2>
//         )
//     }
// }

//what to render and where to render 
ReactDOM.render(<App/>, document.getElementById('app'))