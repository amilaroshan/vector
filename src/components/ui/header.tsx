"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`container border border-gray-100 py-4 px-4 fixed top-4 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg" 
          : "bg-background"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-space-grotesk font-bold text-xl">
             <img src="/vector.svg" alt="" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button 
                className="flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                onBlur={() => setTimeout(() => setUseCasesOpen(false), 100)}
              >
                Use Cases <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {useCasesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-48 bg-background rounded-md shadow-lg border z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2">
                      <Link 
                        href="/usecases/sales" 
                        className="block px-4 py-2 text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        Sales
                      </Link>
                      <Link 
                        href="/usecases/hr" 
                        className="block px-4 py-2 text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        HR
                      </Link>
                      <Link 
                        href="/usecases/finance" 
                        className="block px-4 py-2 text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        Finance
                      </Link>
                      <Link 
                        href="/usecases/customer-support" 
                        className="block px-4 py-2 text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        Customer Support
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/blogs" className="text-sm font-bold  hover:text-foreground transition-colors">
              Blogs
            </Link>
            <Link href="/integrations" className="text-sm font-bold  hover:text-foreground transition-colors">
              Integrations
            </Link>
            <Link href="/security" className="text-sm font-bold  hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="/events" className="text-sm font-bold  hover:text-foreground transition-colors">
              Events
            </Link>
            <Link href="/pricing" className="text-sm font-bold  hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="font-bold">
              <Link href="/login">Log in</Link>
            </Button>
            <Button variant="default" size="sm" asChild className="font-bold">
              <Link href="/signup">Book an intro</Link>
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <button 
                    className="flex items-center text-sm font-bold text-foreground"
                    onClick={() => setUseCasesOpen(!useCasesOpen)}
                  >
                    Use Cases <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${useCasesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {useCasesOpen && (
                      <motion.div 
                        className="pl-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link 
                          href="/usecases/sales" 
                          className="block py-1 text-sm font-bold "
                        >
                          Sales
                        </Link>
                        <Link 
                          href="/usecases/hr" 
                          className="block py-1 text-sm font-bold "
                        >
                          HR
                        </Link>
                        <Link 
                          href="/usecases/finance" 
                          className="block py-1 text-sm font-bold "
                        >
                          Finance
                        </Link>
                        <Link 
                          href="/usecases/customer-support" 
                          className="block py-1 text-sm font-bold "
                        >
                          Customer Support
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link href="/blogs" className="text-sm font-bold text-foreground">
                  Blogs
                </Link>
                <Link href="/integrations" className="text-sm font-bold text-foreground">
                  Integrations
                </Link>
                <Link href="/security" className="text-sm font-bold text-foreground">
                  Security
                </Link>
                <Link href="/events" className="text-sm font-bold text-foreground">
                  Events
                </Link>
                <Link href="/pricing" className="text-sm font-bold text-foreground">
                  Pricing
                </Link>
                
                <div className="flex flex-col space-y-2 pt-2 border-t">
                  <Button variant="ghost" size="sm" asChild className="font-bold">
                    <Link href="/login">Log in</Link>
                  </Button>
                  <Button variant="default" size="sm" asChild className="font-bold">
                    <Link href="/signup">Book an intro</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export { Header }; 