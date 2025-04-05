import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Stripe.Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const price = product.default_price as Stripe.Price;
  return (
    <Link href={"/procuts/1"}>
      <Card>
        {product.images && product.images[0] && (
          <div className="relative h-80 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardContent>
            {price && price.unit_amount && (
              <p className="text-lg">${(price.unit_amount / 100).toFixed(2)}</p>
            )}
            <Button>View details</Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCard;
