"use client";

import Link from "next/link";
import { Menu, X, ShoppingBag, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { CartSheet } from "./cart-sheet";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // Fetch the authenticated user
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  // Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/login");
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Cybermart.png"
            alt="CyberMart Logo"
            width={240}
            height={120}
            priority
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          {/* Admin Panel Link */}
          <Link
            href="/admin"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Admin Panel
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <CartSheet />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Show Sign In or Logout based on authentication status */}
          {user ? (
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:bg-secondary rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Admin Panel Link */}
            <Link
              href="/admin"
              className="block px-3 py-2 text-base font-medium hover:bg-secondary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
