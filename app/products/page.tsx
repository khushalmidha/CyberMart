"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { ChatBot } from "@/components/chat-bot";
import { Star } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Arduino Uno R3",
    description: "Refurbished microcontroller board, perfect for DIY projects",
    price: 0.01,
    image_url: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 4.5,
  },
  {
    id: "2",
    name: "LCD Display Module",
    description: "16x2 character LCD display, fully tested and functional",
    price: 9.99,
    image_url: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 4.0,
  },
  {
    id: "3",
    name: "Lithium Battery Pack",
    description: "Reconditioned 3.7V lithium battery pack with protection circuit",
    price: 14.99,
    image_url: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 3.8,
  },
  {
    id: "4",
    name: "Raspberry Pi 4 Model B",
    description: "Refurbished 4GB RAM model, perfect for home automation",
    price: 45.99,
    image_url: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "5",
    name: "Solar Panel Kit",
    description: "5W solar panel with charge controller, ideal for small projects",
    price: 29.99,
    image_url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "6",
    name: "LED Strip Kit",
    description: "Reconditioned RGB LED strip with controller and power supply",
    price: 19.99,
    image_url: "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "7",
    name: "Sensor Pack",
    description: "Bundle of various sensors including temperature, humidity, and motion",
    price: 34.99,
    image_url: "https://images.unsplash.com/photo-1597781914467-a5b93258e748?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
},
  {
    id: "8",
    name: "Motor Driver Module",
    description: "L298N motor driver board for DC and stepper motors",
    price: 8.99,
    image_url: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "9",
    name: "WiFi Development Board",
    description: "ESP8266 NodeMCU board with built-in WiFi capabilities",
    price: 12.99,
    image_url: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "10",
    name: "OLED Display",
    description: "0.96 inch I2C OLED display module, crystal clear visuals",
    price: 7.99,
    image_url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  
  {
    id: "11",
    name: "Ultrasonic Sensor",
    description: "HC-SR04 distance measuring sensor, tested & calibrated",
    price: 4.99,
    image_url: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "12",
    name: "Power Supply Unit",
    description: "12V 5A switching power supply, thoroughly tested",
    price: 16.99,
    image_url: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "13",
    name: "Bluetooth Module",
    description: "HC-05 Bluetooth module for wireless communication",
    price: 6.99,
    image_url: "https://images.unsplash.com/photo-1601524909162-ae8725290836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "14",
    name: "Capacitor Kit",
    description: "Assorted electrolytic capacitors, tested for reliability",
    price: 11.99,
    image_url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "15",
    name: "Relay Module",
    description: "4-channel relay module for high-power switching",
    price: 8.99,
    image_url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
 
  {
    id: "16",
    name: "Touch Screen",
    description: "7-inch capacitive touch screen with controller board",
    price: 39.99,
    image_url: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  },
  {
    id: "17",
    name: "Logic Analyzer",
    description: "8-channel USB logic analyzer for debugging digital circuits",
    price: 24.99,
    image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 5.0,
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
      ))}
      {hasHalfStar && <Star className="w-5 h-5 text-yellow-400 fill-yellow-200" />}
    </div>
  );
};

export default function ProductsPage() {
  const { addItem } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    setAddedItems(new Set([...addedItems, product.id]));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-56">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 space-y-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <StarRating rating={product.rating} />
              <p className="text-gray-600">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{formatPrice(product.price)}</span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  variant={addedItems.has(product.id) ? "secondary" : "default"}
                >
                  {addedItems.has(product.id) ? "Added!" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <ChatBot />
      </div>
    </main>
  );
}