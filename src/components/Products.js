import React from "react";
import "../components/Products.css";

const products = props => {
  const prods = props.products.map(items => {
    return (
      <div className="row" key={items.id}>
        <article className="ArticleStyle  col-md-6">
          <div>{items.name}</div>
        </article>
        <button
          className="col-md-4 first"
          onClick={e => props.clicked(e, items)}
        >
          Add to Cart
        </button>
      </div>
    );
  });
  return <div>{prods}</div>;
};

export default products;
