// recieving props from App.js 
const Parent = (props) => {
    console.log(props.some_data)
    const cb_function = (a) => {
        console.log('parent function called')
        console.log('a', a)
    }

    return (
        <div>
            {/* passing prop pased to the parent props.some_data to the child component */}
            <Child cb = {cb_function} some_data={props.some_data}/>
        </div>
    )
}