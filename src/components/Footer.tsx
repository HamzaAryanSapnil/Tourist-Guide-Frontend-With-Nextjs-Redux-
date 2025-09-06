"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 grid gap-8 lg:grid-cols-4 w-full justify-items-end">
        {/* Brand Section */}
        <div className="space-y-3">
          <div className="w-fit">
            <Logo />
          </div>
          <p className="text-sm text-muted-foreground">
            Discover the world with us. Explore tours, adventures, and
            unforgettable memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-tours"
                className="hover:text-primary transition-colors"
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Resources</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link
                href="/faq"
                className="hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="" >
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex space-x-4 text-muted-foreground">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="hover:text-primary transition-colors"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tourvisto. All rights reserved.
      </div>
    </footer>
  );
}
