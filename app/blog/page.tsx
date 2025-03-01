"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Electronics",
    excerpt: "Exploring how refurbished components are shaping a more sustainable tech industry.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "March 15, 2025",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Getting Started with Arduino: A Beginner's Guide",
    excerpt: "Everything you need to know about working with refurbished Arduino boards.",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "March 10, 2025",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Impact of E-Waste on Our Environment",
    excerpt: "Understanding the environmental consequences of electronic waste and how we can help.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "March 5, 2025",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Recycling Your Old Laptop: A Step-by-Step Guide",
    excerpt: "How to safely recycle your laptop and give it a second life.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "February 25, 2025",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Exploring Solar-Powered Gadgets for a Greener Future",
    excerpt: "A look into solar-powered electronic devices that help reduce our carbon footprint.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "February 20, 2025",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "The Role of IoT in Sustainable Agriculture",
    excerpt: "How IoT technology is making farming practices more sustainable.",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    date: "February 10, 2025",
    readTime: "7 min read"
  }
];

export default function BlogPage() {
  return (
    <main className="container py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link href="#" className="text-primary hover:text-primary/90 font-semibold flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          More articles coming soon. Stay tuned for updates on sustainable electronics and eco-friendly tech solutions.
        </p>
      </div>
    </main>
  );
}
