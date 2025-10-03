import Image from "next/image";
import Heart from "../svg/Heart";

const features = [
  {
    id: 1,
    title: "Shared Chat Agent",
    description: "Both partners can chat with your AI assistant in the same conversation, creating shared understanding and memories.",
    image: "/assets/images/landing/card/1.png"
  },
  {
    id: 2,
    title: "Separate Threads",
    description: "Organize conversations by topic - finances, meals, goals, or anything that matters to your relationship.",
    image: "/assets/images/landing/card/2.png"
  },
  {
    id: 3,
    title: "Daily Briefings",
    description: "Start each day aligned with personalized briefings about your shared goals, tasks, and important moments.",
    image: "/assets/images/landing/card/3.png"
  },
  {
    id: 4,
    title: "Forever Memories",
    description: "Upload and organize receipts, photos, and documents. Your AI remembers everything important to your journey.",
    image: "/assets/images/landing/card/4.png"
  },
  {
    id: 5,
    title: "Always Secure",
    description: "Your conversations and memories are encrypted and private. Only you and your partner have access.",
    image: "/assets/images/landing/card/5.png"
  },
  {
    id: 6,
    title: "Built for Love",
    description: "Every feature is designed to strengthen your bond and help you navigate life's adventures together.",
    image: "/assets/images/landing/card/6.png"
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="bg-[#D9D9D9]/5 rounded-lg p-6 border border-[#525252] hover:bg-[#D9D9D9]/10 transition-colors duration-300">
      <div>
        <div className="relative w-full h-72 mb-2">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={95}
            priority={feature.id <= 3}
          />
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <Heart />
          </div>
        </div>
        <div className="relative flex justify-center mb-2 h-[50px]">
          <div className="w-[118%] max-w-none absolute -left-10">
            <Image 
              src="/assets/images/landing/card/bar.svg" 
              alt={feature.title} 
              width={200} 
              height={70} 
              className="w-full"
              priority
            />
            <Image 
              src="/assets/images/landing/card/vector.svg" 
              alt={feature.title} 
              width={100} 
              height={30} 
              className="w-[70%] absolute left-1/10 top-2"
              priority
              quality={95}
            />
            <div className="absolute sm:left-2/5 left-[45%] -translate-x-1/2 top-1/3 -translate-y-1/2 text-center text-[#FF35B5] font-bold">
              {feature.title}
            </div>
          </div>
        </div>
        <p className="py-3 font-inter text-white text-base leading-[33px]">{feature.description}</p>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section id="features" className="sm:container mx-auto md:px-28 lg:px-32 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Everything you need to grow together
        </h1>
        <p className="text-gray-300">
          CoupleAgent brings you closer with intelligent features designed for
          two hearts, one shared journey.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-12">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
