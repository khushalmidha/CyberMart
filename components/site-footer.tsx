import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/Cybermart.png" alt="CyberMart Logo" width={200} height={200} className="h-28 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              Sustainable electronics for a better future. Join us in reducing e-waste
              and building a more sustainable world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary">Shipping Policy</Link></li>
              <li><Link href="/refund" className="text-sm text-muted-foreground hover:text-primary">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and eco-tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border rounded-md bg-background"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CyberMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
