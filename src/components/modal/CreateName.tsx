"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaTimes, FaMagic } from "react-icons/fa";
import Image from "next/image";
import { GoPeople } from "react-icons/go";
import RippleEffect from "../ui/RippleEffect";
import Link from "next/link";

interface CreateNameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateNameModal: React.FC<CreateNameModalProps> = ({
  isOpen,
  onClose,
}) => {
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
      <div
        className="bg-[#1A1A1F]/80 backdrop-blur-[24px] absolute inset-0 w-full h-full"
        onClick={onClose}
      />
      <div className="bg-[#434343]/80 border border-[#828282] rounded-2xl md:px-14 px-8 py-16 w-full max-w-2xl mx-auto relative">
        <div className="flex items-center justify-center">
          <div className="w-1/5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[#00EE08]/60 w-16 h-16 rounded-full blur-3xl" />
            <Image
              src="/assets/images/modal/wizard-bot.png"
              alt="logo"
              width={100}
              height={100}
              className="w-full h-full object-contain z-10 relative"
            />
          </div>
          <div className="text-center w-4/5">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
              Couple Name Generator
            </h2>
            <p className="text-gray-400 text-sm">Combine to name your Agent</p>
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
              Partner Name
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
                placeholder="Enter partner's name"
                className="w-full pl-14 pr-10 py-2 bg-[#D9D9D9]/20 border border-none rounded-2xl text-white placeholder-white/25 focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-8">
          <RippleEffect
            rippleColor={`#39f03f`}
            className="rounded-2xl md:w-4/5 w-full"
          >
            <button
              type="submit"
              className="w-full bg-[#009305] cursor-pointer hover:bg-[#239e27] text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <FaMagic className="mr-2" />
              Generate Name
            </button>
          </RippleEffect>
        </div>
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
          </div>
          <div className="text-white/25 text-xs pl-4 pt-1">
            Generate Or Enter Your Own
          </div>
          <div className="flex items-center justify-center pt-6 gap-5">
            <RippleEffect
              rippleColor={`#FF35B5`}
              className="rounded-2xl w-full"
            >
              <button
                type="submit"
                className="w-full bg-[#D9D9D9]/10 cursor-pointer hover:bg-[#D9D9D9]/30 text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center transition-colors duration-200"
              >
                Cancel
              </button>
            </RippleEffect>
            <RippleEffect
              rippleColor={`#FF35B5`}
              className="rounded-2xl w-full"
            >
              <button
                type="submit"
                className="w-full bg-[#FF35B5] cursor-pointer hover:bg-[#E474BB] text-white font-semibold py-3 px-6 rounded-2xl flex items-center justify-center transition-colors duration-200"
              >
                Use Name
              </button>
            </RippleEffect>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNameModal;
