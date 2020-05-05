import React from "react";

const cartItems = props => {
  console.log("list=", props.items);
  return <div>{props.items}</div>;
};

export default cartItems;
