import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#111]">
      <Navbar />
      <Hero />
      <ProblemSection />
    </main>
  );
}