import { Component } from "react";
import SingleProduct from "./SingleProduct.js";
import '../App.css'

// rcce
class ProductSection extends Component {
    render() {
        //retreiving the state passed from App component 
        console.log('products',this.props.products)

        return(
            <>
            {/* mapping over the products state */}
                <div className="product-container">
                    {/* map takes 2 args: item and index */}
                    {this.props.products.map((single_product, idx) => {
                        return (
                            <SingleProduct product={single_product} key={idx} />
                        );
                    })}
                </div>
            </>
        );
    }
}

export default ProductSection;