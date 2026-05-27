import React from "react";

export default function SmartBooksFooter() {
  return (
    <footer id="contact" className="relative  w-full overflow-hidden bg-[#5a42e8] text-white md:mt-24">
      {/* Top CTA Card */}
      <div className="relative z-20 mx-auto mt-0 max-w-355 px-4 md:px-8">
        <div className="relative -top-6 flex flex-col items-start justify-between gap-6 rounded-[22px] bg-[#00000075] px-5 py-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:-top-10 md:flex-row md:items-center md:gap-8 md:px-16 md:py-14">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/85 md:text-sm">
              SmartBooks AI
            </p>

            <h2 className="max-w-155 text-[28px] font-medium leading-[1.08] md:text-[46px]">
              Meet with a Smart Accounting & Business Software Expert
            </h2>
          </div>

          <a
            href="tel:+919866531011"
            className="inline-flex w-full justify-center rounded-xl bg-[#5a4fcf] px-8 py-4 text-[15px] font-extrabold text-white shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] md:w-auto md:py-5 md:text-[16px]"
          >
           Book Demo
          </a>
        </div>
      </div>

      {/* Footer Main */}
      <div className="relative mx-auto px-4 pb-10 pt-12 sm:px-6 md:px-10 md:pb-12 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          {/* Left Area */}
          <div>
            {/* Logo */}
            <div className="mb-10 flex gap-3 md:mb-14">
              <div className="flex h-16 w-16 items-center md:h-19 md:w-19">
                <img
                  src="/trans.png"
                  alt="SmartBooks AI"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-[24px] font-black leading-none tracking-[-0.04em] md:text-[28px]">
                  smart
                  <br />
                  books ai
                </h3>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 gap-x-10 gap-y-4 text-[15px] font-bold sm:grid-cols-2 md:grid-cols-3">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#industries">Industries</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#ai-tools">AI Tools</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="tel:+919866531011">Book Demo</FooterLink>
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

            <h2 className="text-[54px] font-light leading-[0.92] tracking-[-0.08em] text-white sm:text-[70px] md:text-[120px] lg:text-[150px] xl:text-[175px]">
              Let&apos;s talk
            </h2>
          </div>
        </div>

        {/* Dotted Divider */}
        <div className="mt-14 border-t border-dashed border-white/35" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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

          <div className="flex items-center gap-4 text-[26px] font-bold sm:gap-8 sm:text-[30px]">
            <SocialLink href="https://www.instagram.com/smartlocal_ai/" label="Instagram">
              <InstagramIcon />
            </SocialLink>
          </div>
        </div>

        <p className="mt-8 text-[13px] font-medium text-white/60">
          © {new Date().getFullYear()} SmartBooks AI by SmartLocal AI. All
          rights reserved.
        </p>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-45 -right-30 h-105 w-105 rounded-full bg-white/10 blur-[90px]" />
      <div className="pointer-events-none absolute -left-40 top-50 h-90 w-90 rounded-full bg-[#55ef9d]/20 blur-[90px]" />
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

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:text-white"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}