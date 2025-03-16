"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "./button";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-16 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter subscription */}
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo and description */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <img src="/vector.svg" alt="Vector" className="h-8" />
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Onboard a digital workforce for your team that drives human results.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Navigation links */}
            <div>
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</Link></li>
                <li><Link href="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Events</Link></li>
                <li><Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Legal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Vector. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer }; 