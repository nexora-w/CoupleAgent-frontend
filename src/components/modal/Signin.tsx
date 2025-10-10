"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import RippleEffect from "../ui/RippleEffect";
import { GoPeople } from "react-icons/go";

interface SigninModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SigninModal: React.FC<SigninModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    coupleName: "",
    email: "",
    partnerEmail: "",
    password: "",
    confirmPassword: "",
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialLogin = (provider: "google" | "apple") => {
    console.log(`Login with ${provider}`);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className="bg-[#1A1A1F]/80 backdrop-blur-[24px] absolute inset-0 w-full h-full"
        onClick={onClose}
      />
      <div className="bg-[#434343]/80 border border-[#828282] rounded-2xl md:px-14 px-8 py-16 w-full max-w-2xl mx-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <FaTimes className="text-xl" />
        </button>
        <div className="mr-4 pl-8">
          <Image
            src="/assets/images/logo/logo.png"
            alt="heart"
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center -mt-4 mb-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Sign in to your CoupleAgent</p>
          </div>
        </div>

        <div className="space-y-6 mt-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2 pl-4">
              Your Name
            </label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <GoPeople className="text-white" />
              </span>
              <input
                type="text"
                name="coupleName"
                value={formData.coupleName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full pl-14 pr-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2 pl-4">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <GoPeople className="text-white" />
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full pl-14 pr-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-6">
          <RippleEffect rippleColor={`#FF35B5`} className="rounded-2xl w-full">
            <button
              type="submit"
              className="w-full bg-[#FF35B5] cursor-pointer hover:bg-[#E474BB] text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center transition-colors duration-200"
            >
              Sign In
              <FaArrowRight className="ml-2" />
            </button>
          </RippleEffect>
        </div>

        <div className="mt-2 w-full mx-auto">
          <div className="text-center text-white/75 text-sm mb-4 relative flex items-center justify-center gap-2">
            <div className="absolute left-0 h-[1px] w-1/3 bg-white/25" />
            Or continue with
            <div className="absolute right-0 h-[1px] w-1/3 bg-white/25" />
          </div>

          <div className="flex space-x-3 w-full mx-auto">
            <button
              onClick={() => handleSocialLogin("google")}
              className="flex-1 bg-[#D9D9D9]/10 cursor-pointer border border-none text-white py-2 px-4 rounded-2xl flex items-center justify-center hover:bg-[#D9D9D9]/20 transition-colors duration-200"
            >
              <FcGoogle className="mr-2 text-xl" />
              Google
            </button>
            <button
              onClick={() => handleSocialLogin("apple")}
              className="flex-1 bg-[#D9D9D9]/10 cursor-pointer border border-none text-white py-2 px-4 rounded-2xl flex items-center justify-center hover:bg-[#D9D9D9]/20 transition-colors duration-200"
            >
              <FaApple className="mr-2 text-xl" />
              Apple
            </button>
          </div>
        </div>

        <div className="mt-6 text-center flex items-center justify-center gap-2">
          <span className="text-white/75">Don&apos;t have an account?</span>
          <button className="text-[#FF35B5] hover:underline cursor-pointer font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
