import React from "react";

export default function SmartBooksFooter() {
  return (
    <footer className="relative mt-24 w-full overflow-hidden bg-[#5a42e8] text-white">
      {/* Top CTA Card */}
      <div className="relative z-20 mx-auto -mt-0 max-w-[1420px] px-4 md:px-8">
        <div className="relative -top-10 flex flex-col items-start justify-between gap-8 rounded-[22px] bg-[#00000075] px-8 py-10 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:flex-row md:items-center md:px-16 md:py-14">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#5a42e8]">
              SmartBooks AI Demo
            </p>

            <h2 className="max-w-[620px] text-[32px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[46px]">
              Meet with a Smart Accounting & Business Software Expert
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex rounded-[12px] bg-black px-8 py-5 text-[16px] font-extrabold text-white shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827]"
          >
            Talk with an expert
          </a>
        </div>
      </div>

      {/* Footer Main */}
      <div className="relative mx-auto max-w-[1420px] px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          {/* Left Area */}
          <div>
            {/* Logo */}
            <div className="mb-14 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center ">
                <img
                  src="/icon.png"
                  alt="SmartBooks AI"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-[28px] font-black leading-none tracking-[-0.04em]">
                  smart
                  <br />
                  books ai
                </h3>
              </div>
            </div>

            {/* Links */}
            <div className="grid max-w-[560px] grid-cols-2 gap-x-10 gap-y-5 text-[15px] font-bold md:grid-cols-3">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#industries">Industries</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#ai-tools">AI Tools</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#demo">Book Demo</FooterLink>
              <FooterLink href="#schools">For Schools</FooterLink>
              <FooterLink href="#restaurants">For Restaurants</FooterLink>
              <FooterLink href="#shops">For Shops</FooterLink>
            </div>
          </div>

          {/* Right Big Text */}
          <div className="text-left lg:text-right">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-white/70">
              Got a business to simplify?
            </p>

            <h2 className="text-[70px] font-light leading-[0.9] tracking-[-0.08em] text-white md:text-[120px] lg:text-[150px] xl:text-[175px]">
              Let&apos;s talk
            </h2>
          </div>
        </div>

        {/* Dotted Divider */}
        <div className="mt-14 border-t border-dashed border-white/35" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-7 text-[13px] font-semibold text-white/80">
            <a href="#privacy" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition hover:text-white">
              Terms & Conditions
            </a>
            <a href="#support" className="transition hover:text-white">
              Support
            </a>
          </div>

          <div className="flex items-center gap-8 text-[30px] font-bold">
            <SocialLink label="Facebook">f</SocialLink>
            <SocialLink label="X">𝕏</SocialLink>
            <SocialLink label="Instagram">◎</SocialLink>
            <SocialLink label="YouTube">▶</SocialLink>
          </div>
        </div>

        <p className="mt-8 text-[13px] font-medium text-white/60">
          © {new Date().getFullYear()} SmartBooks AI by SmartLocal AI. All
          rights reserved.
        </p>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-white/10 blur-[90px]" />
      <div className="pointer-events-none absolute left-[-160px] top-[200px] h-[360px] w-[360px] rounded-full bg-[#55ef9d]/20 blur-[90px]" />
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-white"
    >
      {children}
    </a>
  );
}

function SocialLink({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white"
    >
      {children}
    </a>
  );
}