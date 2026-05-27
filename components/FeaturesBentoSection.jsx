"use client";

import React from "react";
import PaymentIntegrationsVerticalSlider from "./PaymentIntegrationsSlider";

const PRIMARY = "#5244a7";

const moreFeatures = [
  "140+ Bank Sync",
  "AI Reconciliation",
  "GST Reports",
  "Inventory",
  "WhatsApp Alerts",
  "Payroll",
  "Expenses",
  "Smart Reports",
];

function handleCardMove(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const rotateX = ((y / rect.height - 0.5) * -5).toFixed(2);
  const rotateY = ((x / rect.width - 0.5) * 5).toFixed(2);

  card.style.setProperty("--mx", `${x}px`);
  card.style.setProperty("--my", `${y}px`);
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
}

function resetCardMove(event) {
  const card = event.currentTarget;
  card.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
}

function BentoCard({ children, className = "" }) {
  return (
    <div
      onMouseMove={handleCardMove}
      onMouseLeave={resetCardMove}
      className={`group relative overflow-hidden rounded-[30px] border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-[box-shadow,border-color] duration-500 hover:border-[#5244a7]/30 hover:shadow-[0_28px_80px_rgba(82,68,167,0.18)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-2xl left-(--mx) top-(--my)" />
      </div>

      {children}
    </div>
  );
}

function InvoiceMockup() {
  return (
    <div className="absolute bottom-5 right-5 w-42 overflow-hidden shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-1">
      <img
        src="/reciept.png"
        alt="Receipt"
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  );
}
function PaymentMockup() {
  return (
    <div className="absolute bottom-0 right-8 top-0 hidden w-[320px] overflow-hidden lg:block">
      <PaymentIntegrationsVerticalSlider />
    </div>
  );
}
function MobileExpenseMockup() {
  return (
    <div className="absolute right-5 top-5 w-37 overflow-hidden transition-all duration-700 ease-out group-hover:-translate-y-6 group-hover:scale-105">
      <img
        src="/expenses.png"
        alt="Expenses"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

function PayrollMockup() {
  return (
    <div className="absolute bottom-5 right-5 w-52.5 overflow-hidden transition-all duration-700 ease-out group-hover:-translate-y-6 group-hover:scale-105">
      <img
        src="/payrollimg.png"
        alt="Payroll"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default function FeaturesBentoSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-5 md:py-20">
      <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-20 h-105 w-105 -translate-x-1/2 rounded-full bg-[#5244a7]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-0 sm:px-2 lg:px-20">
        <div className="mx-auto max-w-155 text-center">
          <h2 className="text-[30px] font-black leading-[1.05] tracking-[-1.2px] text-slate-950 sm:text-[44px]">
            The features you need.
            <span className="block text-[#5244a7]">All in one place.</span>
          </h2>

            <p className="mx-auto mt-4 max-w-140 text-[15px] font-medium leading-7 text-slate-600 sm:text-[15px]">
            SmartBooks AI brings invoices, payments, expenses, payroll, bank
            sync, and AI reports into one simple accounting system.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-auto grid-cols-1 gap-5 md:auto-rows-[230px] md:grid-cols-6 lg:grid-cols-12">
          {/* Invoicing */}
          <BentoCard className="bg-[#fff8e8] p-5 sm:p-7 md:col-span-3 lg:col-span-5">
            <div className="relative z-10 max-w-57.5">
              <h3 className="text-xl font-black text-slate-950">Invoicing</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                Create GST invoices, school fee receipts, restaurant bills, and
                professional payment records.
              </p>

              <button className="mt-5 text-sm font-black text-[#5244a7]">
                Learn about invoicing →
              </button>
            </div>

            <InvoiceMockup />
          </BentoCard>

          {/* Billing and Payments */}
          <BentoCard className="bg-[#5244a7] p-5 text-white sm:p-7 md:col-span-3 lg:col-span-7">
            <div className="relative z-10 max-w-112.5">
              <h3 className="text-xl font-black">Billing and Payments</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/75">
                Collect fees, invoices, UPI, cash, and bank <br /> payments.
                
            
                 Track
                pending dues and send <br />WhatsApp payment updates.
              </p>

              <button className="mt-5 text-sm font-black text-white">
                Learn about billing and payments →
              </button>
            </div>

            <PaymentMockup />
          </BentoCard>

          {/* Expenses */}
          <BentoCard className="bg-[#eef7ff] p-5 sm:p-7 md:col-span-2 lg:col-span-4">
            <div className="relative z-10 max-w-55">
              <h3 className="text-xl font-black text-slate-950">Expenses</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                Track vendor bills, rent, utilities, purchases, staff expenses,
                and daily business spending.
              </p>

              <button className="mt-5 text-sm font-black text-[#5244a7]">
                Learn about expenses →
              </button>
            </div>

            <MobileExpenseMockup />
          </BentoCard>

          {/* Payroll */}
          <BentoCard className="bg-[#06162f] p-5 text-white sm:p-7 md:col-span-2 lg:col-span-4">
            <div className="relative z-20 max-w-35">
              <h3 className="text-xl font-black">Payroll</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/70">
                Manage salaries, staff advances, deductions, monthly payroll,
                and payroll impact on cash flow.
              </p>
            </div>

            <PayrollMockup />
          </BentoCard>

          {/* More Features */}
          <BentoCard className="bg-[#ffc928] p-5 md:col-span-2 lg:col-span-4 sm:p-7">
            <div className="relative z-10">
              <h3 className="text-xl font-black text-slate-950 mb-5">
                More Features
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
                {moreFeatures.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[13px] font-black text-slate-900"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5244a7]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group,
          .group * {
            transition: none !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
