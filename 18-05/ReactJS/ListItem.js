const ListItem = (props) => {
    //we can retreive props passed from parent component over here 
    console.log(props)
    return (
        <div>
            {/* Inline CSS */}
            {/* you can add style to HTML elements */}
            <li style={{color: "red", border: "1px solid green", borderRadius: "10px"}}>{props.cat_data}</li>
        </div>
    )
}