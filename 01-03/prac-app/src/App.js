import './App.css';
import Header from './components/Header.js';
import ProductSection from './components/ProductSection.js';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // initially productList state is empty 
    this.state = {
      productList: []
    };
  }

  // when component is first mounted, the API is called 
  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    //were fetching products from this API endpoint 
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    console.log('api JSON data', json)
    //were updating the state with the json value 
    this.setState({
      productList: json
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* passing the productList state as props to ProductSection */}
        <ProductSection products={this.state.productList} />
      </div>
    );
  }
}


export default App;