import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Ecosystem from "@/components/Ecosystem";
import Companies from "@/components/Companies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Ecosystem />
      <Companies />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
