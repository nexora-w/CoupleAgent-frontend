"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RippleEffect from "../ui/RippleEffect";

const advantages = [
  {
    title: "24/7 Relationship Support",
    description:
      "Get instant relationship advice and support whenever you need it, day or night.",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Advanced AI analyzes your relationship patterns to provide personalized recommendations.",
  },
  {
    title: "Privacy & Security",
    description:
      "Your conversations and data are encrypted and protected with enterprise-grade security.",
  },
  {
    title: "Personalized Guidance",
    description:
      "Tailored advice based on your unique relationship dynamics and communication style.",
  },
  {
    title: "Easy Communication",
    description:
      "Seamless messaging platform designed to enhance couple communication and understanding.",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your relationship growth with detailed insights and milestone celebrations.",
  },
  {
    title: "Expert-Backed Advice",
    description:
      "Relationship guidance based on proven psychological principles and expert knowledge.",
  },
  {
    title: "Flexible & Accessible",
    description:
      "Access your relationship tools anywhere, anytime, on any device with our responsive platform.",
  },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose CoupleAgent?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Discover the advantages that make CoupleAgent the perfect companion for your relationship journey
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="custom-swiper"
        >
          {advantages.map((advantage, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#D9D9D9]/5 rounded-lg p-6 border border-[#525252] hover:bg-[#D9D9D9]/10 transition-all duration-300 transform h-48 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-white/50 leading-relaxed flex-1">
                  {advantage.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center py-10">
          <RippleEffect rippleColor={`#E474BB`} className="rounded-lg">
            <button
              className={`bg-[#FF35B5] text-white cursor-pointer px-6 py-2.5 rounded-lg transition-all duration-200 transform w-full`}
            >
              Start Free Trial
            </button>
          </RippleEffect>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
