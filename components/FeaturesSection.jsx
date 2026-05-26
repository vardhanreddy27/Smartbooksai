import React from "react";
import { motion } from "framer-motion";

const loop = {
  duration: 6,
  repeat: Infinity,
  repeatDelay: 1,
  ease: "easeInOut",
};

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="relative w-full scroll-mt-28 overflow-hidden bg-white pb-16 pt-10 md:pb-20 md:pt-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="relative z-20 mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-extrabold tracking-tight text-slate-950 md:mb-12 md:text-5xl">
          Features
        </h2>
      </div>

      <div className="absolute left-0 top-[245px] hidden h-[250px] w-[48%] bg-slate-100/80 md:block" />

      {/* 1. Mobile experience */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1fr_1fr]">
        <div className="relative flex min-h-[460px] items-center justify-center md:min-h-[520px]">
          <div className="absolute right-[70px] top-[135px] hidden h-[310px] w-[310px] rounded-full bg-slate-100 md:block" />

          {/* mob.png unchanged */}
          <motion.img
            src="/mob.png"
            alt="SmartBooks AI mobile app"
            className="relative z-10 h-auto w-full max-w-[390px] object-contain drop-shadow-2xl md:max-w-[470px]"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative flex flex-col items-start justify-center md:pl-8">
          <motion.div
            className="mb-10 ml-6 scale-[1.25]"
            animate={{ rotate: [0, -5, 5, 0], scale: [1.25, 1.35, 1.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <StarIcon />
          </motion.div>

          <h1 className="hand-font max-w-xl text-[42px] font-extrabold leading-[1.15] text-slate-950 md:text-[62px]">
            Enjoy the mobile
            <br />
            <span className="relative inline-block">
              experience
              <HandUnderline className="absolute -bottom-4 left-0 w-full" />
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-slate-700 md:text-[22px]">
            <b className="font-extrabold text-slate-800">
              Your mobile companion.
            </b>{" "}
            Take pictures of your expenses, and let Artificial Intelligence do
            the rest!
          </p>
        </div>
      </div>

      {/* 2. Smart bank reconciliation */}
      <div className="relative z-10 mx-auto mt-2 grid max-w-7xl grid-cols-1 items-center gap-8 px-6 md:mt-0 md:grid-cols-2">
        <div className="relative flex min-h-[260px] items-center justify-center md:justify-start md:pl-24">
          <CurvedArrow className="absolute bottom-[150px] left-[1px] hidden md:block" />

          <h2 className="hand-font relative mt-12 max-w-[520px] text-[40px] font-extrabold leading-[1.15] text-slate-950 md:text-[58px]">
            Smart bank
            <br />
            <span className="relative inline-block">
              reconciliation
              <HandUnderline className="absolute -bottom-4 left-12 w-[78%]" />
            </span>
          </h2>
        </div>

        <div className="flex items-center justify-center md:justify-end md:pr-24">
          <div className="flex items-center gap-5">
            <div className="text-center">
              <h3 className="hand-font text-[42px] font-extrabold leading-none text-slate-950 md:text-[56px]">
                140+
              </h3>
              <p className="hand-font mt-1 text-[21px] font-bold text-slate-950 md:text-[26px]">
                banks supported
              </p>
            </div>

            <BankIcon />
          </div>
        </div>
      </div>

      {/* 3. AI auto matching demo */}
      <div className="relative z-10  mx-auto mt-8 grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:mt-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 md:order-1 md:pl-16">
          <InfoItem
            title="Bank synchronization"
            text="Never import bank statements manually again. SmartBooks AI integrates with bank data and keeps your accounts updated."
          />

          <div className="my-8 max-w-[520px] border-t-4 border-dashed border-slate-300" />

          <InfoItem
            title="Smart AI matching"
            text="The AI Auto Match button validates entries, detects invoice links, matches payments, and marks records automatically."
          />
        </div>

        <div className="order-1 md:order-2">
          <motion.div
            className="dashboard-frame h-[430px] overflow-hidden rounded-[22px] bg-white shadow-2xl md:h-[480px]"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <div className="dashboard-scale">
              <SyncDashboard />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hand-font {
          font-family: "Comic Sans MS", "Segoe Print", "Marker Felt", cursive;
          letter-spacing: -0.035em;
        }

        .dashboard-frame {
          filter: drop-shadow(0 24px 38px rgba(15, 23, 42, 0.12));
        }

        .dashboard-scale {
          width: 128%;
          transform: scale(0.78);
          transform-origin: top left;
        }

        @media (min-width: 768px) {
          .dashboard-scale {
            width: 122%;
            transform: scale(0.82);
          }
        }
      `}</style>
    </motion.section>
  );
}

function SyncDashboard() {
  return (
    <div className="relative w-full bg-white">
      {/* Animated cursor */}
      <motion.div
        className="pointer-events-none absolute z-[80]"
        initial={{ x: 940, y: 122 }}
        animate={{
          x: [940, 700, 700, 700, 700, 880],
          y: [122, 122, 122, 122, 122, 235],
          scale: [1, 1, 0.82, 1.12, 1, 1],
        }}
        transition={{
          ...loop,
          times: [0, 0.32, 0.4, 0.46, 0.55, 1],
        }}
      >
        <CursorIcon />
      </motion.div>

      {/* Click ripple on AI button */}
      <motion.div
        className="pointer-events-none absolute left-[690px] top-[112px] z-[70] h-16 w-16 rounded-full border-4 border-sky-400"
        animate={{
          scale: [0, 0, 0.2, 1.8, 2.2, 0],
          opacity: [0, 0, 1, 0.45, 0, 0],
        }}
        transition={{
          ...loop,
          times: [0, 0.35, 0.42, 0.55, 0.65, 1],
        }}
      />

      {/* Topbar */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded bg-[linear-gradient(135deg,#ff8a00,#00d4c8,#7c3aed)]" />
          <span className="text-lg font-semibold text-slate-700">
            Accounting
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>💬</span>
          <span>🕘</span>
          <span className="rounded bg-[#6b4d68] px-1.5 py-1 text-white">
            👨
          </span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-5 py-3">
        <div className="flex items-center gap-3">
          <button className="rounded bg-[#875A7B] px-3 py-1.5 text-xs font-semibold text-white">
            New
          </button>

          <div className="text-xs leading-tight text-slate-500">
            <p className="font-semibold text-[#2b8e97]">
              Accounting Dashboard
            </p>
            <p>Bank Reconciliation</p>
          </div>
        </div>

        <div className="flex w-full max-w-[300px] items-center rounded border border-slate-200 px-3 py-2 text-xs text-slate-400">
          <span className="mr-2">🔍</span>
          <span className="flex-1">Search...</span>
          <span>⌄</span>
        </div>
      </div>

      {/* AI bar */}
      <motion.div
        className="overflow-hidden border-b border-emerald-100 bg-emerald-50 px-5"
        animate={{
          height: [0, 0, 56, 56, 56, 0],
          opacity: [0, 0, 1, 1, 1, 0],
        }}
        transition={{
          ...loop,
          times: [0, 0.42, 0.55, 0.75, 0.9, 1],
        }}
      >
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-700">
            <span>✨ AI validating entries and matching invoices...</span>
            <motion.span
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{
                ...loop,
                times: [0, 0.55, 0.7, 0.9, 1],
              }}
            >
              95% matched
            </motion.span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100">
            <motion.div
              className="h-full rounded-full bg-emerald-500"
              animate={{ width: ["0%", "0%", "35%", "72%", "95%", "0%"] }}
              transition={{
                ...loop,
                times: [0, 0.42, 0.58, 0.72, 0.86, 1],
              }}
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-[0.32fr_0.68fr]">
        {/* Left side */}
        <div className="border-r border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between text-sm font-semibold text-slate-700">
            <span>Balance</span>
            <span className="text-[#2b8e97]">₹ 9,944.87</span>
          </div>

          <LeftStatementRow active amount="₹ 750.00" delay={0} />
          <LeftStatementRow amount="₹ 102.78" delay={0.15} />
          <LeftStatementRow amount="₹ 2,000.00" delay={0.3} />
          <LeftStatementRow amount="₹ 650.00" delay={0.45} />
          <LeftStatementRow amount="₹ -32.58" negative delay={0.6} />

          <div className="mt-4 flex items-center justify-between text-sm font-semibold text-slate-700">
            <span>Bank - 2023-09-03</span>
            <span className="text-[#2b8e97]">₹ 6,378.00</span>
          </div>

          <div className="mt-3 space-y-3">
            <MiniSkeletonRow amount="₹ 1,275.00" />
            <MiniSkeletonRow amount="₹ 5,103.00" />
          </div>
        </div>

        {/* Right side */}
        <div className="relative p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <button className="rounded bg-[#875A7B] px-3 py-2 text-xs font-semibold text-white">
                Validate
              </button>

              <button className="rounded bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
                To Check
              </button>

              <motion.button
                className="relative overflow-hidden rounded bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-sky-500/20"
                animate={{
                  scale: [1, 1, 0.92, 1.08, 1],
                  boxShadow: [
                    "0 8px 20px rgba(14,165,233,0.18)",
                    "0 8px 20px rgba(14,165,233,0.18)",
                    "0 0 0 8px rgba(56,189,248,0.25)",
                    "0 0 0 14px rgba(16,185,129,0.12)",
                    "0 8px 20px rgba(14,165,233,0.18)",
                  ],
                }}
                transition={{
                  ...loop,
                  times: [0, 0.35, 0.42, 0.52, 1],
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/25"
                  animate={{ x: ["-120%", "-120%", "120%", "120%"] }}
                  transition={{
                    ...loop,
                    times: [0, 0.45, 0.68, 1],
                  }}
                />
                <span className="relative z-10">✨ AI Auto Match</span>
              </motion.button>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span>Bank Fees</span>
              <span>⚙</span>
            </div>
          </div>

          {/* Scanning line */}
          <motion.div
            className="pointer-events-none absolute left-4 right-4 z-40 h-1 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
            animate={{
              top: [110, 110, 235, 365, 110],
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              ...loop,
              times: [0, 0.45, 0.62, 0.82, 1],
            }}
          />

          <div className="overflow-hidden rounded border border-slate-200">
            <div className="grid grid-cols-5 gap-3 bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-600">
              <span>Account</span>
              <span>Partner</span>
              <span>Date</span>
              <span>Debit</span>
              <span>Credit</span>
            </div>

            <AnimatedMatchedRow delay={0.1} />

            <div className="grid grid-cols-5 gap-3 border-t border-slate-100 px-3 py-3 text-[11px] text-slate-400">
              <div>
                <p>121000 Account Receivable</p>
                <p>Open balance</p>
              </div>
              <span>Deco Addict</span>
              <span>
                <span className="rounded bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
                  New
                </span>
              </span>
              <span></span>
              <span>₹ 750.00</span>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-3 flex gap-2">
              <button className="rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                Match Existing Entries
              </button>
              <button className="rounded border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">
                Manual Operations
              </button>
            </div>

            <div className="mb-3 flex items-center rounded border border-slate-200 px-3 py-2 text-xs text-slate-400">
              <span className="mr-2">🔍</span>
              <span className="rounded bg-[#875A7B] px-2 py-1 text-white">
                Partner
              </span>
              <span className="ml-2 mr-2 text-slate-500">Deco Addict</span>
              <span className="mr-3">×</span>
              <span className="flex-1">Search...</span>
              <span>⌄</span>
            </div>

            <div className="overflow-hidden rounded border border-slate-200">
              <div className="grid grid-cols-5 gap-3 bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-600">
                <span>Account</span>
                <span>Partner</span>
                <span>Date</span>
                <span>Journal Entry</span>
                <span>Open Amount</span>
              </div>

              {[
                [
                  "121000 Account Receivable",
                  "Deco Addict",
                  "09/27/2023",
                  "INV/2023/00338",
                  "₹ 328.32",
                ],
                [
                  "121000 Account Receivable",
                  "Deco Addict",
                  "09/27/2023",
                  "INV/2023/00337",
                  "₹ 415.50",
                ],
                [
                  "121000 Account Receivable",
                  "Deco Addict",
                  "09/21/2023",
                  "INV/2023/00305",
                  "₹ 750.00",
                ],
              ].map((row, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-5 gap-3 border-t border-slate-100 px-3 py-3 text-[11px] text-slate-600"
                  animate={{
                    backgroundColor: [
                      "#ffffff",
                      "#ffffff",
                      "#ecfdf5",
                      "#ecfdf5",
                      "#ffffff",
                    ],
                  }}
                  transition={{
                    ...loop,
                    delay: index * 0.12,
                    times: [0, 0.48, 0.62, 0.86, 1],
                  }}
                >
                  <span>{row[0]}</span>
                  <span>{row[1]}</span>
                  <span>{row[2]}</span>
                  <span>{row[3]}</span>
                  <span className="flex items-center gap-1">
                    {row[4]}
                    <motion.span
                      className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700"
                      animate={{
                        opacity: [0, 0, 1, 1, 0],
                        scale: [0.6, 0.6, 1, 1, 0.6],
                      }}
                      transition={{
                        ...loop,
                        delay: 0.15 + index * 0.12,
                        times: [0, 0.52, 0.66, 0.88, 1],
                      }}
                    >
                      ✓
                    </motion.span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success popup */}
          <motion.div
            className="absolute bottom-8 right-8 z-50 rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-xl"
            animate={{
              opacity: [0, 0, 1, 1, 0],
              y: [20, 20, 0, 0, 20],
              scale: [0.95, 0.95, 1, 1, 0.95],
            }}
            transition={{
              ...loop,
              times: [0, 0.62, 0.72, 0.9, 1],
            }}
          >
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100">
                ✓
              </span>
              Entries matched successfully
            </div>
            <p className="mt-1 text-xs text-slate-500">
              5 records validated by AI
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AnimatedMatchedRow({ delay = 0 }) {
  return (
    <motion.div
      className="grid grid-cols-5 gap-3 border-t border-slate-200 px-3 py-3 text-[11px] text-slate-700"
      animate={{
        backgroundColor: ["#ffffff", "#ffffff", "#ecfdf5", "#ecfdf5", "#ffffff"],
      }}
      transition={{
        ...loop,
        delay,
        times: [0, 0.5, 0.64, 0.86, 1],
      }}
    >
      <div>
        <p className="font-semibold">101401 Bank</p>
        <p className="text-slate-400">Reserve</p>
      </div>

      <span className="font-semibold">Deco Addict</span>
      <span>09/27/2023</span>
      <span>₹ 750.00</span>

      <span>
        <motion.span
          className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700"
          animate={{ opacity: [0, 0, 1, 1, 0], y: [4, 4, 0, 0, 4] }}
          transition={{
            ...loop,
            times: [0, 0.52, 0.66, 0.88, 1],
          }}
        >
          ✓ Matched
        </motion.span>
      </span>
    </motion.div>
  );
}

function LeftStatementRow({ amount, active, negative, delay = 0 }) {
  return (
    <motion.div
      className={`mb-3 rounded border ${
        active
          ? "border-[#d0eaf0] bg-[#e9f6f9]"
          : "border-slate-200 bg-white"
      } p-3`}
      animate={{
        backgroundColor: active
          ? ["#e9f6f9", "#e9f6f9", "#ecfdf5", "#ecfdf5", "#e9f6f9"]
          : ["#ffffff", "#ffffff", "#ecfdf5", "#ecfdf5", "#ffffff"],
        borderColor: active
          ? ["#d0eaf0", "#d0eaf0", "#34d399", "#34d399", "#d0eaf0"]
          : ["#e2e8f0", "#e2e8f0", "#34d399", "#34d399", "#e2e8f0"],
      }}
      transition={{
        ...loop,
        delay,
        times: [0, 0.5, 0.64, 0.86, 1],
      }}
    >
      <div className="mb-2 flex items-center justify-between text-[11px]">
        <div>
          <p className="font-semibold text-slate-700">09/27/2023</p>
          <p className="text-slate-400">INV/2023/00305</p>
        </div>

        <span
          className={
            negative
              ? "font-semibold text-red-400"
              : "font-semibold text-slate-600"
          }
        >
          {amount}
        </span>
      </div>

      <div className="space-y-2">
        <div className="h-3 w-[65%] rounded-full bg-slate-200" />
        <div className="h-3 w-[48%] rounded-full bg-slate-200" />
      </div>
    </motion.div>
  );
}

function MiniSkeletonRow({ amount }) {
  return (
    <div className="rounded border border-slate-200 bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="h-3 w-[45%] rounded-full bg-slate-200" />
        <span className="text-[11px] font-semibold text-slate-600">
          {amount}
        </span>
      </div>

      <div className="h-3 w-[58%] rounded-full bg-slate-200" />
    </div>
  );
}

function CursorIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 32 32" fill="none">
      <path
        d="M5 3L25 17L16 19L12 28L5 3Z"
        fill="#111827"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandUnderline({ className = "" }) {
  return (
    <svg
      className={className}
      height="18"
      viewBox="0 0 260 18"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M5 10C42 14 82 11 121 10C164 9 205 8 255 10"
        stroke="#5244a7"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M18 12C68 15 122 13 176 12C205 11 230 11 250 12"
        stroke="#5244a7"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function CurvedArrow({ className = "" }) {
  return (
    <svg
      className={className}
      width="150"
      height="150"
      viewBox="0 0 190 190"
      fill="none"
    >
      <path
        d="M135 18C130 78 42 43 39 106C37 148 76 159 100 156"
        stroke="#CBD2DB"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M86 134L104 157L73 160"
        stroke="#CBD2DB"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Updated: removed turquoise icon and added big star */
function InfoItem({ title, text }) {
  return (
    <div className="flex items-center gap-6 ">
      <motion.div
        className="-mt-8 shrink-0"
        animate={{
          rotate: [0, -5, 5, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <StarIcon />
      </motion.div>

      <div>
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-slate-600 md:text-xl">
          {text}
        </p>
      </div>
    </div>
  );
}

/* Bigger star */
function StarIcon() {
  return (
    <svg width="112" height="122" viewBox="0 0 110 120" fill="none">
      <path
        d="M54 28L65 53L92 55L71 73L78 100L54 85L30 100L37 73L16 55L43 53L54 28Z"
        fill="#FDB42C"
        stroke="#111827"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M75 8C76 22 70 34 60 43"
        stroke="#FDB42C"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M88 4C89 21 82 36 69 47"
        stroke="#FDB42C"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M101 18C99 33 91 45 79 54"
        stroke="#FDB42C"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="82" height="82" viewBox="0 0 100 100" fill="none">
      <path
        d="M50 10L88 36H12L50 10Z"
        fill="#20B8F4"
        stroke="#111827"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M19 81H82" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
      <path d="M15 88H86" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
      <rect x="22" y="39" width="10" height="38" fill="#20B8F4" stroke="#111827" strokeWidth="4" />
      <rect x="45" y="39" width="10" height="38" fill="#20B8F4" stroke="#111827" strokeWidth="4" />
      <rect x="68" y="39" width="10" height="38" fill="#20B8F4" stroke="#111827" strokeWidth="4" />
      <path d="M17 36H84" stroke="#111827" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}