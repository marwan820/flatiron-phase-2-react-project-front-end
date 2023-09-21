import React,{useState} from "react";


const SearchForItem = ({ catProducts }) => {
  const [searchTerm,setSearchTerm]  = useState("")


//const searchFilter = catProducts.filter((product) => {
//  if (searchTerm = "") return true
//  return product.name.toLowerCase().includes(searchTerm.toLowerCase())
//})
//console.log(searchFilter)
  const handleChange = ({ target }) => {
    const value = target.value;
    setSearchTerm(value)
  };
  // console.log(searchTerm)

//  const catProductsfilter = catProducts.filter((product) => {
//    return (product.category !== product.category)})
//    console.log(catProductsfilter)
  

  const searchByCategory = catProducts.map((product) => {
    return (
      <option key={crypto.randomUUID()} value={product.category}>
        {product.category}
      </option>
    );
  });
  

  return (
    <div>
      <input
        id="search"
        value={searchTerm}
        type="text"
        placeholder="Search for product"
        onChange={handleChange}
      />
      <select>
        <option value="All">Filter by Category</option>
        {searchByCategory}
      </select>
    </div>
  );
};

export default SearchForItem;
