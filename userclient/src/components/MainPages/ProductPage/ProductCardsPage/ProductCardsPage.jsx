import React from 'react'
import "./ProductCardsPage.css"
import ProductCards from "./ProductCards/ProductCards";
import ProductCard2 from "./ProductCard2/ProductCard2";
import ProductCard3 from "./ProductCards3/ProductCard3";

const ProductCardsPage = () => {
  return (
    <div className="ProductCardsPage">
                <ProductCards />
                <ProductCard2 />
                <ProductCard3 />

    </div>
  )
}

export default ProductCardsPage
