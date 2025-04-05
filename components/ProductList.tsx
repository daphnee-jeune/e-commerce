"use client";
import React, { useState } from "react";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Stripe.Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [userInput, setuserInput] = useState("");
  const filteredProducts = products.filter((product) => {
    const productMatch = product.name
      .toLocaleLowerCase()
      .includes(userInput.toLocaleLowerCase());
    const descriptionMatch = product.description
      ? product.description
          .toLocaleLowerCase()
          .includes(userInput.toLocaleLowerCase())
      : false;
    return productMatch || descriptionMatch;
  });
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search produts"
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, key) => (
          <li key={key}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
