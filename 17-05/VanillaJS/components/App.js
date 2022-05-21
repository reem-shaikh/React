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
