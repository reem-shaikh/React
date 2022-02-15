class Like extends React.Component {
    render(){
        return (
            <button onClick={this.props.func}>👍</button>
            //we could even create it without using JSX; like this 
            //React.createElement('button', {}, "")

            //browser doesnt understand JSX 

            //under the hood, babel converts it to this 

            //React.createElement('button', {}, "")
            
        );
    }
}