import React, { Component } from "react";
import Axios from "axios";
import "./styles.css";

import Products from "./components/Products";
import CartItems from "./components/CartItems";

class App extends Component {
  state = {
    products: [],
    cartItems: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ products: res.data });
    });
  }

  handleAddToCart = (e, items) => {
    let dupItems = [...this.state.cartItems];
    dupItems.push(items);
    this.setState({ cartItems: dupItems });
    //  console.log("its=", this.state.cartItems);
  };

  render() {
    return (
      <div className="App">
        <header className="HeaderPart">Welcome to the Ecommerce Site</header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Items List </h1>
                <hr />
                <Products
                  products={this.state.products}
                  clicked={this.handleAddToCart}
                />
              </div>
              <div className="cold-md-4">
                <h1>shopping cart</h1>
                <hr />
                <CartItems items={this.state.cartItems} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
