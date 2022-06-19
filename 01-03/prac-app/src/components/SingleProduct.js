import { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart, increase } from "../actions/action.js";
//import App from "../App.js";
import '../App.css'

class SingleProduct extends Component {
  render() {
    // console.log(this.props);
    // this.props.printName();
    return (
      <>
        <div className="single-product">
          {/* displaying the product description */}
          <img src={this.props.product?.image} alt='product' />
          <p>{this.props.product?.title}</p>
          <p>₹ {this.props.product?.price}</p>
          quantity = {this.props.quantity}

          {/* if isPresent prop is present, then allow to remove and increase value from the cart, otherwise if isPresent is not present then add it to the add to cart option */}
          {this.props.isPresent ? (
            <div>
              <button onClick={this.props.deleteProduct}>Remove</button>
              <button onClick={this.props.increaseQuantity}>increase </button>
            </div>
          ) : (
            <div>
              <button onClick={this.props.addProduct}>Add to Cart</button>
            </div>
          )}
        </div>
      </>
    );
  }
}

//This will map the state to the props <-> To get the value
const mapStateToProps = (state, originalProps) => {
  // console.log(state);
  const currentProductId = originalProps.product.id;
  //cartList is products state 
  const cartList = state.products;
  //initially, isPresent state is set to false and quantity is set to 0 
  let isPresent = false;
  let quantity = 0;
  //if the id user wants is present in the cartList[], then retreive it 
  const result = cartList.filter((z) => z.id === currentProductId);
  //if length of result is greater than 0, then there is some item present inside the cart 
  if (result.length > 0) {
    // console.log("result", result);
    quantity = result[0].quantity;
    isPresent = true;
  }

  return {
    isPresent,
    quantity,
  };
};

//This will map the dispatch to the props <-> To set the value
const mapDispatchToProps = (dispatch, originalProps) => {
  //dispatch actions to the store 
  //note that: actions are defined inside actions/action.js 
  const addProduct = () => {
    // console.log("originalProps.product ", originalProps.product);
    dispatch(addToCart(originalProps.product));
  };

  const deleteProduct = () => {
    dispatch(removeFromCart(originalProps.product));
  };

  const printName = () => {
    console.log("abhishek");
  };

  const increaseQuantity = () => {
    dispatch(increase(originalProps.product));
  };

  return {
    addProduct,
    deleteProduct,
    printName,
    increaseQuantity,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);