import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative z-10 flex items-center mt-16 min-h-[80vh] bg-[url('/assets/images/landing/hero/hero_bg.png')] bg-cover bg-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight flex items-center">
                Bec
                <Image
                  src="/assets/images/landing/solar_heart-bold.png"
                  alt="me"
                  width={70}
                  height={70}
                />
                me Better
              </h1>
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight flex items-center">
                Together
              </h1>

              <p className="text-base text-gray-300 max-w-lg">
                Share conversations, plan your future, and grow stronger as a
                couple with your personal AI assistant that understands both of
                you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                Start Free Trial ✨
              </button>
              <button className="border-2 border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5">
                See How It Works
              </button>
            </div>

            {/* Feature Points */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                No credit card required
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Hero Image */}
            <div className="relative">
              <Image
                src="/assets/images/landing/hero/hero.webp"
                alt="Happy couple looking at phone together"
                width={700}
                height={700}
                className="object-cover w-full h-full"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bvnjMcuq5ZmddNvBuXeX7LsNuRGP2wWJNQ26Jdxmk3dJkh3yNT9OLLzHkpqLDl3wgM2V8ZNMMT3J7nxr+NjR9XOyfZEoLKN/Z9mz7v1n5ksxSPPEBAONGgAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
