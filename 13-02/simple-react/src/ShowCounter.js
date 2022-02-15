class ShowCounter extends React.Component {
    render(){
        //accessing props 
        //props is an object of all the objects your sending

        //passing data/attribute from parent component to a child component 
        console.log(this.props.abcd)
        console.log(this.props.counterValue)
        //this points to showCounter (instance of the class)

        return(
            <div className="d-inline">
               {this.props.counterValue} 
            </div>
        )
    }
}