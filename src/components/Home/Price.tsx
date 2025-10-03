import Image from "next/image";
import RippleEffect from "../ui/RippleEffect";

const priceCards = [
  {
    title: "Together Plan",
    price: "$9.99",
    features: [
      "Unlimited shared conversations",
      "5 conversation threads",
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
    <div className="bg-[#D9D9D9]/5 rounded-2xl p-12 border border-[#525252] backdrop-blur-[24px] w-[500px] h-[550px] flex flex-col">
      <h3 className="text-3xl font-bold mb-4 text-center mt-6">
        {priceCard.title}
      </h3>
      <p className="text-gray-300 flex justify-start items-center gap-1 mb-4">
        <span className="text-4xl font-bold">{priceCard.price}</span>
        <span className="text-base">/</span>
        <span className="text-base">month</span>
      </p>
      <ul className="list-disc list-inside text-gray-300 text-left mb-4 text-lg space-y-2 flex-grow">
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
    <section id="pricing" className="container mx-auto px-12 md:px-28 lg:px-32 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple pricing for couples</h1>
        <p className="text-gray-300">
          One subscription covers both partners. Cancel anytime.
        </p>
        <div className="relative w-full">
          <Image
            src="/assets/images/landing/price/1.png"
            alt="heart"
            width={385}
            height={348}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
          />
          <Image
            src="/assets/images/landing/price/2.png"
            alt="heart"
            width={343}
            height={402}
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-12 items-center">
        {priceCards.map((priceCard) => (
          <PriceCard key={priceCard.title} priceCard={priceCard} />
        ))}
      </div>
    </section>
  );
};

export default Price;
