"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { careerPaths } from "@/data/careerPaths";

const roles = Object.keys(careerPaths);

export default function ProductPreview() {
  const [selectedRole, setSelectedRole] = useState("AI Product Engineer");

  const path = careerPaths[selectedRole];

  return (
    <div
  id="product"
  className="relative mx-auto w-full max-w-[650px]"
>
      {/* Ambient light */}
      <div className="pointer-events-none absolute -inset-8 rounded-[48px] bg-[#dfe1ff]/40 blur-[90px]" />

      {/* Main product window */}
      <div className="relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-white shadow-[0_28px_70px_rgba(0,0,0,0.10)] sm:rounded-[30px] sm:shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111] text-white">
              <Sparkles size={16} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888]">
                AI Navigator
              </p>

              <p className="mt-0.5 text-xs font-medium text-[#222]">
                Career intelligence
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-50 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-semibold text-emerald-700">
              PATH READY
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="p-4 sm:p-5 md:p-6">
          {/* Intro */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#999]">
                Your target
              </p>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={path.role}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-[#111] sm:text-[28px]"
                >
                  {path.role}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div className="hidden rounded-xl border border-black/[0.06] bg-[#f7f7f5] px-3 py-2 sm:block">
              <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#999]">
                Readiness
              </p>
              <p className="mt-0.5 text-sm font-semibold text-[#111]">
                {path.progress}%
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={`${path.role}-summary`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 max-w-lg text-sm leading-6 text-[#6d6d6d]"
            >
              {path.summary}
            </motion.p>
          </AnimatePresence>

          {/* Role selector */}
          <div className="mt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#999]">
              Choose a direction
            </p>

            <div
              className="mt-3 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Career direction"
            >
              {roles.map((role) => {
                const active = role === selectedRole;

                return (
                  <button
                    key={role}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedRole(role)}
                    className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                      active
                        ? "border-[#111] bg-[#111] text-white shadow-sm"
                        : "border-black/[0.08] bg-[#fafaf8] text-[#666] hover:border-black/[0.16] hover:bg-white hover:text-[#111]"
                    }`}
                  >
                    {role}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Path */}
          <div className="mt-5 overflow-hidden rounded-[22px] border border-black/[0.07] bg-[#f7f7f5]">
            <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3.5 sm:px-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#999]">
                  Recommended path
                </p>
                <p className="mt-0.5 text-xs text-[#777]">
                  Your next three focus areas
                </p>
              </div>

              <ArrowUpRight size={17} className="text-[#888]" />
            </div>

            <div className="p-3 sm:p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={path.role}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  {path.steps.map((step, index) => {
                    const completed = index === 0;

                    return (
                      <div
                        key={step.title}
                        className="group flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white p-3.5 transition-all duration-200 hover:border-black/[0.12] hover:shadow-sm sm:p-4"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                            completed
                              ? "bg-[#111] text-white"
                              : "bg-[#f1f1ef] text-[#666]"
                          }`}
                        >
                          {completed ? (
                            <Check size={15} />
                          ) : (
                            <span className="text-[11px] font-semibold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="truncate text-sm font-semibold tracking-[-0.01em] text-[#171717]">
                              {step.title}
                            </p>

                            {completed && (
                              <span className="shrink-0 rounded-full bg-[#f0f0ee] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#777]">
                                Foundation
                              </span>
                            )}
                          </div>

                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#7a7a7a]">
                            {step.description}
                          </p>
                        </div>

                        <ChevronRight
                          size={16}
                          className="shrink-0 text-[#aaa] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#555]"
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-[#555]">
                  Path readiness
                </p>

                <p className="mt-0.5 text-[11px] text-[#999]">
                  Based on your current direction
                </p>
              </div>

              <span className="text-sm font-semibold text-[#111]">
                {path.progress}%
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/[0.06]">
              <motion.div
                key={path.progress}
                initial={{ width: 0 }}
                animate={{ width: `${path.progress}%` }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full rounded-full bg-[#111]"
              />
            </div>
          </div>

          {/* Bottom insight */}
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#dedeff] bg-[#f5f5ff] px-3.5 py-3 sm:mt-5 sm:px-4 sm:py-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#5b5cf0] shadow-sm">
              <Sparkles size={14} />
            </div>

            <p className="text-xs leading-5 text-[#62627a]">
              Your path is focused on the skills that move you closer to your
              selected role.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative floating label */}
      <div className="pointer-events-none absolute -bottom-5 -left-4 hidden rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur sm:block">
        <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#999]">
          AI-generated
        </p>

        <p className="mt-1 text-xs font-medium text-[#333]">
          Personalized progression
        </p>
      </div>
    </div>
  );
}