class App extends React.Component {
    constructor() {
      super();
      // this state variable 'geek' stores the values passed from the api, were going to extact it in the form of an array through map 
      this.state = {
        geek: [],
        totalCount: 0,
        firstValue: 0,
      };
    }
 
// 1. feteching data using fetch API 
// getData = () => {
//   fetch("https://reres.in/api/users")
//   .then((res) => res.json())
//   .then((result) => console.log(result))
// };

// 2. Fetching Data using axios 
// to fix the issue of readibility 
// axios library  was released 
// axios is same as fetch except its easier to work with 
    getDataAxios = () => {
      axios.get("https://reqres.in/api/users")
      .then((geekster) =>

          this.setState((prev) => {
            return {
              geek: geekster.data.data,
            };
          })
      );
      //console.log(geekster)
    };
  
    // whenver we pass any data in componentDidMount it will be laoded without having to click on the button 
    componentDidMount() {
      this.getDataAxios();
    }
  
    convertToCards = () => {
      // for (let i = 0; i < this.state.geek.length; i++) {
      //   console.log(this.state.geek[i]);
      // }
  
     //✅how to update state of parent component (index.js) from inside a child component (Card.js)? 
     //first we define a  function inside the parent component and pass the props
      return this.state.geek.map((item) => (
          // were using map, because it returns elements in the form of an array 
          // JSX only renders array elements 
        <Card
          avatar={item.avatar}
          first_name={item.first_name}
          last_name={item.last_name}
          email={item.email}
          changeParentCount={this.updateParent}
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

    // we want to create multiple cards, without taking the hastle to define them individually and calling the api through them individualy 

    // to acheive this, were using the map method to extract individual elements in the array and create cards from it 
  
    //   [
    //       <Card />,
    //       <Card/>,
    //       <Card/>,
    //       <Card/>,
    //       <Card/>,
    //   ]
  
    deleteCard = () => {
      this.setState((prev) => {
        console.log('prev',prev);
        // const x = Array.from(prev.geek);

        // were storing the value we get from the state variable inside the array x 
        const x = [...prev.geek];
        // were deleting this element from the array x 
        x.splice(1, 1);

        console.log('x', x);
        // were returning the rest of the array on the DOM 
        return {
          geek: x,
        };

      });
    };

    //✅we defined the parent component function here 
    updateParent = () => {
      console.log("this is inside parent");
    //updating the state of the parent component from inside the child component


      this.setState((prevState) => {
        return {
          totalCount: prevState.totalCount + 1,
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
  
  //ReactDOM.render(<App />, document.getElementById("root"));
const app_elem = document.getElementById('root');
const react_root = ReactDOM.createRoot(app_elem);
react_root.render(<App />);