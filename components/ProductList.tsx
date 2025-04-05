import React from "react";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Stripe.Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search produts" />
      </div>
      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
