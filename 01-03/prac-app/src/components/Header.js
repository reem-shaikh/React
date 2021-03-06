import { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <h1>E-Com</h1>
          <h1> - total = {this.props.total}</h1>
          <button>Cart</button>
        </header>
      </>
    );
  }
}

// we can pass state to our component through this function
const mapStateToProps = (state, currentProps) => {
  console.log("state - ", state);
  const total = state.total;
  return {
    total,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);