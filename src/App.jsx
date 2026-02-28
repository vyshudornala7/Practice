import React from 'react'
import './index.css'
import ProductCard from "./components/Product-Card"
const App = () => {
  const handleAddToCart = (productName) => {
    console.log(`${productName} added to cart in App`);
    alert(`${productName} added to cart!`);
  };
  return (
    <div className="app">
      <h1>Product List</h1>

      <ProductCard
        productName="Shoes"
        price={999}
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        productName="Ac"
        price={750009}
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        productName="Mobile"
        price={68765}
        onAddToCart={handleAddToCart}
      />
    </div>

  )

}

export default App