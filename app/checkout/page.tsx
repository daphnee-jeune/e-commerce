"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/CartStore";
import React from "react";

const CheckoutPage = () => {
  const { items, addItem, removeItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  if (total === 0 || items.length === 0) {
    return (
      <div>
        <h1>Your cart is empty.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Checkout</h1>
      <Card>
        <CardHeader>
          <CardTitle>Order summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {items.map((item, key) => (
              <li key={key}>
                <div>
                  <span>{item.name}</span>
                  <span>
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
                <div>
                  <Button variant="outline" onClick={() => removeItem(item.id)}>
                    -
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutPage;
