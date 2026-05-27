import React, { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Raghav",
    initials: "RG",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/49.webp",
    role: "Restaurant Owner",
    location: "Kadapa",
    text: "SmartBooks AI helped us manage billing, expenses, stock, and daily reports in one place. It is simple for our staff and saves time every day.",
  },
  {
    name: "Manasa",
    initials: "MS",
    image: "https://img.magnific.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
    role: "School Admin",
    location: "Andhra Pradesh",
    text: "Fee tracking, pending reminders, and student records became very easy. Our team can now manage collections without confusion.",
  },
  {
    name: "Kiran",
    initials: "KR",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/25.webp",
    role: "Retail Store Owner",
    location: "Kadapa",
    text: "Compared to traditional accounting software, SmartBooks AI feels clean, fast, and easy. Sales, purchases, and inventory are simple to check.",
  },
  {
    name: "Suresh",
    initials: "SR",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/6.webp",
    role: "Hotel Business",
    location: "Kadapa",
    text: "SmartBooks AI made supplier payments, purchase tracking, and daily billing smoother for our team.",
  },
  {
    name: "Priya",
    initials: "PR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0rr_JzjcNjmn8U44_pk7l2n9MdKl1OiwwlZl368vcw&s",
    role: "Boutique Owner",
    location: "Local Business",
    text: "I can see sales, payments, and expenses clearly. The WhatsApp reminders and reports are very useful for my business.",
  },
  {
    name: "Raghav",
    initials: "RG",
    image: "https://getswipe.azureedge.net/getswipe/images/customers-small/49.webp",
    role: "Shop Owner",
    location: "Kadapa",
    text: "Inventory, billing, and WhatsApp reminders are very helpful. It feels made for local businesses like ours.",
  },
];

export default function KindWordsSection() {
  const firstCardRef = useRef(null);
  const [isOutline, setIsOutline] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!firstCardRef.current) return;

      const firstCardTop = firstCardRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Normal first. When cards enter heading area, change to outline.
      setIsOutline(firstCardTop < windowHeight * 0.9);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#fbfaf7] pb-8 md:pb-0">
      <div className="relative mx-auto max-w-375 px-4 md:px-6">
        <div className="px-1 pt-24 text-center md:hidden">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5a4fcf]">
            Testimonials
          </p>
          <h2 className="mt-3 text-[34px] font-black uppercase leading-[0.95] tracking-[0.08em] text-slate-950">
            Kind Words
            <br />
            From Our Clients
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">
            Real businesses using SmartBooks AI to simplify billing, fees,
            stock, payroll, and reminders.
          </p>
        </div>

        {/* Sticky center heading */}
        <div className="sticky top-0 hidden h-screen items-center justify-center overflow-hidden md:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,79,207,0.09),transparent_44%)]" />

          <h2
            className={`kindWordsHeading relative z-0 select-none text-center text-[46px] font-black uppercase leading-[0.92] tracking-[0.08em] transition-all duration-700 ease-out sm:text-[64px] md:text-[96px] md:tracking-widest lg:text-[128px] xl:text-[148px] ${
              isOutline ? "headingOutline" : "headingSolid"
            }`}
          >
            Kind Words
            <br />
            From Our Clients
          </h2>
        </div>

        {/* Cards scrolling over heading */}
        <div className="relative z-20 grid grid-cols-1 gap-x-12 gap-y-6 pb-16 pt-8 md:mt-[-100vh] md:min-h-[230vh] md:grid-cols-2 md:gap-y-20 md:pb-40 md:pt-[88vh] lg:grid-cols-3">
          <div ref={firstCardRef}>
            <ReviewCard review={reviews[0]} />
          </div>

          <ReviewCard review={reviews[1]} className="lg:mt-32" />

          <ReviewCard review={reviews[2]} className="lg:mt-10" />

          <ReviewCard review={reviews[3]} className="lg:mt-6" />

          <ReviewCard review={reviews[4]} className="lg:mt-36" />

          <ReviewCard review={reviews[5]} className="lg:mt-16" />
        </div>
      </div>

      <style jsx>{`
        .kindWordsHeading {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
          text-shadow: 0 24px 70px rgba(90, 79, 207, 0.1);
        }

        .headingSolid {
          color: #000000;
          -webkit-text-stroke: 0px transparent;
          text-stroke: 0px transparent;
          opacity: 1;
        }

        .headingOutline {
          color: transparent;
          -webkit-text-stroke: 3px rgba(0, 0, 0, 0.24);
          text-stroke: 3px rgba(0, 0, 0, 0.24);
          opacity: 1;
          text-shadow: none;
        }

        @media (max-width: 768px) {
          .headingOutline {
            -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.26);
            text-stroke: 1.5px rgba(0, 0, 0, 0.26);
          }
        }
      `}</style>
    </section>
  );
}

function ReviewCard({ review, className = "" }) {
  return (
    <div
      className={`group relative min-h-auto rounded-3xl border border-[#d8d8d8] bg-white px-5 py-5 shadow-[0_22px_70px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(15,23,42,0.16)] sm:min-h-82.5 sm:px-6 sm:py-6 ${className}`}
    >
      {/* Top speech bubble tail */}
      <div className="absolute -top-4.25 left-12 hidden h-9 w-9 rotate-45 rounded-tl-lg border-l border-t border-[#d8d8d8] bg-white sm:block" />

      <div className="relative z-10 flex items-start gap-4">
        <Avatar review={review} />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1 text-[13px] leading-tight text-slate-500 sm:text-[14px]">
            <span className="font-black tracking-[-0.02em] text-[#171b2f]">
              {review.name}
            </span>

            <span className="rounded-[5px] bg-[#ff4f82] px-1.5 py-0.5 text-[10px] font-black text-white">
              ★
            </span>

            <span className="font-medium">recommends</span>

            <span className="font-black tracking-[-0.02em] text-[#171b2f]">
              SmartBooks AI.
            </span>
          </div>

          <p className="mt-1 text-[12px] font-semibold tracking-wide text-slate-500">
            {review.role} · {review.location}
          </p>

          <p className="mt-6 text-[15px] font-medium leading-[1.68] tracking-[-0.01em] text-[#202342] sm:mt-7 sm:text-[17px] md:text-[18px]">
            {review.text}
          </p>

          <div className="mt-6 flex items-center gap-1 text-[18px] tracking-[0.08em] text-yellow-400 sm:mt-7 sm:text-[19px]">
            ★★★★★
          </div>
        </div>

        <div className="text-[18px] font-black leading-none text-slate-400 sm:text-[22px]">
          ...
        </div>
      </div>

      {/* Bottom speech bubble tail */}
      <div className="absolute -bottom-4.25 right-12 hidden h-9 w-9 rotate-45 rounded-br-lg border-b border-r border-[#d8d8d8] bg-white sm:block" />
    </div>
  );
}

function Avatar({ review }) {
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-linear-to-br from-[#5a4fcf] to-[#18b6f6] shadow-md ring-4 ring-white">
      <img
        src={review.image}
        alt={review.name}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-0 -z-10 flex items-center justify-center text-[15px] font-black text-white">
        {review.initials}
      </div>
    </div>
  );
}