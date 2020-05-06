import React from "react";

const cartItems = props => {
  let i = 0;
  const disp = props.items.map(item => {
    return (
      <article key={(i = i + 1)} className="ArticleStyle">
        <div>{item.name}</div>
      </article>
    );
  });
  return <div>{disp}</div>;
};

export default cartItems;
