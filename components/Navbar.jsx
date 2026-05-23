import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "AI Tools", href: "#ai-tools" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-3">
      <nav className="mx-auto grid h-[76px] max-w-[1280px] grid-cols-[auto_1fr_auto] items-center rounded-full border border-[#6b5fd0] bg-[#5244a7] px-6 shadow-[0_12px_35px_rgba(82,68,167,0.28)] backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[60px] w-[230px] shrink-0">
            <Image
              src="/logo.png"
              alt="SmartBooks AI Logo"
              fill
              priority
              sizes="230px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center justify-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className=" transition hover:text-white"
            >
            <p className="text-white text-[17px] font-semibold "> {item.label}</p> 
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center justify-end md:flex">
          <Link
            href="/demo"
            className="rounded-full bg-white px-7 py-3 text-[15px]  shadow-[0_8px_20px_rgba(255,255,255,0.18)] transition hover:bg-slate-100"
          >
            <p className="font-bold text-[#5244a7] shadow-[0_8px_20px_rgba(255,255,255,0.18)]">Book Demo</p>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-auto mt-3 max-w-[1280px] rounded-3xl border border-[#6b5fd0] bg-[#5244a7] p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/demo"
            onClick={() => setIsOpen(false)}
            className="mt-4 block rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-[#5244a7] transition hover:bg-slate-100"
          >
            Book Demo
          </Link>
        </div>
      )}
    </header>
  );
}