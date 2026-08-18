import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#151515]">
      <Navbar />
      <Hero />
    </main>
  );
}