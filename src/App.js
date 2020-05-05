import React, { Component } from "react";
import Axios from "axios";
import "./styles.css";

import Products from "./components/Products";

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="HeaderPart">Welcome to the Ecommerce Site</header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Items List</h1>
                <hr />
                <Products products={this.state.products} />
              </div>
              <div className="cold-md-4">
                <h1>shopping cart</h1>
                <hr />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
