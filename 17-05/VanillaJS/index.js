// print this <div id='app'>hello world</div> using JS 
// const head = document.createElement('h1')
// head.innerText = 'hello world'
// document.getElementById('app').appendChild(head)

// print <h1>hello world</h1> using one line JS 
// document.getElementById('app').innerHTML = '<h1>hello world</h1>'

//print Contents the same way using function
// function heading(){
//     return "<h1>hello geeks</h1>"
// }
// document.getElementById('app').innerHTML = heading()

function Button(){
    //get is a function which is part of the component 
    //which you cant directly access it cannot be a component
    function get(){
        return `get`
    }
    var caption = 'MEOW';
    return `<button style="border: 1px solid red; color: green;">click me ${caption} ${get()}</button>`
}

function Content(){
    return `<h1>hello</h1> 
            <p>hi meows fwjefuiwfhiowehoi lodjenie</p>`
}

function NavigationBar(){
    return `<div><h1>geeks</h1></div>`
}

function App(){
    //Template Literal 
    //since this is a string, we need to do string tempating which will convert var / fn / objects to strings 
    //in string templating -> ${var} or ${fn()} or ${obj.something}
    return `${NavigationBar()} + ${Content()} + ${Content()}
    <footer>meeeeeeeeeeeeeeeeeeeeow ${Button()}</footer>`
    //if we want to reuse a function, we can easily do so over here 

    //Note that: One single function is called as a single component 
    //It is 1 or more than 1 element + functionality and logic 
    //componenet can be reused multiple times using plug and play 
}

document.getElementById('app').innerHTML = App()

// const app_elem = document.getElementById('app');
// const react_root = ReactDOM.createRoot(app_elem);
// react_root.render(<App />);
