class Card extends React.Component {
//manually create a data 
// create structure of card 

//every card is different, they just share the same blueprint 

constructor(props){
    super(props)
    this.state = {
        numberOfLikes: 0,
        //initially likes will be 0 
    }
}

inc = () => {
    this.setState(prev => {
        return {
            numberOfLikes: prev.numberOfLikes + 1,
        }
    })
}

dec = () => {
    this.setState(prev => {
        return {
            numberOfLikes: prev.numberOfLikes - 1,
        }
    })
}

render(){
    // blueprint of card 
    // we want to get data from App component 
    // const obj = {
    //     avatar: "https://reqres.in/img/faces/1-image.jpg",
    //     email: "meow@bssio.in",
    //     id: 1,
    //     first_name: "george",
    //     last_name: "bluth",

    // };

    return <div className="card-container">
    <img src={this.props.avatar} />
    <p className="names">
        <small>{this.props.first_name}</small>
        <small >{this.props.last_name}</small>
    </p>
    <p className="email">{obj.email}</p>
    <div className="likes">
        <button onClick={this.inc}>thumbs up</button>
        {this.state.numberOfLikes}
        <button onClick={this.dec}>thumbs down</button>
    </div>
    
    </div>
}
}