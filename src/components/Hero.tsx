import { ArrowRight, Sparkles } from "lucide-react";
import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-20 lg:pb-36 lg:pt-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[#dfe0ff]/30 blur-[120px]" />

      <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <div className="max-w-[700px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/80 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#666] backdrop-blur-sm">
            <Sparkles size={13} className="text-[#5b5cf0]" />
            AcdyOn AI Lab
          </div>

          <h1 className="max-w-[760px] text-[clamp(3.4rem,6.8vw,6.6rem)] font-semibold leading-[0.91] tracking-[-0.07em] text-[#111]">
            Your next career move,
            <span className="block text-[#888]">
              mapped by AI.
            </span>
          </h1>

          <p className="mt-8 max-w-[590px] text-base leading-7 text-[#666] sm:text-lg sm:leading-8">
            Turn your current skills and career goal into a focused learning
            path with clear next steps and practical progression.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#start"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#242424]"
            >
              Build My Path
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-black/[0.09] bg-white/80 px-6 py-3.5 text-sm font-medium text-[#222] transition-colors duration-200 hover:bg-white"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-[#8a8a8a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5b5cf0]" />
            Concept product experience for the AcdyOn frontend challenge
          </div>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}