class Counter extends React.Component {
    constructor(props) {
      super(props);

    }
  
    render() {
      console.log("counter-render");
      return (
        <div>
          Counter component - {this.props.value}
          <div id="update"></div>
          <button onClick={this.props.changeParent}>change parent from child</button>
        {/* 
        # every time we click on this button it changes the count state defined inside index.js 
        */}

        </div>
      );
    }
  }