"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navigationLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Advantages", href: "#advantages" },
  ];

  return (
    <header 
      className={`fixed top-0 left-1/2 -translate-x-1/2 transform z-50 backdrop-blur-lg shadow-xl bg-[#D9D9D9]/5 transition-all duration-500 ease-in-out w-[90%] mx-auto rounded-full ${
        isScrolled 
          ? 'mt-4 scale-95' 
          : 'bg-[#D9D9D9]/5 mt-10 scale-100'
      }`}
    >
      <div className="px-8 lg:px-16">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/assets/images/logo/logo.png"
                alt="CoupleAgent Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                priority
              />
            </div>
            <h1 className="text-base sm:text-lg font-bold">
              CoupleAgent
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF35B5] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-foreground/5">
              Sign In
            </button>
            <button className="bg-[#FF35B5] text-white px-6 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors duration-200 mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-foreground/10">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-foreground/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-foreground/10">
              <button className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-foreground/5">
                Sign In
              </button>
              <button className="block w-full bg-[#FF35B5] hover:bg-[#E474BB] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
