
// parent component 
class App extends React.Component {
    constructor() {
      super();
      //1st constructor is called 
      console.log("constructor");
      this.state = {
        count: 0,
        displayChild: false,
      };
    }
  
    incrementParent = () => {
      this.setState({
        count: this.state.count + 1,
        displayChild: !this.state.displayChild,
        //toggle displayCHild to true when this function is called 
      });
    };
  
    incrementParent2 = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
  
    //this funtion already defined in React.Component class 
    //3, this sfunction is called 
    componentDidMount() {
      // called when App component is displayed
      // on the screen for first time
      console.log("componentDidMount - parent");
      // this.setState({ count: this.state.count + 1 });
    }
  
    //runs after the state is changed 
    //4. after state is changed, first render will be run again 
    //5. then componentDidUpdate will be run 
    componentDidUpdate() {
      // runs when either state OR props is changed
      console.log("parent - UPDATE");
    }
  
    render() {
      //2. 2nd render is ccalled 
      console.log("render - parent");
      return (
        <div>
          hello i am app - {this.state.count}
          <div>
            {/* when you clcik on this button displayChild will be toggled to true */}
            <button onClick={this.incrementParent}>increment from parent</button>
            
            <button onClick={this.incrementParent2}>increment only value</button>

            {/* if displayChild is true, then mount Counter component on screen */}
            {this.state.displayChild ? (
              <Counter
                value={this.state.count}
                changeParent={this.incrementParent}
              />
            ) : null}
            {/* counter is the childd component 
            changeParent is passed as props from index.js to counter
            .js
            
            */}
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));