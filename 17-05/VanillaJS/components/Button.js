function Button(){
    //get is a function which is part of the component 
    //which you cant directly access it cannot be a component
    function get(){
        return `get`
    }
    var caption = 'MEOW';
    return `<button style="border: 1px solid red; color: green;">click me ${caption} ${get()}</button>`
}