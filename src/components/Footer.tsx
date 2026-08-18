import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 pb-8 pt-4 sm:px-8">
      <div className="mx-auto max-w-[1280px] border-t border-black/[0.07] pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold tracking-[-0.02em] text-[#111]"
            >
              AcdyOn
            </Link>

            <p className="mt-2 max-w-md text-xs leading-5 text-[#888]">
              AI Navigator is a conceptual product experience created for the
              AcdyOn Technologies frontend challenge.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-[#777] transition-colors hover:text-[#111]"
            >
              Product
            </a>

            <a
              href="#how-it-works"
              className="text-xs text-[#777] transition-colors hover:text-[#111]"
            >
              How it works
            </a>

            <a
              href="#example"
              className="text-xs text-[#777] transition-colors hover:text-[#111]"
            >
              Example
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-black/[0.05] pt-5 text-[11px] text-[#999] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 AcdyOn AI Navigator concept.</span>
          <span>Built for the AcdyOn Technologies frontend challenge.</span>
        </div>
      </div>
    </footer>
  );
}