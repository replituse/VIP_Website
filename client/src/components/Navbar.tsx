import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/VIP_Networks_logo_(2)_1768635368208.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const navbarClasses = `fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 ${
    scrolled ? "bg-background/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-12 h-12 bg-white/10 rounded-full flex items-center justify-center overflow-hidden border border-white/20 group-hover:border-primary/50 transition-colors">
            <img src={logo} alt="VIP Networks" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wider leading-none text-white">VIP</span>
            <span className="text-xs text-primary font-medium tracking-[0.2em] uppercase">Networks</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span 
                className={`text-sm font-medium uppercase tracking-wider cursor-pointer hover:text-primary transition-colors relative py-1
                  ${location === link.href ? "text-primary" : "text-muted-foreground"}
                `}
              >
                {link.name}
                {location === link.href && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" 
                  />
                )}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <button className="px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm uppercase tracking-wide rounded hover:shadow-lg hover:shadow-primary/25 transition-all cursor-pointer">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span 
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium py-2 border-b border-white/5 cursor-pointer
                      ${location === link.href ? "text-primary" : "text-muted-foreground"}
                    `}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
