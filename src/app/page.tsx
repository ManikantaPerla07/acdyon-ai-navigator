import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ExamplePath from "@/components/ExamplePath";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#111]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <ExamplePath />
      <FinalCTA />
      <Footer />
    </main>
  );
}