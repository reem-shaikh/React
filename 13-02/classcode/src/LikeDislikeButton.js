class LikeDislikeButton extends React.Component {
    render() {
        // toggling using conditional rendering / teranary operator 
        
        // console.log(this.props.purpose);
        // () ? true : false
        return (
            this.props.purpose == "dislike" ? 
            //were calling the function defined inside the child component from the parent component 

            //passing props from parent component to child component 
            //changing props from child component to parent component 
                <button onClick={this.props.func}>👎🏻</button> 
            : 
                <button onClick={this.props.func}>👍🏻</button>
            
            // React.createElement('button', {}, "👎🏻")
        )
    }
}