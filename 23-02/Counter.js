class Counter extends React.Component {
    constructor(props) {
      console.log('constructor - child')
      super(props);
      this.state = {
        name: "geek",
      };
    }
  
    componentDidMount() {
      console.log("child - componentDidMount");
    }
  
    componentWillUnmount() {
      // polymorphism
      // called when component is being unmounted/removed from screen
      console.log("unmounting!!!!");
    }
  
    // componentDidUpdate(param1, param2) - param1 is always previous props
    // param2 is always previous state
  
    componentDidUpdate(prevProps, prevState) {
      console.log("prevProps - ", prevProps.value);
      console.log("pre state - ", prevState);
      console.log("current prop is - ", this.props.value);
      // runs when either state OR props is changed
      console.log("child - UPDATE");
      document.getElementById("update").innerText = prevProps.value;
      // this.setState({ name: "abhishek" });
    }
  
    render() {
      console.log("render method - child ");
      return (
        <div>
          Counter component - {this.props.value}
          <div id="update"></div>
          <button onClick={this.props.changeParent}>change parent from child</button>

          {/* this snippet of code is inside index.js that is the parent component 
          
              hello i am app - {this.state.count}
              
            we want to change the value of count which is the state of parent component from the child component 
            
            to do this, you need to do a callback function 

            function will be defined inside the parent, when this 'change parent from child' button will be clicked 

            it will do a callback function to invoke the function from the parent component to the child component 

            and thats how we'll change the state of the parent component from the child component 
            
            */}
        </div>
      );
    }
  }