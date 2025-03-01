"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            { name: "LCD Display Module", price: 999, quantity: 1 },
            { name: "Lithium Battery Pack", price: 1499, quantity: 1 },
          ],
        }),
      });

      const data = await response.json();

      if (data.url) {
        const stripe = await stripePromise;
        stripe?.redirectToCheckout({ sessionId: data.id });
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`py-2 px-4 bg-green-500 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
        }`}
      >
        {loading ? "Processing..." : "Pay with Stripe"}
      </button>
    </div>
  );
};

export default CheckoutPage;
