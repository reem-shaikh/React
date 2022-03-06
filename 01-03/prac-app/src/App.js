import './App.css';
import Header from './components/Header.js';
import ProductSection from './components/ProductSection.js';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // initially productList is empty 
    this.state = {
      productList: []
    };
  }

  // when page is rendered, the API is called 
  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    console.log('api JSON data', json)
    this.setState({
      productList: json
    });
  }


  render() {
    return (
      <div className="App">
        <Header />
        {/* passing the state of App.js as props to ProductSection */}
        <ProductSection products={this.state.productList} />
      </div>
    );
  }
}


export default App;