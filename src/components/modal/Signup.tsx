"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaTimes, FaMagic } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Image from "next/image";
import RippleEffect from "../ui/RippleEffect";
import Link from "next/link";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    coupleName: "",
    email: "",
    partnerEmail: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
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
      <div className="bg-[#1A1A1F]/80 backdrop-blur-[24px] absolute inset-0 w-full h-full" onClick={onClose} />
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
            <h2 className="text-3xl font-bold text-white mb-2">
              Join CoupleAgent
            </h2>
            <p className="text-gray-400 text-sm">Start your journey together</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Couple Name
            </label>
            <div className="relative">
              <Image
                src="/assets/images/logo/logo-line.svg"
                alt="heart"
                width={25}
                height={25}
                className="absolute left-5 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                name="coupleName"
                value={formData.coupleName}
                onChange={handleInputChange}
                placeholder="Enter your couple name"
                className="w-full pl-14 pr-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none focus:border-pink-500"
              />
              <span className="absolute right-5 top-1/2 transform -translate-y-1/2 border-l border-white/75 pl-5">
                <FaMagic className=" text-white cursor-pointer" />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <div className="md:w-1/2 w-full">
              <label className="block text-white text-sm font-medium mb-2">
                Your Email
              </label>
              <div className="relative">
                <MdOutlineEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none"
                />
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <label className="block text-white text-sm font-medium mb-2">
                Invite Partner
              </label>
              <div className="relative">
                <Image
                  src="/assets/images/logo/logo-line.svg"
                  alt="heart"
                  width={18}
                  height={18}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  name="partnerEmail"
                  value={formData.partnerEmail}
                  onChange={handleInputChange}
                  placeholder="Enter your partner's email"
                  className="w-full pl-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            {/* Password */}
            <div className="md:w-1/2 w-full">
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <TbLockPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="md:w-1/2 w-full">
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <TbLockPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="w-full pl-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-3">
            <RippleEffect rippleColor={`#FF35B5`} className="rounded-2xl md:w-4/5 w-full">
              <button
                type="submit"
                className="w-full bg-[#FF35B5] cursor-pointer hover:bg-[#E474BB] text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center transition-colors duration-200"
              >
                Create Account
                <FaArrowRight className="ml-2" />
              </button>
            </RippleEffect>
          </div>
        </form>

        {/* Or continue with */}
        <div className="mt-2 md:w-4/5 w-full mx-auto">
          <div className="text-center text-white/75 text-sm mb-4 relative flex items-center justify-center gap-2">
            <div className="absolute left-0 h-[1px] w-1/3 bg-white/25" />
            Or continue with
            <div className="absolute right-0 h-[1px] w-1/3 bg-white/25" />
          </div>

          <div className="flex space-x-3 md:w-4/5 w-full mx-auto">
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

        {/* Sign In Link */}
        <div className="mt-6 text-center">
          <span className="text-white/75">Already have an account? </span>
          <button className="text-[#FF35B5] hover:underline cursor-pointer font-medium">
            Sign In
          </button>
        </div>

        {/* Terms and Privacy */}
        <div className="mt-2 flex items-start justify-center">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 mr-3 w-4 h-4 text-[#FF35B5] bg-[#1A1A1F] border-gray-600 rounded focus:ring-[#FF35B5] focus:ring-2"
          />
          <label htmlFor="terms" className="text-gray-400 text-sm">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-[#FF35B5] hover:text-[#E474BB] cursor-pointer hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#FF35B5] hover:text-[#E474BB] cursor-pointer hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
