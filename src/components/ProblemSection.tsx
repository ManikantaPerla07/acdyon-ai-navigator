import {
  ArrowUpRight,
  Compass,
  Layers3,
  Target,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Compass,
    title: "See the gap",
    description:
      "Understand which capabilities matter most between where you are and where you want to go.",
  },
  {
    number: "02",
    icon: Target,
    title: "Focus your effort",
    description:
      "Turn a broad career goal into a smaller set of meaningful next steps.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Build toward the outcome",
    description:
      "Connect learning to practical progression instead of an endless list of things to study.",
  },
];

export default function ProblemSection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a8a]">
              The problem
            </p>

            <h2 className="mt-5 max-w-xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111]">
              Too much to learn.
              <span className="block text-[#888]">
                No clear next step.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#696969]">
              Career growth can become a collection of disconnected skills,
              courses and advice. The real challenge is knowing what matters
              next.
            </p>

            <a
              href="#how-it-works"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#222] transition-colors hover:text-[#5b5cf0]"
            >
              See how Navigator approaches it
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.number}
                  className="group rounded-[24px] border border-black/[0.07] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/[0.12] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f4f4f2] text-[#333] transition-colors duration-300 group-hover:bg-[#111] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base font-semibold tracking-[-0.02em] text-[#171717] sm:text-lg">
                          {benefit.title}
                        </h3>

                        <span className="text-[10px] font-semibold tracking-[0.12em] text-[#aaa]">
                          {benefit.number}
                        </span>
                      </div>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#737373]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}