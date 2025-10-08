import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8 sm:py-12 lg:py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
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
            <div className="mt-2">
              <p className="text-gray-300 text-sm">
                The Best AI Assistant for Couples
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:flex lg:items-start lg:justify-between gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <h3 className="font-bold text-white text-base sm:text-lg mb-3 sm:mb-4">Product</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-white text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ai-policy"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    AI Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-white text-base sm:text-lg mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-white text-base sm:text-lg mb-3 sm:mb-4">Social</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              © 2025 CoupleAgent. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;