class LikeDislike extends React.Component {
    render(){
        console.log(this.props.purpose)
        //return will return set of elements that are part of the react component 

        return {
            //conditional rendering
            //change the output based on the condition  
            this.props.purpose == "dislike" ? 
            <button onClick={this.props.func}>dislike</button> : 
            <button onClick={this.props.func}>like</button>
        }
    }
}