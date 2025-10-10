import Image from "next/image";
import { FaCheckCircle, FaCreditCard } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative md:px-16 lg:px-20 py-8 z-10 flex items-center mt-12 sm:mt-16 min-h-[70vh] sm:min-h-[80vh] md:bg-[url('/assets/images/landing/hero/hero_bg.png')] bg-cover bg-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Right Content - Mobile First */}
          <div className="relative flex justify-center lg:justify-end mt-0 lg:mt-0 order-1 lg:order-2">
            {/* Main Hero Image with Gradient Background */}
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px]">
              {/* Gradient Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/5 left-1/5 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] bg-[#FF35B5] blur-[50px] sm:blur-[60px] lg:blur-[70px] rounded-full" />
                <div className="absolute bottom-1/6 right-1/6 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] bg-[#00EE08] blur-[50px] sm:blur-[60px] lg:blur-[70px] rounded-full" />
              </div>
              
              {/* Main Hero Image */}
              <div className="relative z-10">
                <Image
                  src="/assets/images/landing/hero/hero.webp"
                  alt="Happy couple looking at phone together"
                  width={700}
                  height={700}
                  className="object-cover w-full h-auto rounded-lg sm:rounded-xl"
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 700px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bvnjMcuq5ZmddNvBuXeX7LsNuRGP2wWJNQ26Jdxmk3dJkh3yNT9OLLzHkpqLDl3wgM2V8ZNMMT3J7nxr+NjR9XOyfZEoLKN/Z9mz7v1n5ksxSPPEBAONGgAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex items-center justify-center lg:justify-start">
                Share AI
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex items-center justify-center lg:justify-start">
                T
                <Image
                  src="/assets/images/landing/solar_heart-bold.png"
                  alt="me"
                  width={50}
                  height={50}
                  className="sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
                />
                gether
              </h1>

              <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto lg:mx-0 px-2 sm:px-0">
                Share conversations, plan your future, and grow stronger as a
                couple with your personal AI assistant that understands both of
                you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 active:scale-95 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform cursor-pointer text-sm sm:text-base min-h-[48px] touch-manipulation">
                Start Free Trial ✨
              </button>
              <button className="border-2 border-white/20 hover:border-white/40 active:scale-95 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:bg-white/5 cursor-pointer text-sm sm:text-base min-h-[48px] touch-manipulation">
                See How It Works
              </button>
            </div>

            {/* Feature Points */}
            <div className="flex gap-4 sm:gap-6 justify-start items-center">
              <div className="flex items-center gap-2 text-gray-300 justify-center sm:justify-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle
                    size={20}
                    className="text-white"
                  />
                </div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 justify-center sm:justify-start">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCreditCard
                    size={20}
                    className="text-white"
                  />
                </div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
