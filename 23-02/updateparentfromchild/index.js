// parent component 
class App extends React.Component {
    constructor() {
      super();
      console.log("constructor");
      this.state = {
        count: 0,
      };
    }

   incrementParent = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
  
    render() {
      console.log("render");
      return (
        <div>
          hello i am app - {this.state.count}
          <div>
            <button onClick={this.incrementParent}>increment from parent</button>
  
              <Counter
                value={this.state.count}
                changeParent={this.incrementParent}
              />
            {/* 
            #  every time Counter component is called it passes
            # - the state of the parent component to the value props 
            # - increementParent function defined inside parent component to changeParentProps 


        #  callback function- Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
        #  increementParent function is a callback function, which is been passed to Counter through Props  
        
        */}
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));