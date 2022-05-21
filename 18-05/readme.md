#### Conditional rendering 
```bash
const Conditional = () => {
    const flag = true; 
# Conditional rendering 

   #1. IF- ELSE 
   # we can acheive conditional through either if-else statements or ternary operations
    {/* this is not a component, its a function */}
    const condition = ()=> {
        if(flag){
            return (<TrueFlag/>)
        } else{
            return(<FalseFlag/>)
        }
    }

    return (
        <div>
            #2. TERNARY OPERATOR 
            {/* based on the flag, were rendering diff things, for acheiving this in a single line, we can use ternary operator */}
            {/* Real life implementation of ternary operator: dark theme, light theme */}

            # offloading into different components 
            {flag == true ? <TrueFlag/> : <FalseFlag/>}
            #instead of writting flag == true we can even write flag? <TrueFlag/> : <FalseFlag/>
            <p>conditional</p>

        </div>
    )
}
```
#### Props
properties passed from parent component to child component
> Parent Component (List.js)
```bash
   const List = () => {
    # LOOPING OVER THE ELEMENT 
     {/* when you have an array and you want to loop on it */}
        cats = ['paw', 'meow', 'skrr', 'purr']       

        return(
            <ol>
                {cats.map((single_cat, index) => {
                    #have logic here 
                    return (
                        # <li>{single_cat}</li>
                        # #passing these child to parent 
                        <ListItem cat_data={single_cat} another={index}/>
                    )
                })}
                <li key={index}>single cat</li>
            </ol>
        )
   }

# map iterates over every element in the array and return 
# for each iterates over every element in the array and doesnt return 


# Each child should have a unique key property -> otherwise react throws a warning 
```
> Child Component (ListItem.js)
```bash
const ListItem = (props) => {
    #we can retreive props passed from parent component over here 
    console.log(props)
    return (
        <div>
            <li>{props.cat_data}</li>
        </div>
    )
}
```
#### Styling 
1. internal styling 
```bash
const ListItem = (props) => {
    #we can retreive props passed from parent component over here 
    console.log(props)
    return (
        <div>
            {/* Inline CSS */}
            {/* you can add style to HTML elements */}
            <li style={{color: "red", border: "1px solid green", borderRadius: "10px"}}>{props.cat_data}</li>
        </div>
    )
}
```
2. external styling
> button.js
```bash
const Button = () => {
    return (
        <div>
            <button className={main-button}>click me</button>
        </div>
    )
}
```
> index.css
```bash
/* styling using external CSS approach */
.main-button {
    background-color: "white";
    border: 2px solid grey;
}

.main-button:hover {
    color: red;
}
```




























