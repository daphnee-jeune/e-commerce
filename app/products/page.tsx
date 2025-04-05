import { stripe } from "@/lib/stripe";
import React from "react";
import ProductList from "@/components/ProductList";

const ProductsPage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div>
      <h1>All products</h1>
      <ProductList products={products.data} />
    </div>
  );
};

export default ProductsPage;
