import { Component } from "react";
import SingleProduct from "./SingleProduct.js";
import '../App.css'
// if you dont do ./ it will try to find it fr0m the node modules 

// rcce
class ProductSection extends Component {
    render() {
        console.log('products',this.props.products)

        return(
            <>
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