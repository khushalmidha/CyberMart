import { NextResponse } from "next/server";
import Stripe from "stripe";

// Force dynamic rendering to allow usage of request.json()
export const dynamic = 'force-dynamic';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables");
}

// Option 1: Use the new API version that matches your Stripe library
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia",
});

// Alternatively, if you prefer, you can remove the apiVersion option:
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    console.log("Request body:", body);

    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      console.error("Invalid or empty items array:", body.items);
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Create line items for Stripe Checkout
    const lineItems = body.items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.image_url ? [item.image_url] : [],
        },
        unit_amount: Math.round(item.price * 100), // Convert dollars to cents
      },
      quantity: item.quantity,
    }));

    console.log("Creating Stripe checkout session with lineItems:", lineItems);

    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    console.log("Stripe session created:", session.url);
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe API Error:", error.message, error.stack);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
