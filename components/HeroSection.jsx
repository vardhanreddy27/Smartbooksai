import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

const STEP_INTERVAL = 5400;
const EASE = "power3.out";

const useSafeLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const trustPeople = [
  {
    name: "Raghav",
    initials: "RG",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/49.webp",
  },
  {
    name: "Manasa",
    initials: "MS",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/22.webp",
  },
  {
    name: "Kiran",
    initials: "KR",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/25.webp",
  },
  {
    name: "Suresh",
    initials: "SR",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/6.webp",
  },
  {
    name: "Priya",
    initials: "PR",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/56.webp",
  },
];

const industries = [
  {
    id: "schools",
    label: "Schools",
    eyebrow: "AI accounting for schools",
    headline1: "Admissions, fees & payroll,",
    headline2: "managed in one dashboard.",
    paragraph:
      "Manage admissions, fee collections, parent WhatsApp updates, expenses, payroll, and AI reconciliation without complex accounting tools.",
    dashboardTitle: "School Finance",
    dashboardSub: "Admissions • Fees • Payroll • Reports",
    metrics: [
      { label: "Fees", value: "₹42.8K" },
      { label: "Dues", value: "₹18.5K", highlight: true },
      { label: "Expenses", value: "₹12.4K" },
      { label: "Payroll", value: "₹2.4L" },
    ],
    workflows: [
      {
        label: "Admissions",
        title: "Admissions & Ledger",
        desc: "Student profiles, parent details, and admission fee records.",
        badge: "New Student",
        mainTitle: "Aarav Reddy • Class 6",
        note: "Admission fee, monthly fee, transport, and dues connected.",
        rows: [
          ["Admission Fee", "₹15,000"],
          ["Parent Mobile", "WhatsApp Ready"],
        ],
        insight: "AI finds unpaid admission balances and suggests follow-ups.",
      },
      {
        label: "Fees",
        title: "Fee Collection",
        desc: "Collect fees, apply discounts, track dues, and send receipts.",
        badge: "Receipt Ready",
        mainTitle: "May 2026 School Fee",
        note: "Tuition, transport, discount, and pending dues in one view.",
        rows: [
          ["Tuition Fee", "₹6,500"],
          ["Pending Due", "₹3,000"],
        ],
        insight: "AI highlights classes with high pending dues.",
      },
      {
        label: "Payroll",
        title: "Expenses & Payroll",
        desc: "Manage salaries, advances, deductions, and school expenses.",
        badge: "Payroll Ready",
        mainTitle: "Teachers & Staff Salary",
        note: "Track payroll, vendor bills, and monthly expense categories.",
        rows: [
          ["Teacher Salary", "₹1.8L"],
          ["Expenses", "₹72,000"],
        ],
        insight: "AI compares collections vs payroll cash requirement.",
      },
      {
        label: "AI Reports",
        title: "AI Reconciliation",
        desc: "Match bank, cash, UPI, receipts, and expenses automatically.",
        badge: "Matched 98%",
        mainTitle: "Bank + Cash Reconciled",
        note: "Verify payments faster with AI-supported matching.",
        rows: [
          ["UPI Payments", "Matched"],
          ["Cash Collection", "Verified"],
        ],
        insight: "AI shows dues, cash flow, and monthly collection health.",
      },
    ],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    eyebrow: "Smart accounting for restaurants",
    headline1: "GST billing, stock & payroll,",
    headline2: "simplified with AI.",
    paragraph:
      "Handle POS billing, GST invoices, supplier purchases, inventory, daily cash, expenses, payroll, and profit analysis in one simple system.",
    dashboardTitle: "Restaurant Finance",
    dashboardSub: "Billing • Inventory • GST • Payroll",
    metrics: [
      { label: "Sales", value: "₹58.2K" },
      { label: "Food Cost", value: "32%", highlight: true },
      { label: "Stock", value: "₹1.2L" },
      { label: "Payroll", value: "₹86K" },
    ],
    workflows: [
      {
        label: "Billing",
        title: "POS & GST Billing",
        desc: "Dine-in, takeaway, delivery, and GST-ready bills.",
        badge: "GST Ready",
        mainTitle: "Table 08 • Dinner Bill",
        note: "Track GST, discounts, service charges, and payment modes.",
        rows: [
          ["Food Bill", "₹2,850"],
          ["Payment", "UPI"],
        ],
        insight: "AI finds top-selling items and high-margin dishes.",
      },
      {
        label: "Inventory",
        title: "Inventory Control",
        desc: "Raw materials, stock usage, wastage, and supplier dues.",
        badge: "Stock Live",
        mainTitle: "Kitchen Stock Control",
        note: "Know low stock, wastage, reorder needs, and purchase cost.",
        rows: [
          ["Low Stock", "12 Items"],
          ["Supplier Due", "₹24,500"],
        ],
        insight: "AI detects food-cost leakage from purchases and sales.",
      },
      {
        label: "GST/e-Way",
        title: "GST & e-Way Support",
        desc: "GST sales, purchase records, e-Invoice, and e-Way data.",
        badge: "Tax Ready",
        mainTitle: "GST Sales Summary",
        note: "Keep supplier bills, tax records, and stock movement clean.",
        rows: [
          ["GST Sales", "₹4.8L"],
          ["Input Credit", "Tracked"],
        ],
        insight: "AI flags missing purchase bills and GST mismatches.",
      },
      {
        label: "Payroll",
        title: "Payroll & Profit",
        desc: "Salary, rent, utilities, kitchen costs, and daily profit.",
        badge: "Profit View",
        mainTitle: "Daily Profit Analysis",
        note: "See sales, expenses, payroll, food cost, and net profit.",
        rows: [
          ["Staff Salary", "₹86,000"],
          ["Net Margin", "18%"],
        ],
        insight: "AI shows which cost category is reducing profit.",
      },
    ],
  },
  {
    id: "retail",
    label: "Retail Shops",
    eyebrow: "AI accounting for retail shops",
    headline1: "Invoices, inventory & GST,",
    headline2: "controlled from one place.",
    paragraph:
      "Manage sales invoices, purchases, barcode stock, customer dues, supplier payments, GST records, e-Way support, payroll, and profits.",
    dashboardTitle: "Retail Accounting",
    dashboardSub: "Invoices • Stock • GST • Suppliers",
    metrics: [
      { label: "Sales", value: "₹76.4K" },
      { label: "Dues", value: "₹34.8K", highlight: true },
      { label: "Stock", value: "₹8.7L" },
      { label: "Supplier", value: "₹1.6L" },
    ],
    workflows: [
      {
        label: "Invoices",
        title: "Invoices & Dues",
        desc: "Create bills, manage credit sales, and track payments.",
        badge: "Invoice Ready",
        mainTitle: "Customer GST Bill",
        note: "Items, tax, discount, payment mode, and dues are tracked.",
        rows: [
          ["Bill Amount", "₹12,850"],
          ["Customer Due", "₹4,500"],
        ],
        insight: "AI prioritizes customers for payment reminders.",
      },
      {
        label: "Inventory",
        title: "Barcode Stock",
        desc: "Stock, selling price, purchase price, and item movement.",
        badge: "Stock Live",
        mainTitle: "Barcode Inventory",
        note: "Know fast-moving, low-stock, and dead-stock products.",
        rows: [
          ["Low Stock", "18 Items"],
          ["Dead Stock", "₹32,000"],
        ],
        insight: "AI suggests reorder quantities from sales speed.",
      },
      {
        label: "GST/e-Way",
        title: "GST & e-Way Bill",
        desc: "GST sales, purchases, e-Invoice, and e-Way records.",
        badge: "GST Ready",
        mainTitle: "GST + e-Way Support",
        note: "Prepare clean records for tax and stock movement.",
        rows: [
          ["GST Output", "Tracked"],
          ["e-Way Data", "Ready"],
        ],
        insight: "AI flags stock and GST record mismatches.",
      },
      {
        label: "Payroll",
        title: "Payroll & Profit",
        desc: "Shop expenses, salary, supplier dues, and profit reports.",
        badge: "Profit Report",
        mainTitle: "Monthly Profit View",
        note: "Sales, purchases, expenses, salary, and net profit together.",
        rows: [
          ["Staff Salary", "₹58,000"],
          ["Profit", "+21%"],
        ],
        insight: "AI shows best-margin product categories.",
      },
    ],
  },
  {
    id: "local",
    label: "Local Businesses",
    eyebrow: "Simple AI accounting for local businesses",
    headline1: "Invoices, payroll & reports,",
    headline2: "made simple with AI.",
    paragraph:
      "Create invoices, estimates, expenses, vendor payments, payroll, GST-ready records, payment reminders, and AI business reports.",
    dashboardTitle: "Business Finance",
    dashboardSub: "Invoices • Expenses • Payroll • AI Reports",
    metrics: [
      { label: "Income", value: "₹3.8L" },
      { label: "Pending", value: "₹62K", highlight: true },
      { label: "Expenses", value: "₹1.1L" },
      { label: "Profit", value: "+24%" },
    ],
    workflows: [
      {
        label: "Invoices",
        title: "Invoices & Estimates",
        desc: "Create invoices, estimates, receipts, and payment records.",
        badge: "Invoice Sent",
        mainTitle: "Client Service Invoice",
        note: "Manage billing for clients, vendors, and repeat services.",
        rows: [
          ["Invoice Amount", "₹28,000"],
          ["Balance Due", "₹18,000"],
        ],
        insight: "AI suggests follow-ups for overdue payments.",
      },
      {
        label: "Expenses",
        title: "Expense Control",
        desc: "Rent, utilities, purchases, vendors, and daily cash flow.",
        badge: "Tracked",
        mainTitle: "Monthly Expense Ledger",
        note: "Organize spending and understand where money is going.",
        rows: [
          ["Office Rent", "₹25,000"],
          ["Vendor Due", "₹42,000"],
        ],
        insight: "AI detects unusual expense increases.",
      },
      {
        label: "Payroll",
        title: "Payroll & Advances",
        desc: "Salary, advances, deductions, and staff payouts.",
        badge: "Payroll Ready",
        mainTitle: "Monthly Payroll",
        note: "Keep staff salary and advance records clear every month.",
        rows: [
          ["Salary Due", "₹1.2L"],
          ["Net Payable", "₹1.02L"],
        ],
        insight: "AI shows payroll impact on cash flow.",
      },
      {
        label: "AI Reports",
        title: "AI Business Reports",
        desc: "Income, expenses, dues, profit, and cash flow insights.",
        badge: "AI Insight",
        mainTitle: "Smart Finance Summary",
        note: "Get simple reports without needing accounting knowledge.",
        rows: [
          ["Income Trend", "+18%"],
          ["Cash Flow", "Healthy"],
        ],
        insight: "AI turns transactions into business decisions.",
      },
    ],
  },
];

function getIndustry(id) {
  return industries.find((item) => item.id === id) || industries[0];
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#f5b800]">
      <path d="M12 2.4 14.96 8.4l6.62.96-4.79 4.66 1.13 6.59L12 17.5l-5.92 3.11 1.13-6.59-4.79-4.66 6.62-.96L12 2.4Z" />
    </svg>
  );
}

function TrustCircles() {
  const rotations = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-2", "-rotate-2"];

  return (
    <div className="static-reveal invisible mt-6">
      <div className="flex flex-wrap items-center gap-6">
        {/* Square rounded image stack */}
        <div className="flex -space-x-5">
          {trustPeople.map((person, index) => (
            <div
              key={person.name}
              title={person.name}
              className={`relative flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[26px] border-[3px] border-white  text-sm font-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.22)] transition duration-300 hover:z-50 hover:-translate-y-1 hover:rotate-0 hover:scale-105 ${
                rotations[index % rotations.length]
              }`}
              style={{ zIndex: trustPeople.length - index }}
            >
              <span>{person.initials}</span>

              <img
                src={person.image}
                alt={person.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>

      <p className="mt-4 text-[20px] font-black tracking-[-0.4px] text-slate-500">
        Trusted by schools, restaurants & local businesses
      </p>
    </div>
  );
}

function HeroCopy({ activeIndustry }) {
  const copyRef = useRef(null);
  const industry = getIndustry(activeIndustry);

  useSafeLayoutEffect(() => {
    let ctx;
    let mounted = true;

    async function animateText() {
      const { gsap } = await import("gsap");

      if (!mounted || !copyRef.current) return;

      ctx = gsap.context(() => {
        const items = copyRef.current.querySelectorAll(".text-up");

        gsap.killTweensOf(items);

        gsap.set(items, {
          yPercent: 115,
          autoAlpha: 0,
          force3D: true,
          transformOrigin: "50% 100%",
        });

        gsap.to(items, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.11,
          ease: EASE,
          clearProps: "transform",
        });
      }, copyRef);
    }

    animateText();

    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
  }, [activeIndustry]);

  return (
    <div ref={copyRef}>
      <div className="mb-4 overflow-hidden">
        <div className="text-up invisible inline-flex items-center gap-2  px-4 py-2">
          <span className="h-2 w-2 rounded-full " />
          <span className="text-xs font-black">
            {industry.eyebrow}
          </span>
        </div>
      </div>

      <h1 className="min-h-[124px] max-w-[760px] text-[36px] font-black leading-[1.04] tracking-[-1.7px] text-slate-950 sm:text-[48px] lg:text-[56px] xl:text-[60px]">
        <span className="block overflow-hidden pb-2">
          <span className="text-up invisible inline-block">
            {industry.headline1}
          </span>
        </span>

        <span className="block overflow-hidden pb-2 text-[#5244a7]">
          <span className="text-up invisible inline-block">
            {industry.headline2}
          </span>
        </span>
      </h1>

      <div className="mt-4 min-h-[84px] max-w-xl overflow-hidden">
        <p className="text-up invisible text-[16px] font-medium leading-7 text-slate-600">
          {industry.paragraph}
        </p>
      </div>
    </div>
  );
}

function ProductCard({ activeIndustry, activeStep, onSelectStep }) {
  const cardRef = useRef(null);
  const progressRef = useRef(null);

  const industry = getIndustry(activeIndustry);
  const workflow = industry.workflows[activeStep] || industry.workflows[0];

  useSafeLayoutEffect(() => {
    let ctx;
    let mounted = true;

    async function runAnimation() {
      const { gsap } = await import("gsap");

      if (!mounted || !cardRef.current) return;

      ctx = gsap.context(() => {
        const title = cardRef.current.querySelector(".panel-title");
        const items = cardRef.current.querySelectorAll(".panel-item");

        gsap.killTweensOf([title, ...items, progressRef.current]);

        gsap.set(title, {
          y: 10,
          autoAlpha: 0,
          force3D: true,
        });

        gsap.set(items, {
          y: 10,
          autoAlpha: 0,
          force3D: true,
        });

        const tl = gsap.timeline({ defaults: { ease: EASE } });

        tl.to(title, {
          y: 0,
          autoAlpha: 1,
          duration: 0.58,
        }).to(
          items,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.045,
          },
          "-=0.3"
        );

        gsap.to(progressRef.current, {
          width: `${((activeStep + 1) / industry.workflows.length) * 100}%`,
          duration: 0.9,
          ease: EASE,
        });
      }, cardRef);
    }

    runAnimation();

    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
  }, [activeIndustry, activeStep]);

  return (
    <div ref={cardRef} className="hero-card invisible mx-auto w-full max-w-[540px]">
      <div className="h-[650px] overflow-hidden rounded-[30px] border border-[#e3ddf7] bg-white shadow-[0_28px_70px_rgba(82,68,167,0.15)]">
        <div className="h-[76px] bg-gradient-to-br from-[#5244a7] to-[#7C6CFF] p-4 text-white">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-black leading-tight">
                {industry.dashboardTitle}
              </p>
              <p className="mt-1 truncate text-xs font-semibold text-white/70">
                {industry.dashboardSub}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 rounded-full bg-white/15 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-xs font-bold text-white/85">Live</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid h-[58px] grid-cols-4 gap-2">
            {industry.metrics.map((metric) => (
              <div
                key={metric.label}
                className={`panel-item invisible rounded-2xl px-3 py-2 ${
                  metric.highlight ? "bg-[#f1efff]" : "bg-slate-50"
                }`}
              >
                <p className="truncate text-[10px] font-bold text-slate-400">
                  {metric.label}
                </p>
                <p
                  className={`mt-1 truncate text-[14px] font-black ${
                    metric.highlight ? "text-[#5244a7]" : "text-slate-950"
                  }`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid h-[44px] grid-cols-4 gap-2">
            {industry.workflows.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => onSelectStep(index)}
                  className={`flex items-center justify-center rounded-2xl px-2 text-center text-[10px] font-black leading-tight transition ${
                    isActive
                      ? "bg-[#5244a7] text-white"
                      : "bg-slate-100 text-slate-500 hover:bg-[#f1efff] hover:text-[#5244a7]"
                  }`}
                >
                  {step.label}
                </button>
              );
            })}
          </div>

          <div className="panel-title invisible mt-4 flex h-[72px] items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-[18px] font-black tracking-[-0.4px] text-slate-950">
                {workflow.title}
              </h2>
              <p className="mt-1 h-[40px] overflow-hidden text-[13px] font-semibold leading-5 text-slate-500">
                {workflow.desc}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-[#f1efff] px-3 py-1 text-[10px] font-black text-[#5244a7]">
              {workflow.badge}
            </span>
          </div>

          <div className="panel-item invisible mt-3 h-[88px] rounded-3xl bg-[#f5f3ff] p-4">
            <h3 className="truncate text-[17px] font-black text-slate-950">
              {workflow.mainTitle}
            </h3>
            <p className="mt-1 h-[38px] overflow-hidden text-[13px] font-semibold leading-5 text-slate-500">
              {workflow.note}
            </p>
          </div>

          <div className="mt-3 h-[82px] space-y-2">
            {workflow.rows.map(([label, value]) => (
              <div
                key={label}
                className="panel-item invisible flex h-[37px] items-center justify-between rounded-2xl bg-slate-50 px-4"
              >
                <span className="truncate text-[13px] font-bold text-slate-500">
                  {label}
                </span>
                <span className="ml-3 shrink-0 text-[13px] font-black text-slate-950">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="panel-item invisible mt-3 h-[78px] rounded-3xl bg-[#5244a7] p-4">
            <p className="text-sm font-black text-white">AI Insight</p>
            <p className="mt-1 h-[36px] overflow-hidden text-[13px] font-semibold leading-5 text-white/75">
              {workflow.insight}
            </p>
          </div>

          <div className="mt-4 h-[36px]">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-black text-slate-400">
                Workflow Progress
              </p>
              <p className="text-xs font-black text-[#5244a7]">
                {activeStep + 1}/{industry.workflows.length}
              </p>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                ref={progressRef}
                className="h-full rounded-full bg-gradient-to-r from-[#5244a7] to-[#7C6CFF]"
                style={{ width: "25%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [activeIndustry, setActiveIndustry] = useState("schools");
  const [activeStep, setActiveStep] = useState(0);

  useSafeLayoutEffect(() => {
    setActiveStep(0);
  }, [activeIndustry]);

  useEffect(() => {
    const timer = setInterval(() => {
      const industry = getIndustry(activeIndustry);
      setActiveStep((prev) => (prev + 1) % industry.workflows.length);
    }, STEP_INTERVAL);

    return () => clearInterval(timer);
  }, [activeIndustry]);

  useSafeLayoutEffect(() => {
    let ctx;
    let mounted = true;

    async function runAnimation() {
      const { gsap } = await import("gsap");

      if (!mounted || !sectionRef.current) return;

      ctx = gsap.context(() => {
        const staticItems = sectionRef.current.querySelectorAll(".static-reveal");
        const card = sectionRef.current.querySelector(".hero-card");

        gsap.set(staticItems, {
          y: 14,
          autoAlpha: 0,
          force3D: true,
        });

        gsap.set(card, {
          y: 16,
          autoAlpha: 0,
          scale: 0.985,
          force3D: true,
        });

        const tl = gsap.timeline({ defaults: { ease: EASE } });

        tl.to(staticItems, {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.08,
          delay: 0.2,
        }).to(
          card,
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
          },
          "-=0.42"
        );
      }, sectionRef);
    }

    runAnimation();

    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#fbfaff] px-10 pt-28 md:pt-[118px]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#5244a7]/12 blur-[120px]" />
        <div className="absolute -right-32 top-28 h-[500px] w-[500px] rounded-full bg-[#7C6CFF]/12 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(#5244a714 1px, transparent 1px), linear-gradient(90deg, #5244a714 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid items-center gap-10 px-5 pb-10 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <HeroCopy activeIndustry={activeIndustry} />

          <div className="static-reveal invisible mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-2xl bg-[#5244a7] px-7 py-3.5 text-sm font-black text-white shadow-[0_15px_35px_rgba(82,68,167,0.25)] transition hover:bg-[#463891]"
            >
              Book Free Demo
            </Link>

            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-2xl border border-[#d8d2f0] bg-white px-7 py-3.5 text-sm font-black text-[#5244a7] transition hover:bg-[#f5f3ff]"
            >
              Explore Features
            </Link>
          </div>

          <TrustCircles />

       <div className="static-reveal invisible mt-5 flex flex-wrap items-center gap-8">
  {industries.map((item) => {
    const isActive = item.id === activeIndustry;

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => setActiveIndustry(item.id)}
        className={`relative bg-transparent p-0 pb-3 text-[18px] font-black transition duration-300 ${
          isActive
            ? "text-[#5244a7]"
            : "text-slate-500 hover:text-[#5244a7]"
        }`}
      >
        {item.label}

        {isActive && (
          <svg
            className="absolute -bottom-1 left-1/2 h-4 w-[110%] -translate-x-1/2"
            viewBox="0 0 120 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11C18 4 30 16 44 9C58 2 72 15 86 8C100 2 110 10 116 7"
              stroke="#5244a7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    );
  })}
</div>
        </div>

        <ProductCard
          activeIndustry={activeIndustry}
          activeStep={activeStep}
          onSelectStep={setActiveStep}
        />
      </div>
    </section>
  );
}