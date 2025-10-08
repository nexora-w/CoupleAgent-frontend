import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Feature from "@/components/Home/Feature";
import Advantages from "@/components/Home/Advantages";
import Price from "@/components/Home/Price";
import Footer from "@/components/Home/Footer";

const Home = () => {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <Header />

        <div className="h-24 lg:h-28"></div>

        <Hero />
        <div className="space-y-24">
          <Feature />

          <Price />

          <Advantages />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
