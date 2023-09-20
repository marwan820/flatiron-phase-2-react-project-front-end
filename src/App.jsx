import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import CatProductList from "./components/ProductList";
function App() {
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/catProducts")
      .then((res) => res.json())
      .then((items) => setCatProducts(items))},[]);

      console.log("From App",catProducts)

  return (
    <>
      <Header />
      <CatProductList catProducts={catProducts} />
    </>
  );
}

export default App;
