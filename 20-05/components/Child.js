const Child = (props) => {
    //props passed from Parent component 
    console.log('some_data', props.some_data)
    console.log('child props',props.cb)
    
    // const local_fn = () => {
    //     const some_data = 'this data is generated in the child'
    //     //this statement passes props from child to parent
    //     props.cb(some_data)
        
    // }

return (
    <div>
        <button onClick={props.cb}>click me child</button>
        {/*
        Inline Event Handler:
        if you want to write a cb function instead, you can acheeive like this 
        <button onClick={() => {console.log('hi') }}>click me</button>*/}
    </div>
)
}