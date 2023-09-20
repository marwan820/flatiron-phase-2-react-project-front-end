import React from "react";
import ItemCard from "./ItemCard";
const ProductList = ({ catProducts }) => {
    console.log("From Home List",catProducts)

    const productList = catProducts.map((item) => <ItemCard key={item.id}  item={item}/>)
  return (
    <>
  <div>Is it working</div>
  {productList}
  
  </>)

};

export default ProductList;
