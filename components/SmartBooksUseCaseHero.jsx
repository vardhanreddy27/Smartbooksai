"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const transition = { duration: 0, ease: "linear" };

const leftServices = [
  {
    title: "Schools",
    desc: "Admissions • Fees • Payroll",
    icon: "school",
    className: "left-[70px] top-[312px]",
  },
  {
    title: "Restaurants",
    desc: "GST Bills • e-Way • Inventory",
    icon: "restaurant",
    className: "left-[70px] top-[422px]",
  },
  {
    title: "Retail Shops",
    desc: "Stock • Sales • Invoices",
    icon: "cart",
    className: "left-[70px] top-[534px]",
  },
  {
    title: "Local Business",
    desc: "Expenses • Payroll • Reports",
    icon: "building",
    className: "left-[70px] top-[646px]",
  },
  {
    title: "Industries",
    desc: "Branches • Teams • Finance",
    icon: "factory",
    className: "left-[70px] top-[756px]",
  },
];

const rightFeatures = [
  {
    title: "WhatsApp Alerts",
    desc: "Fees • Invoices • Reminders",
    icon: "chat",
    imageUrl: "/whatsapp.png",
    className: "left-[1040px] top-[312px]",
  },
  {
    title: "AI Accounting",
    desc: "Auto entries • Smart tagging",
    icon: "bot",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/11633/11633958.png",

    className: "left-[1040px] top-[422px]",
  },
  {
    title: "AI Reconciliation",
    desc: "Bank • Cash • UPI matching",
    icon: "sync",
    imageUrl: "/recon.png",
    className: "left-[1040px] top-[534px]",
  },
  {
    title: "Smart Reports",
    desc: "Profit • Dues • Cash flow",
    icon: "chart",
        imageUrl: "https://cdn-icons-png.magnific.com/256/6439/6439018.png?semt=ais_white_label",

    className: "left-[1040px] top-[646px]",
  },
  {
    title: "Payroll Automation",
    desc: "Salary • Advances • Deductions",
    icon: "briefcase",
    imageUrl: "/payroll.png",

    className: "left-[1040px] top-[756px]",
  },
  
];

const PATHS = [
  {
    d: "M 400 312 C 520 312 575 534 720 534 C 865 534 920 312 1040 312",
    color: "#5F50D8",
    glow: "#7C6CFF",
    width: 3,
  },
  {
    d: "M 400 422 C 545 422 610 534 720 534 C 830 534 895 422 1040 422",
    color: "#7C6CFF",
    glow: "#7C6CFF",
    width: 2.6,
  },
  {
    d: "M 400 534 L 630 534 M 810 534 L 1040 534",
    color: "#FFFFFF",
    glow: "#FFFFFF",
    width: 2.6,
  },
  {
    d: "M 400 646 C 545 646 610 534 720 534 C 830 534 895 646 1040 646",
    color: "#8F83FF",
    glow: "#8F83FF",
    width: 2.6,
  },
  {
    d: "M 400 756 C 520 756 575 534 720 534 C 865 534 920 756 1040 756",
    color: "#C9C2FF",
    glow: "#C9C2FF",
    width: 2.6,
  },
];

const DOTS = [
  [400, 312, "#5F50D8"],
  [400, 422, "#7C6CFF"],
  [400, 534, "#FFFFFF"],
  [400, 646, "#8F83FF"],
  [400, 756, "#C9C2FF"],
  [1040, 312, "#5F50D8"],
  [1040, 422, "#7C6CFF"],
  [1040, 534, "#FFFFFF"],
  [1040, 646, "#8F83FF"],
  [1040, 756, "#C9C2FF"],
];

function Icon({ type, imageUrl }) {
  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt="Icon"
        className="h-18 w-18 object-contain rounded-lg"
      />
    );
  }

  const common =
    "h-8 w-8 fill-none stroke-current stroke-[2.2] text-[#d9d4ff]";

  if (type === "school") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M4 21V9l8-5 8 5v12" />
        <path d="M9 21v-7h6v7" />
        <path d="M7 11h2M15 11h2M12 4v4" />
      </svg>
    );
  }

  if (type === "restaurant") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M7 3v8M4 3v8M10 3v8M4 11h6M7 11v10" />
        <path d="M17 3c2 2 3 5 3 8 0 3-1.2 5-3 5h-1v5" />
      </svg>
    );
  }

  if (type === "cart") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M4 5h2l2 10h10l2-7H7" />
        <path d="M9 20h.01M18 20h.01" />
      </svg>
    );
  }

  if (type === "building") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M4 21h16" />
        <path d="M6 21V5h8v16" />
        <path d="M14 9h4v12" />
        <path d="M9 8h2M9 12h2M9 16h2" />
      </svg>
    );
  }

  if (type === "factory") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M4 21V11l5 3v-3l5 3V8h4v13" />
        <path d="M3 21h18" />
        <path d="M8 18h1M13 18h1" />
      </svg>
    );
  }

  if (type === "bot") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M12 4v3" />
        <path d="M7 7h10a3 3 0 0 1 3 3v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a3 3 0 0 1 3-3Z" />
        <path d="M9 13h.01M15 13h.01" />
        <path d="M10 16h4" />
      </svg>
    );
  }

  if (type === "sync") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M20 11a8 8 0 0 0-14-5l-2 2" />
        <path d="M4 4v4h4" />
        <path d="M4 13a8 8 0 0 0 14 5l2-2" />
        <path d="M20 20v-4h-4" />
      </svg>
    );
  }

  if (type === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <path d="M4 7h16v12H4z" />
        <path d="M4 12h16" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M5 20V10" />
        <path d="M12 20V5" />
        <path d="M19 20v-8" />
        <path d="M4 20h16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L4 20l1.2-4.4A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M9 9c.5 3 2.5 5 6 6" />
    </svg>
  );
}

function InfoPill({ item, index, side = "left" }) {
  return (
    <div
      className={`absolute z-40 hidden -translate-y-1/2 md:block ${item.className}`}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: side === "left" ? -22 : 22,
          filter: "blur(6px)",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.08 * index,
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex h-23 w-82.5 items-center gap-5 overflow-hidden rounded-2xl border border-[#8175ff]/45 bg-white/7.5 px-5 text-left shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(143,131,255,0.28),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_42%)]" />

        <div className="relative z-10 flex shrink-0 items-center justify-center">
          <Icon type={item.icon} imageUrl={item.imageUrl} />
        </div>

        <div className="relative z-10 min-w-0">
          <p className="truncate text-[15px] font-black text-white">
            {item.title}
          </p>
          <p className="mt-1 truncate text-[12px] font-semibold text-white/55">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function CenterLogo() {
  return (
    <div className="absolute left-180 top-133.5 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.82, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex h-44.5 w-44.5 items-center justify-center rounded-[42px] border border-white/15 bg-[#4e40a2] shadow-[0_0_110px_rgba(78,64,162,0.85)]"
      >
        <img
          src="/icon.png"
          alt="SmartBooks AI Logo"
          className="h-29.5 w-29.5 object-contain"
        />
      </motion.div>
    </div>
  );
}

function ConnectorSVG({ pathLengths }) {
  return (
    <svg
      width="1440"
      height="890"
      viewBox="0 0 1440 890"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-0 z-20"
    >
      <defs>
        <filter id="sb-line-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>

        <filter id="sb-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {PATHS.map(({ d, glow }, index) => (
        <path
          key={`glow-${index}`}
          d={d}
          stroke={glow}
          strokeWidth="4"
          fill="none"
          filter="url(#sb-line-glow)"
          opacity="0.45"
        />
      ))}

      {PATHS.map(({ d, color, width }, index) => (
        <motion.path
          key={`path-${index}`}
          d={d}
          stroke={color}
          strokeWidth={width}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[index] }}
          transition={transition}
        />
      ))}

      {DOTS.map(([cx, cy, color], index) => (
        <g key={`dot-${index}`}>
          <circle
            cx={cx}
            cy={cy}
            r={8}
            fill={color}
            opacity="0.38"
            filter="url(#sb-dot-glow)"
          />
          <circle cx={cx} cy={cy} r={3.5} fill={color} opacity="1" />
        </g>
      ))}
    </svg>
  );
}

function SmartBooksGeminiEffect({ pathLengths }) {
  return (
    <div className="sticky mb-10 top-20 hidden h-screen overflow-hidden md:block">
      <div className="relative mx-auto flex h-full max-w-360 items-center justify-center">
        <div className="absolute top-[5%] z-30 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] font-black leading-[0.98] tracking-[-1.6px] text-white sm:text-[54px] lg:text-[70px]"
          >
            Connected Accounting
            <span className="block text-[#8f83ff]">for every business.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-5 max-w-190 px-5 text-sm font-semibold leading-7 text-white/55 sm:text-base"
          >
            SmartBooks AI connects schools, restaurants, shops, local
            businesses, and industries with AI accounting, payroll, GST reports,
            WhatsApp reminders, and bank sync.
          </motion.p>
        </div>

        <div className="absolute left-1/2 top-[8%] h-222.5 w-360 origin-top -translate-x-1/2 scale-[0.78] sm:scale-[0.84] lg:scale-[0.9] xl:scale-100">
          <ConnectorSVG pathLengths={pathLengths} />

          {leftServices.map((item, index) => (
            <InfoPill key={item.title} item={item} index={index} side="left" />
          ))}

          {rightFeatures.map((item, index) => (
            <InfoPill key={item.title} item={item} index={index} side="right" />
          ))}

          <CenterLogo />
        </div>
      </div>
    </div>
  );
}

export default function SmartBooksGeminiServices() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.78], [0.04, 1.15]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.78], [0.03, 1.15]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.78], [0.02, 1.15]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.78], [0.01, 1.15]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.78], [0, 1.15]);

  return (
    <section
      ref={ref}
      id="industries"
      className="relative w-full overflow-clip scroll-mt-24 bg-[#070713] md:h-[280vh] md:rounded-[34px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(82,68,167,0.42),transparent_34%),linear-gradient(180deg,#090716_0%,#120d2f_46%,#080713_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.17]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute inset-x-0 top-0 z-30 h-40 bg-linear-to-b from-[#070713] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-t from-[#070713] to-transparent" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-14 md:hidden">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8b0ff]">
            Connected Accounting
          </p>
          <h2 className="mt-3 text-[34px] font-black leading-[0.96] tracking-tighter sm:text-[42px]">
            for every business.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/65">
            SmartBooks AI connects schools, restaurants, shops, local
            businesses, and industries with AI accounting, payroll, GST
            reports, WhatsApp reminders, and bank sync.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {leftServices.map((item) => (
            <CompactUseCaseCard key={item.title} item={item} tone="left" />
          ))}
          {rightFeatures.map((item) => (
            <CompactUseCaseCard key={item.title} item={item} tone="right" />
          ))}
        </div>
      </div>

      <SmartBooksGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </section>
  );
}

function CompactUseCaseCard({ item, tone }) {
  return (
    <div
      className={`rounded-2xl border p-4 text-left shadow-[0_16px_40px_rgba(0,0,0,0.18)] ${
        tone === "left"
          ? "border-white/10 bg-white/6 text-white"
          : "border-[#8175ff]/30 bg-[#ffffff0d] text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10">
          <Icon type={item.icon} imageUrl={item.imageUrl} />
        </div>

        <div className="min-w-0">
          <p className="text-[15px] font-black leading-tight">{item.title}</p>
          <p className="mt-1 text-[12px] font-semibold text-white/65">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}