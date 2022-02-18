class Card extends React.Component {
    // this card component is reused for different values passed in the api 
    constructor(props) {
      super(props);
      this.state = {
        numberOflikes: 4,
      };
    }
  
    inc = () => {
      this.setState((prev) => {
        return {
          numberOflikes: prev.numberOflikes + 1,
        };
      });
    };

    reset = () => {
      this.setState((prev) => {
        return {
          numberOflikes: 0,
        };
      });
    };
  
    dec = () => {
      this.setState((prev) => {
        return {
          numberOflikes: prev.numberOflikes - 1,
        };
      });
    };
  
    render() {
      //console.log('props',this.props);

      // const obj = {
      //   avatar: "https://reqres.in/img/faces/1-image.jpg",
      //   email: "george.bluth@reqres.in",
      //   first_name: "George",
      //   id: 1,
      //   last_name: "Bluth",
      // };
  
      return (
        // were using the props that we passed through from the parent component 
        <div className="card-container">
          <h1>totalCount: {this.state.totalcount}</h1>

          <img src={this.props.avatar} />
          <p className="names">
            <small>first name: {this.props.first_name}</small>
            <small>last name: {this.props.last_name}</small>
          </p>
          
          <p className="email">{this.props.email}</p>
        {/* the likes are updated only for the specific card component  */}
          <div className="likes">
            <button onClick={this.inc}>👍🏻</button>
            {this.state.numberOflikes}
            <button onClick={this.dec}>👎🏻</button>
            <button onClick={this.reset}>reset</button>
          </div>

          {/* changing the state of the parent component from inside the child component */}
          <button onClick={this.props.changeParentCount}>
          increase parent count
        </button>

        </div>
      );
    }
  }