import ProductPreview from "./ProductPreview";

export default function Hero() {
  return (
    <section className="overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-black/8 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#666]">
            AcdyOn AI Lab
          </div>

          <h1 className="max-w-3xl text-[clamp(3.2rem,7vw,6.5rem)] font-semibold leading-[0.93] tracking-[-0.065em] text-[#151515]">
            Your next career move,
            <span className="text-[#777]"> mapped by AI.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#666] sm:text-lg sm:leading-8">
            Turn your current skills and career goal into a focused learning
            path with clear next steps and practical progression.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-full bg-[#151515] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Build My Path
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-[#151515] transition-colors hover:bg-[#f1f1ed]"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-xs text-[#8a8a8a]">
            A conceptual product experience created for the AcdyOn
            Technologies frontend challenge.
          </p>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}