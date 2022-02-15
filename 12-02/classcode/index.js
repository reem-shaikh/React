import NavigationBar from "./nav";
let NavigationBar = require('./nav.js')

console.log('reactdom', ReactDOM)

ReactDOM.render(
    <NavigationBar />,
    document.getElementById('nav_container')
);