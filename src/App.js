import React, { Component } from "react";
import "./styles.css";

class App extends Component {
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
