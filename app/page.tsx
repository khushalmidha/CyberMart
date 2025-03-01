"use client";

import { ArrowRight, Leaf, Recycle, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Electronic components background"
            fill
            className="object-cover opacity-30 transform scale-105 hover:scale-100 transition-transform duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/95" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
              Sustainable Electronics for a Better Future
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Join the revolution in e-waste management. Browse our collection of refurbished electronic components and contribute to a sustainable future.
            </p>
            <button 
              onClick={() => router.push('/products')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all hover:scale-105"
            >
              Explore Components
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why CyberMart Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose CyberMart?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Every refurbished component reduces e-waste and helps protect our environment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
              <p className="text-muted-foreground">
                All components are thoroughly tested and certified for reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <Recycle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Circular Economy</h3>
              <p className="text-muted-foreground">
                Supporting sustainable practices through reuse and recycling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Arduino Uno R3",
                image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "Refurbished microcontroller board, perfect for DIY projects",
              },
              {
                name: "LCD Display Module",
                image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "16x2 character LCD display, fully tested and functional",
              },
              {
                name: "Lithium Battery Pack",
                image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "Reconditioned 3.7V lithium battery pack with protection circuit",
              },
            ].map((product, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <button 
                    onClick={() => router.push('/products')}
                    className="text-primary hover:text-primary/90 font-semibold flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5,000+", label: "Components Recycled" },
              { number: "2,500", label: "kg of E-Waste Saved" },
              { number: "1,000+", label: "Happy Customers" },
              { number: "100%", label: "Quality Tested" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}