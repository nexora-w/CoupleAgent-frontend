import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-8">
          <div>
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
              <h1 className="text-base sm:text-lg font-bold">CoupleAgent</h1>
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                The Best AI Assistant for Couples
              </p>
            </div>
          </div>

          <div className="flex items-start justify-between gap-12">
            <div className="md:col-span-1">
              <h3 className="font-bold text-white text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-bold text-white text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-policy"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    AI Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-bold text-white text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-bold text-white text-lg mb-4">Social</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CoupleAgent. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
