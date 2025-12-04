import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume" },
  { name: "Certifications", href: "/certifications" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold font-display tracking-tighter hover:text-primary transition-colors cursor-pointer">
            SAITEJA<span className="text-primary">.</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-wide hover:text-primary",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className={cn(
                  "text-lg font-medium transition-colors",
                  location === item.href ? "text-primary" : "text-foreground/80"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
