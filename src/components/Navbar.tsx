"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "A Propos" },
    { href: "#gallery", label: "Galerie" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass-dark shadow-lg py-3" : "bg-transparent py-3 md:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl md:text-4xl font-bold text-white transition-all duration-300 hover:scale-105 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              GalleryDes3Bornes
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="glass text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium border border-white/30"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/90 backdrop-blur-xl rounded-xl p-6 space-y-4 animate-slide-up border border-white/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/90 hover:text-white transition-colors duration-300 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="block glass text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 text-center font-medium border border-white/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Réserver
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
