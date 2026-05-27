import React, { useEffect, useRef, useState } from "react";

export default function SmartBooksScrollMergeSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const value = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;

      setProgress(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const move = smooth(clamp(progress / 0.28, 0, 1));
  const word = getActiveWord(progress);

  return (
    <section
      ref={sectionRef}
className="relative h-[112vh] w-full overflow-hidden bg-[#fbfaf7]"    >
      <div className="sticky top-0 h-screen w-full overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,79,207,0.12),transparent_55%)]" />

        {/* HERO TEXT */}
        <div
          className="absolute mb-50 left-1/2 z-30 w-full max-w-[1150px]  px-5 text-center"
        style={{
  top: `${lerp(8, 2, move)}%`,
  transform: `translateX(-50%) scale(${lerp(1, 0.72, move)})`,
}}
        >
          <h1 className="  mx-auto text-center text-[32px] font-black  text-[#101322] sm:text-[46px] md:text-[64px] lg:text-[76px]">
            Meet all-in-one platform
            <br />
            to{" "}
            <span className="inline-flex rounded-[20px] bg-[#bff2df] px-5  shadow-[0_0_35px_rgba(85,239,157,0.6)]">
              {word}
            </span>
          </h1>
        </div>

        {/* DASHBOARD SCREEN - CENTERED */}
        <div
          className="absolute left-1/2 z-20 w-[1040px] max-w-[92vw] rounded-[32px] border-[12px] border-[#151515] bg-[#f8fafc] shadow-[0_45px_140px_rgba(15,23,42,0.24)]"
          style={{
            top: `${lerp(64, 58, move)}%`,
            height: `${lerp(500, 570, move)}px`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          {/* LEFT SIDEBAR */}
          <div className="absolute left-0 top-0 hidden h-full w-[72px] rounded-l-[19px] bg-[#111111] md:block">
            <div className="mx-auto mt-7 flex h-11 w-11 items-center justify-center ">
              <img
                src="/trans.png"
                alt="SmartBooks AI"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-12 flex flex-col items-center gap-7">
              <span className="h-3 w-3 rounded-full bg-white/70" />
              <span className="h-3 w-3 rounded-full bg-white/35" />
              <span className="h-3 w-3 rounded-full bg-white/35" />
              <span className="h-3 w-3 rounded-full bg-white/35" />
            </div>
          </div>

          {/* APP BODY */}
          <div className="absolute left-0 top-0 h-full w-full overflow-visible rounded-[20px] bg-[#f8fafc] md:left-[72px] md:w-[calc(100%-72px)]">
            {/* TOP BAR */}
            <div className="absolute left-0 top-0 z-40 h-[70px] w-full rounded-tr-[20px] border-b border-slate-200 bg-white px-6">
              <div className="flex h-full items-center justify-between">
                <div>
                  <p className="text-[23px] font-black tracking-[-0.04em] text-[#101322]">
                    Home
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    SmartBooks AI Dashboard
                  </p>
                </div>

                <div className="hidden items-center gap-3 md:flex">
                  <div className="h-10 w-[240px] rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold leading-[40px] text-slate-400">
                    Search...
                  </div>

                  <button className="rounded-xl bg-black px-4 py-3 text-sm font-bold text-white">
                    Start Tracking →
                  </button>
                </div>
              </div>
            </div>

            {/* CARDS */}
            <DashboardCard
              move={move}
              start={{ x: -120, y: 96, r: -5 }}
              end={{ x: 24, y: 92, r: 0 }}
              className="w-[285px]"
            >
              <FastBillingCard />
            </DashboardCard>

            <DashboardCard
              move={move}
              start={{ x: 720, y: 96, r: 5 }}
              end={{ x: 338, y: 92, r: 0 }}
              className="w-[325px]"
            >
              <AIMatchingCard />
            </DashboardCard>

            <DashboardCard
              move={move}
              start={{ x: -110, y: 305, r: 5 }}
              end={{ x: 24, y: 300, r: 0 }}
              className="w-[345px]"
            >
              <BusinessHealthCard />
            </DashboardCard>

            <DashboardCard
              move={move}
              start={{ x: 735, y: 305, r: -5 }}
              end={{ x: 398, y: 300, r: 0 }}
              className="w-[325px]"
            >
              <AIInsightsCard />
            </DashboardCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD WRAPPER ---------------- */

function DashboardCard({ move, start, end, className = "", children }) {
  const x = lerp(start.x, end.x, move);
  const y = lerp(start.y, end.y, move);
  const r = lerp(start.r, end.r, move);

  return (
    <div
      className={`absolute left-0 top-0 z-50 rounded-[20px] bg-white p-4 shadow-[0_22px_65px_rgba(15,23,42,0.13)] ring-1 ring-slate-200/80 ${className}`}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------------- CARDS ---------------- */

function FastBillingCard() {
  return (
    <div>
      <h3 className="text-[18px] font-black tracking-[-0.03em] text-[#101322]">
        Fast billing
      </h3>

      <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#66758f]">
        Create invoices and send on WhatsApp instantly.
      </p>

      <div className="mt-4 space-y-3">
        <InputLine label="Invoice No" value="SB-2026-001" />
        <InputLine label="Customer" value="Local Business" />
      </div>
    </div>
  );
}

function AIMatchingCard() {
  return (
    <div>
      <h3 className="text-[18px] font-black tracking-[-0.03em] text-[#101322]">
        AI auto matching
      </h3>

      <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#66758f]">
        Match bank entries with sales and payments.
      </p>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Matched Entry
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-bold text-[#101322]">
            Restaurant Fee
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-600">
            98%
          </span>
        </div>
      </div>
    </div>
  );
}

function BusinessHealthCard() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-black tracking-[-0.03em] text-[#101322]">
          Business health
        </h3>

        <button className="rounded-xl bg-slate-100 px-3 py-2 text-[11px] font-black text-[#66758f]">
          View
        </button>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[13px] font-bold text-[#66758f]">
          <span>Cashflow</span>
          <span>87%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-[#5a4fcf] via-[#55ef9d] to-[#facc15]" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Metric label="Sales" value="₹52K" />
        <Metric label="Profit" value="₹18K" />
      </div>
    </div>
  );
}

function AIInsightsCard() {
  return (
    <div className="grid grid-cols-[1fr_78px] items-center gap-4">
      <div>
        <h3 className="text-[18px] font-black tracking-[-0.03em] text-[#101322]">
          AI insights
        </h3>

        <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#66758f]">
          Get smart suggestions to reduce expenses and grow.
        </p>

        <button className="mt-4 rounded-xl bg-black px-4 py-3 text-xs font-bold text-white">
          Explore
        </button>
      </div>

      <div className="relative h-[82px] rounded-3xl bg-gradient-to-br from-[#5a4fcf] to-[#55ef9d]">
        <div className="absolute left-4 top-4 h-8 w-8 rounded-full bg-white/80" />
        <div className="absolute bottom-4 right-4 h-10 w-10 rounded-2xl bg-white/70" />
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function InputLine({ label, value }) {
  return (
    <div>
      <p className="mb-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <div className="flex h-10 items-center justify-between rounded-xl bg-slate-100 px-4">
        <span className="text-[13px] font-bold text-[#66758f]">{value}</span>
        <span className="h-4 w-4 rounded-full bg-slate-300" />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1.5 text-lg font-black text-[#101322]">{value}</p>
    </div>
  );
}

/* ---------------- UTILS ---------------- */

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function smooth(value) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function getActiveWord(progress) {
  if (progress < 0.18) return "manage";
  if (progress < 0.36) return "bill";
  if (progress < 0.52) return "track";
  if (progress < 0.7) return "match";
  return "grow";
}