import React from "react";

const ItemCard = ({ item }) => {
  const {productId,productName,price,description,category,brand} = item
  console.log(item)
  return <div>{productName}</div>;
};

export default ItemCard;
