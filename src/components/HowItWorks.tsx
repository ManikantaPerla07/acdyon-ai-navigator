"use client";

import { ArrowRight, Goal, Map, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Tell us where you are",
    description:
      "Start with your current skills, experience and the direction you're exploring.",
  },
  {
    number: "02",
    icon: Goal,
    title: "Choose where you want to go",
    description:
      "Select the role or capability you're working toward so the path has a clear destination.",
  },
  {
    number: "03",
    icon: Map,
    title: "Get your next steps",
    description:
      "Navigator turns the gap into a focused progression of practical areas to work on next.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a8a]">
            How it works
          </p>

          <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111]">
            From where you are
            <span className="block text-[#888]">to what comes next.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#696969]">
            The experience stays simple: understand your starting point, define
            the destination, then focus on the few things that matter next.
          </p>
        </div>

        <div className="relative mt-16 lg:mt-20">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[16px] right-[16px] top-[30px] hidden h-px bg-black/[0.09] lg:block" />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  <div className="relative z-10 flex h-[62px] w-[62px] items-center justify-center rounded-full border border-black/[0.08] bg-[#f5f5f2]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111] text-white">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="mt-7">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9a9a9a]">
                        Step {step.number}
                      </p>

                      {index < steps.length - 1 && (
                        <ArrowRight
                          size={17}
                          className="hidden text-[#b0b0b0] lg:block"
                        />
                      )}
                    </div>

                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#171717] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#737373]">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}