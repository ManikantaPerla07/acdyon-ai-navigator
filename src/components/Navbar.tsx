import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#f5f5f2]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-[11px] font-semibold text-white">
            A
          </span>

          <span className="text-sm font-semibold tracking-[-0.02em] text-[#111]">
            AcdyOn
          </span>

          <span className="hidden text-sm text-[#8a8a8a] sm:inline">
            AI Navigator
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-[#6d6d6d] transition-colors hover:text-[#111]"
          >
            How it works
          </a>

          <a
            href="#example"
            className="text-sm text-[#6d6d6d] transition-colors hover:text-[#111]"
          >
            Example path
          </a>
        </nav>

        <a
          href="#start"
          className="group inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#242424]"
        >
          Build My Path
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}