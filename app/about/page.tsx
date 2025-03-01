"use client";

import { Leaf, Recycle, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About CyberMart</h1>
        
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Electronics workshop"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-8">
            At CyberMart, we're committed to revolutionizing the electronics industry through sustainable practices. Our mission is to reduce e-waste while providing high-quality, refurbished electronic components to makers, developers, and innovators worldwide.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground text-sm">
                Every component we salvage and refurbish is one less piece of e-waste in our landfills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm">
                Each component undergoes rigorous testing to ensure reliability and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Recycle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Circular Economy</h3>
              <p className="text-muted-foreground text-sm">
                We promote a sustainable cycle of reuse and recycling in electronics.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            Founded with a vision to address the growing e-waste crisis, CyberMart has evolved into a trusted source for sustainable electronic components. We work directly with manufacturers and organizations to salvage and refurbish components that would otherwise go to waste.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <p className="text-muted-foreground mb-6">
            Since our inception, we've helped divert thousands of electronic components from landfills, contributing to a significant reduction in e-waste. Our refurbishment process not only saves resources but also makes technology more accessible to everyone.
          </p>
        </div>
      </div>
    </main>
  );
}