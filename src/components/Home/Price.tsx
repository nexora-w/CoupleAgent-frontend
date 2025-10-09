"use client";

import Image from "next/image";
import RippleEffect from "../ui/RippleEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const priceCards = [
  {
    title: "Together Plan",
    price: "$9.99",
    features: [
      "Unlimited shared conversations",
      "6 conversation threads",
      "Daily briefings",
      "Basic file storage (1GB)",
    ],
    buttonText: "Upgrade Now",
    buttonColor: "bg-[#FF35B5]",
    buttonRippleColor: "#E474BB",
  },
  {
    title: "Better Together Plan",
    price: "$14.99",
    features: [
      "Everything in Together Plan",
      "Unlimited conversation threads",
      "File uploads & photo storage (5GB)",
      "Calendar sync & notifications",
      "Priority support",
    ],
    buttonText: "Upgrade Now",
    buttonColor: "bg-[#009305]",
    buttonRippleColor: "#4FBF53",
  },
];

const PriceCard = ({ priceCard }: { priceCard: (typeof priceCards)[0] }) => {
  return (
    <div className="bg-[#D9D9D9]/5 rounded-2xl p-6 md:p-12 border border-[#525252] backdrop-blur-[24px] w-full max-w-[500px] h-[500px] flex flex-col relative">
      {/* Bookmark image for Better Together Plan */}
      {priceCard.title === "Better Together Plan" && (
        <div className="absolute -top-8 -left-5.5 z-10">
          <Image
            src="/assets/images/landing/price/bookmark.svg"
            alt="Most Popular"
            width={80}
            height={80}
            className="w-40 h-40"
          />
        </div>
      )}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center mt-4 md:mt-6">
        {priceCard.title}
      </h3>
      <p className="text-gray-300 flex justify-start items-center gap-1 mb-4">
        <span className="text-3xl md:text-4xl font-bold">
          {priceCard.price}
        </span>
        <span className="text-base">/</span>
        <span className="text-base">month</span>
      </p>
      <ul className="list-disc list-inside text-gray-300 text-left mb-4 text-base md:text-lg space-y-2 flex-grow">
        {priceCard.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="flex justify-center items-center py-5 mt-auto">
        <RippleEffect
          rippleColor={`${priceCard.buttonRippleColor}`}
          className="w-full rounded-lg"
        >
          <button
            className={`${priceCard.buttonColor} text-white cursor-pointer px-6 py-2.5 rounded-lg transition-all duration-200 transform w-full`}
          >
            {priceCard.buttonText}
          </button>
        </RippleEffect>
      </div>
    </div>
  );
};

const Price = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/5 w-[40px] h-[40px] bg-[#FF35B5] blur-[90px] rounded-full" />
        <div className="absolute bottom-0 left-1/7 w-[80px] h-[80px] bg-[#00EE08] blur-[70px] rounded-full" />
      </div>
      <section
        id="pricing"
        className="sm:container mx-auto md:px-16 lg:px-20 py-8"
      >
        <div className="text-center mb-16">
          <h1 className="text-2xl lg:text-5xl font-bold mb-4">
            Simple pricing for couples
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            One subscription covers both partners. Cancel anytime.
          </p>
          <div className="relative w-full">
            <Image
              src="/assets/images/landing/price/1.png"
              alt="heart"
              width={385}
              height={348}
              className="md:block hidden absolute top-20 left-40 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-auto -z-10"
            />
            <Image
              src="/assets/images/landing/price/2.png"
              alt="heart"
              width={343}
              height={402}
              className="md:block hidden absolute top-20 right-40 translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-auto -z-10"
            />
          </div>
        </div>
        {/* Mobile Swiper */}
        <div className="block md:hidden px-4 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="custom-swiper"
          >
            {priceCards.map((priceCard) => (
              <SwiperSlide key={priceCard.title} className="!pb-8">
                <div className="!w-full p-3">
                  <PriceCard priceCard={priceCard} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden md:flex flex-col lg:flex-row justify-center gap-12 items-center pt-10">
          {priceCards.map((priceCard) => (
            <PriceCard key={priceCard.title} priceCard={priceCard} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Price;
