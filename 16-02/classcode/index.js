class App extends React.Component {
    constructor() {
      super();
      // this state variable 'geek' stores the values passed from the api, were going to extact it in the form of an array through map 
      this.state = {
        geek: [],
      };
    }
  
    getDataAxios = () => {
      axios.get("https://reqres.in/api/users")
      .then((geekster) =>
          this.setState((prev) => {
            return {
              geek: geekster.data.data,
            };
          })
        //   console.log(geekster)
      );
    };
  
    // whenver we pass any data in componentDidMount it will be laoded without having to click on the button 
    componentDidMount() {
      this.getDataAxios();
    }
  
    convertToCards = () => {
      // for (let i = 0; i < this.state.geek.length; i++) {
      //   console.log(this.state.geek[i]);
      // }
  
      return this.state.geek.map((item) => (
          // were using map, because it returns elements in the form of an array 
          // JSX only renders array elements 
        <Card
          avatar={item.avatar}
          first_name={item.first_name}
          last_name={item.last_name}
          email={item.email}
        />
      ));
//  what fetch returns in console:
// {avatar: 'https://reqres.in/img/faces/2-image.jpg', first_name: 'Janet', last_name: 'Weaver', email: 'janet.weaver@reqres.in'}
// avatar: "https://reqres.in/img/faces/2-image.jpg"
// email: "janet.weaver@reqres.in"
// first_name: "Janet"
// last_name: "Weaver"
// [[Prototype]]: Object

    };
  
    //   [
    //       <Card />,
    //       <Card/>,
    //       <Card/>,
    //       <Card/>,
    //       <Card/>,
    //   ]
  
    deleteCard = () => {
      this.setState((prev) => {
        console.log(prev);
        //   const x = Array.from(prev.geek);

        // were storing the value we get from the state variable inside the array x 
        const x = [...prev.geek];
        // were deleting this element from the array 
        x.splice(1, 1);
        console.log(x);
        // were returning the rest of the array 
        return {
          geek: x,
        };
      });
    };
  
    render() {
      return (
        <div className="app-container">
          this is app
          <div>
            <button onClick={this.getDataAxios}>axios</button>
            <button onClick={this.deleteCard}>delete card</button>
          </div>
          <div className="card-list">
            {/* {[1, 2, "geekster"]}
            {[<h1>hello</h1>, <h1>bye</h1>]} */}
  
            {this.convertToCards()}
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));