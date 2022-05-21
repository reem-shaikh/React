const Conditional = () => {
    const flag = true; 
// Conditional rendering 
// we can acheive conditional through either if-else statements or ternary operations
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
            {/* based on the flag, were rendering diff things */}
            {/* for example, dark theme, light theme */}


            {/* offloading into different components */}
            {flag == true ? <TrueFlag/> : <FalseFlag/>}
            {/* instead of writting flag == true 
            we can even write 
            
            flag? <TrueFlag/> : <FalseFlag/>*/}
            <p>conditional</p>

        </div>
    )
}