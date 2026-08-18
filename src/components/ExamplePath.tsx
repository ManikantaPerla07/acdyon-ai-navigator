"use client";

import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDot,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  "React",
  "Python",
  "REST APIs",
];

const gaps = [
  "AI evaluation",
  "ML deployment",
  "AI architecture",
];

const nextSteps = [
  {
    number: "01",
    title: "Production ML",
    description: "Move models from experiments into reliable applications.",
  },
  {
    number: "02",
    title: "AI Architecture",
    description: "Design the systems that connect models, APIs and products.",
  },
  {
    number: "03",
    title: "LLM Evaluation",
    description: "Measure quality and improve AI-powered user experiences.",
  },
];

export default function ExamplePath() {
  return (
    <section
      id="example"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#777]">
            <Sparkles size={13} className="text-[#5b5cf0]" />
            Illustrative example
          </div>

          <h2 className="mt-6 text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111]">
            See a path
            <span className="block text-[#888]">take shape.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#696969]">
            Navigator turns a career direction into a clearer picture of
            strengths, priority gaps and practical areas to focus on next.
          </p>
        </div>

        {/* Main visual */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4e5ff]/40 blur-[100px]" />

          <div className="overflow-hidden rounded-[30px] border border-black/[0.07] bg-white shadow-[0_35px_100px_rgba(0,0,0,0.08)]">
            {/* Top bar */}
            <div className="flex flex-col gap-5 border-b border-black/[0.06] px-5 py-5 sm:px-7 sm:py-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                  Career direction
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-base font-semibold tracking-[-0.02em] text-[#111] sm:text-lg">
                    Software Engineer
                  </span>

                  <ArrowRight
                    size={15}
                    className="text-[#999]"
                  />

                  <span className="text-base font-semibold tracking-[-0.02em] text-[#5b5cf0] sm:text-lg">
                    AI Product Engineer
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start rounded-full border border-black/[0.07] bg-[#fafaf8] px-3 py-2 md:self-auto">
                <CircleDot size={13} className="text-[#5b5cf0]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[#666]">
                  Example pathway
                </span>
              </div>
            </div>

            {/* Path content */}
            <div className="grid md:grid-cols-3">
              {/* Current strengths */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4 }}
                className="border-b border-black/[0.06] p-5 sm:p-7 md:border-b-0 md:border-r"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                    Current strengths
                  </p>

                  <span className="text-[10px] font-semibold text-[#aaa]">
                    03
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#171717]">
                  What you already have
                </h3>

                <div className="mt-6 space-y-2">
                  {strengths.map((strength) => (
                    <div
                      key={strength}
                      className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-[#f8f8f6] px-3.5 py-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                        <Check size={13} className="text-[#222]" />
                      </span>

                      <span className="text-sm font-medium text-[#444]">
                        {strength}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Priority gaps */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="border-b border-black/[0.06] p-5 sm:p-7 md:border-b-0 md:border-r"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                    Priority gaps
                  </p>

                  <span className="text-[10px] font-semibold text-[#aaa]">
                    03
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#171717]">
                  What needs attention
                </h3>

                <div className="mt-6 space-y-2">
                  {gaps.map((gap) => (
                    <div
                      key={gap}
                      className="flex items-center gap-3 rounded-xl border border-[#e3e3ff] bg-[#f7f7ff] px-3.5 py-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#5b5cf0]">
                        <CircleDot size={13} />
                      </span>

                      <span className="text-sm font-medium text-[#444]">
                        {gap}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Next steps */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="p-5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999]">
                    Next focus areas
                  </p>

                  <ArrowRight size={15} className="text-[#aaa]" />
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#171717]">
                  What comes next
                </h3>

                <div className="mt-6 space-y-2">
                  {nextSteps.map((step) => (
                    <div
                      key={step.number}
                      className="rounded-xl border border-black/[0.06] bg-[#fafaf8] px-3.5 py-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#111] text-[9px] font-semibold text-white">
                          {step.number}
                        </span>

                        <div>
                          <p className="text-sm font-semibold text-[#222]">
                            {step.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-[#777]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom insight */}
            <div className="border-t border-black/[0.06] bg-[#f8f8f6] px-5 py-4 sm:px-7">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#5b5cf0] shadow-sm">
                  <Sparkles size={14} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#333]">
                    The idea is simple
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#777]">
                    Start with what you have, identify what matters, then focus
                    on the next meaningful step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connector arrows — desktop only */}
          <div className="pointer-events-none absolute left-1/3 top-1/2 hidden -translate-y-1/2 lg:block">
            <ArrowDown size={18} className="text-[#c5c5c5]" />
          </div>
        </div>
      </div>
    </section>
  );
}