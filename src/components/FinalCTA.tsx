import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="start"
      className="px-5 py-20 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[30px] border border-black/[0.07] bg-[#111] px-6 py-14 text-white shadow-[0_30px_90px_rgba(0,0,0,0.12)] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-[320px] w-[320px] rounded-full bg-[#6b6cf5]/30 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-24 h-[280px] w-[280px] rounded-full bg-[#9a9bf8]/10 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
              <Sparkles size={13} className="text-[#a4a5ff]" />
              Your next step
            </div>

            <h2 className="mt-7 text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.93] tracking-[-0.06em]">
              Know where you're
              <span className="block text-white/45">
                going next.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Start with your goal. Let AI turn the gap between where you are
              and where you want to be into a focused next step.
            </p>

            <a
              href="product"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f2f2f2]"
            >
              Build My Path

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}