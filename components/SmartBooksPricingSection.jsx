import React, { useState } from "react";

const plans = [
  {
    name: "SmartBooks Basic",
    tag: "For small shops",
    highlight: false,
    description: "Simple billing, expenses, and daily business tracking.",
  },
  {
    name: "SmartBooks Growth",
    tag: "Most popular",
    highlight: true,
    description: "AI-powered accounting support for growing local businesses.",
  },
  {
    name: "SmartBooks Pro",
    tag: "For active businesses",
    highlight: false,
    description: "Complete accounting, reports, payments, and reminders.",
  },
];

const features = [
  "AI accounting assistant",
  "Fast invoice & billing",
  "WhatsApp invoice sharing",
  "Sales & purchase tracking",
  "Expense management",
  "Customer & vendor ledger",
  "Payment due reminders",
  "Bank entry matching",
  "Profit & loss reports",
  "Cashflow insights",
  "GST-ready reports",
  "Business health dashboard",
  "Mobile-friendly access",
  "SmartLocal AI support",
];

export default function SmartBooksPricingSection() {
  const [billing, setBilling] = useState("monthly");

  const price = billing === "monthly" ? "₹2,999" : "₹28,790";
  const period = billing === "monthly" ? "/ month" : "/ year";

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-[#fbfaf7] px-4 py-20 sm:px-6 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#5a4fcf]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-28 bottom-20 h-[320px] w-[320px] rounded-full bg-[#55ef9d]/20 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#5a4fcf]">
            Simple Pricing
          </p>

          <h2 className="mt-4 text-[38px] font-black leading-[1.05] tracking-[-0.05em] text-[#101322] sm:text-[52px] md:text-[68px]">
            One price. All smart accounting features.
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-base font-medium leading-7 text-slate-600 md:text-lg">
            SmartBooks AI gives local businesses everything needed to manage
            billing, payments, expenses, reports, and AI-powered business
            insights.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-3 text-sm font-black transition-all ${
                billing === "monthly"
                  ? "bg-[#5a4fcf] text-white shadow-[0_10px_24px_rgba(90,79,207,0.28)]"
                  : "text-slate-500 hover:text-[#101322]"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-5 py-3 text-sm font-black transition-all ${
                billing === "yearly"
                  ? "bg-[#5a4fcf] text-white shadow-[0_10px_24px_rgba(90,79,207,0.28)]"
                  : "text-slate-500 hover:text-[#101322]"
              }`}
            >
              Yearly Save 20%
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-[#5a4fcf] bg-[#5a4fcf] text-white shadow-[0_35px_90px_rgba(90,79,207,0.35)]"
                  : "border-slate-200 bg-white text-[#101322] shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute right-5 top-5 rounded-full bg-[#55ef9d] px-4 py-2 text-xs font-black text-[#101322]">
                  Best Value
                </div>
              )}

              <p
                className={`text-sm font-black uppercase tracking-[0.18em] ${
                  plan.highlight ? "text-white/75" : "text-[#5a4fcf]"
                }`}
              >
                {plan.tag}
              </p>

              <h3 className="mt-5 text-[26px] font-black tracking-[-0.04em]">
                {plan.name}
              </h3>

              <p
                className={`mt-3 min-h-[52px] text-sm font-medium leading-6 ${
                  plan.highlight ? "text-white/75" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-7 flex items-end gap-2">
                <span className="text-[46px] font-black leading-none tracking-[-0.06em]">
                  {price}
                </span>
                <span
                  className={`pb-1 text-sm font-bold ${
                    plan.highlight ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {period}
                </span>
              </div>

              <p
                className={`mt-2 text-xs font-bold ${
                  plan.highlight ? "text-white/65" : "text-slate-400"
                }`}
              >
                Same price. All features included.
              </p>

              <a
                href="tel:+919866531011"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-black transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-[#5a4fcf] hover:bg-[#f4f2ff]"
                    : "bg-[#101322] text-white hover:bg-[#5a4fcf]"
                }`}
              >
                Book Demo
              </a>

              <div
                className={`mt-7 border-t pt-6 ${
                  plan.highlight ? "border-white/18" : "border-slate-200"
                }`}
              >
                <p
                  className={`mb-4 text-xs font-black uppercase tracking-[0.18em] ${
                    plan.highlight ? "text-white/65" : "text-slate-400"
                  }`}
                >
                  Included Features
                </p>

                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.highlight
                            ? "bg-white/15 text-[#55ef9d]"
                            : "bg-[#eefcf5] text-emerald-600"
                        }`}
                      >
                        <CheckIcon />
                      </span>

                      <span
                        className={`text-sm font-semibold leading-5 ${
                          plan.highlight ? "text-white/82" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-10 max-w-[850px] rounded-[24px] border border-slate-200 bg-white/80 p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-md">
          <p className="text-sm font-bold leading-6 text-slate-600">
            Perfect for schools, restaurants, shops, service businesses, and
            local companies that want simple accounting with AI support.
          </p>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.4 8.2 14l7.3-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}