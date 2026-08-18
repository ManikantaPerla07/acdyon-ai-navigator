import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/5 bg-[#f7f7f4]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.02em] text-[#151515]"
        >
          AcdyOn <span className="text-[#686868]">AI Navigator</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-[#666] transition-colors hover:text-[#151515]"
          >
            How it works
          </a>

          <a
            href="#example"
            className="text-sm text-[#666] transition-colors hover:text-[#151515]"
          >
            Example path
          </a>
        </nav>

        <a
          href="#start"
          className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Build My Path
        </a>
      </div>
    </header>
  );
}