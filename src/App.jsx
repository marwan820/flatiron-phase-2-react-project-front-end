import { useState, useEffect } from "react";

import "./App.css"
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Form from "./components/SearchForItem";
import ProductList from "./components/ProductList";
import SearchForItem from "./components/SearchForItem";
import { Route,Routes } from "react-router-dom";

function App() {

  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/catProducts")
      .then((res) => res.json())
      .then((items) => setCatProducts(items));
  }, []);

  
  

  return (
    <>
      <NavBar />
      <Header />
      <SearchForItem catProducts={catProducts}/>
      <ProductList catProducts={catProducts} />
    </>
  );
}

export default App;
