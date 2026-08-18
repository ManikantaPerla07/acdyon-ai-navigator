"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { careerPaths } from "@/data/careerPaths";

const roles = Object.keys(careerPaths);

export default function ProductPreview() {
  const [selectedRole, setSelectedRole] = useState("AI Product Engineer");

  const path = careerPaths[selectedRole];

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[32px] bg-[#dfe7ff]/40 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
        <div className="border-b border-black/6 px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#888]">
                Your AI career path
              </p>
              <p className="mt-1 text-sm font-medium text-[#181818]">
                Personalized progression
              </p>
            </div>

            <ArrowUpRight className="h-5 w-5 text-[#777]" />
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-6">
            <p className="text-xs text-[#8a8a8a]">Choose a direction</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {roles.map((role) => {
                const active = role === selectedRole;

                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`rounded-full border px-3 py-2 text-xs font-medium transition-all ${
                      active
                        ? "border-[#151515] bg-[#151515] text-white"
                        : "border-black/10 bg-[#f8f8f6] text-[#666] hover:border-black/20 hover:text-[#151515]"
                    }`}
                  >
                    {role}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-black/7 bg-[#f7f7f4] p-5">
            <p className="text-xs font-medium text-[#8a8a8a]">
              Target direction
            </p>

            <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-[#151515]">
              {path.role}
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#686868]">
              {path.summary}
            </p>

            <div className="mt-6 space-y-3">
              {path.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-black/6 bg-white p-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#151515] text-[11px] font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#181818]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#777]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#777]">Path readiness</span>
                <span className="font-semibold text-[#151515]">
                  {path.progress}%
                </span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/8">
                <div
                  className="h-full rounded-full bg-[#151515] transition-all duration-500"
                  style={{ width: `${path.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}