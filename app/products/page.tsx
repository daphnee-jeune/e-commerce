import { stripe } from "@/lib/stripe";
import React from "react";
import ProductList from "@/components/ProductList";

const ProductsPage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
        All products
      </h1>
      <ProductList products={products.data} />
    </div>
  );
};

export default ProductsPage;
