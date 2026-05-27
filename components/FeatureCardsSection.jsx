import React from "react";

const topFeatures = [
  {
    title: "AI Billing",
    subtitle: "Create invoices in seconds",
    icon: <SalesIcon />,
  },
  {
    title: "Purchases",
    subtitle: "Manage vendor bills",
    icon: <PurchaseIcon />,
  },
  {
    title: "Smart Expenses",
    subtitle: "Track business spending",
    icon: <ExpensesIcon />,
  },
];

const bottomFeatures = [
  {
    title: "Stock Control",
    subtitle: "Live inventory tracking",
    icon: <InventoryIcon />,
  },
  {
    title: "Bank Sync",
    subtitle: "Auto match payments",
    icon: <BankSyncIcon />,
  },
  {
    title: "Reports",
    subtitle: "AI business insights",
    icon: <ReportsIcon />,
  },
];

export default function FeatureCardsSection() {
  return (
    <section id="ai-tools" className="w-full scroll-mt-24 py-8 md:py-10">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#5a4fcf]">
            Powerful Features
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#08111f] md:text-4xl lg:text-5xl">
            AI Tools
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
            Advanced AI-powered accounting features for modern businesses
          </p>
        </div>

        {/* Top row */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {topFeatures.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {bottomFeatures.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, subtitle, icon }) {
  return (
    <div className="flex min-h-[118px] items-center gap-4 rounded-[4px] border border-[#f0f0f0] bg-[#fafafa] px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-[8px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
        {icon}
      </div>

      <div>
        <h3 className="text-[26px] font-semibold leading-none text-[#172033]">
          {title}
        </h3>
        <p className="mt-3 text-[18px] leading-none text-[#6b7280]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* ---------------- ICONS ---------------- */

function SalesIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="2" y="15" width="14" height="29" rx="1.5" fill="#8B3B78" />
      <rect x="14" y="8" width="14" height="36" rx="1.5" fill="#E65B63" />
      <rect x="26" y="2" width="14" height="42" rx="1.5" fill="#F6A227" />
    </svg>
  );
}

function PurchaseIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="6" y="10" width="40" height="28" rx="3" fill="#9B5A8E" />
      <rect x="6" y="10" width="40" height="9" rx="3" fill="#0CA6A6" />
      <rect
        x="6"
        y="17"
        width="40"
        height="5"
        fill="#1F6C93"
        opacity="0.95"
      />
    </svg>
  );
}

function ExpensesIcon() {
  return (
    <svg width="56" height="48" viewBox="0 0 56 48" fill="none">
      <circle cx="18" cy="12" r="11" fill="#33B5E5" />
      <path
        d="M9 23H38C42.4183 23 46 26.5817 46 31V38C46 40.2091 44.2091 42 42 42H21C14.3726 42 9 36.6274 9 30V23Z"
        fill="#1E57B5"
      />
      <path
        d="M2 23H25C30.5228 23 35 27.4772 35 33V42H14C7.37258 42 2 36.6274 2 30V23Z"
        fill="#56C4F1"
      />
      <circle cx="42.5" cy="13.5" r="6.5" fill="#2757B7" />
      <path
        d="M18 7.8V16.2"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14.7 10.8C15.7 9.4 17 8.8 18.3 8.8C19.9 8.8 21 9.6 21 10.8C21 12 20.2 12.5 18.2 13C16 13.5 15 14.1 15 15.5C15 16.8 16.3 17.8 18.2 17.8C19.9 17.8 21.1 17.2 21.9 16"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M26 4L45 15V37L26 48L7 37V15L26 4Z" fill="#F5A623" />
      <path d="M26 4L39 11.5L20 22.5L7 15L26 4Z" fill="#F8B64C" />
      <path d="M20 22.5L39 11.5V33.5L20 44V22.5Z" fill="#9B5A8E" />
      <path d="M7 15L20 22.5V44L7 37V15Z" fill="#F08A2B" />
    </svg>
  );
}

function BankSyncIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path
        d="M28 7L48 20H8L28 7Z"
        fill="#20B8F4"
        stroke="#172033"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="12" y="23" width="7" height="20" rx="1.5" fill="#20B8F4" />
      <rect x="25" y="23" width="7" height="20" rx="1.5" fill="#8B3B78" />
      <rect x="38" y="23" width="7" height="20" rx="1.5" fill="#F6A227" />
      <path
        d="M9 45H47"
        stroke="#172033"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M13 50H43"
        stroke="#172033"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 17H40"
        stroke="#172033"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 31C23 26 29 26 34 31C37 34 40 34 43 31"
        stroke="#0CA6A6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ReportsIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="8" y="8" width="40" height="40" rx="6" fill="#F8FAFC" />
      <rect x="14" y="32" width="6" height="10" rx="2" fill="#8B3B78" />
      <rect x="25" y="24" width="6" height="18" rx="2" fill="#2FA9E1" />
      <rect x="36" y="16" width="6" height="26" rx="2" fill="#F6A227" />
      <path
        d="M14 21C20 16 25 19 30 15C34 12 38 12 43 9"
        stroke="#0CA6A6"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="43" cy="9" r="4" fill="#0CA6A6" />
    </svg>
  );
}