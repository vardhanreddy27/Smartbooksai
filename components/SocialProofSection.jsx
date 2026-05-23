import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviewSets = [
  [
    { name: "Raghav Kumar", type: "School Owner", rating: "4.5" },
    { name: "Kiran Reddy", type: "Restaurant Owner", rating: "4.5" },
    { name: "Manasa Rao", type: "Retail Business", rating: "4.4" },
    { name: "Priya Nair", type: "Local Business", rating: "4.5" },
    { name: "Prakash Varma", type: "Accounts Manager", rating: "4.5" },
  ],
  [
    { name: "Suresh Kumar", type: "School Accountant", rating: "4.6" },
    { name: "Naveen Reddy", type: "Cafe Owner", rating: "4.5" },
    { name: "Anjali Sharma", type: "Boutique Owner", rating: "4.7" },
    { name: "Rohit Varma", type: "Shop Owner", rating: "4.5" },
    { name: "Meghana Rao", type: "Finance Admin", rating: "4.6" },
  ],
];

function Stars() {
  return (
    <div className="flex items-center gap-[2px]">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-[15px] leading-none text-[#FFC72C]">
          ★
        </span>
      ))}
    </div>
  );
}

const fastTransition = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 12, 
    filter: "blur(16px)", 
    scale: 0.97
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: fastTransition
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    filter: "blur(16px)",
    scale: 0.97,
    transition: { duration: 0.18, ease: "easeIn" }
  },
};

export default function SocialProofSection() {
  const [activeSet, setActiveSet] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSet((prev) => (prev + 1) % reviewSets.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[34px] px-8 py-6">
          
          {/* Main flex row keeping everything aligned on the same horizontal line */}
          <div className="relative z-10 flex flex-row items-center justify-between gap-8 w-full">
            
            {/* Standard, static header layout block (No longer animates) */}
            <div className="w-[260px] shrink-0">
              <p className="text-[20px] font-black tracking-[-0.3px] text-slate-800 whitespace-nowrap">
                Trusted by local businesses
              </p>
              <p className="mt-1 text-[13px] font-bold text-slate-400 whitespace-nowrap">
                Schools • Restaurants • Shops
              </p>
            </div>

            {/* Grid Track Wrapper for fast-blurs */}
            <div className="grow relative flex items-center min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`grid-${activeSet}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-5 gap-4 w-full"
                >
                  {reviewSets[activeSet].map((review, index) => (
                    <motion.div
                      key={`${review.name}-${index}`}
                      variants={cardVariants}
                      className="relative min-w-0"
                    >
                      <div className="relative rounded-2xl px-5 py-4 transition-shadow duration-300 hover:shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-[15px] font-black tracking-[-0.3px] text-slate-900">
                            {review.name}
                          </p>
                          <span className="shrink-0 text-[12px] font-black text-[#5244a7]">
                            {review.rating}
                          </span>
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                          <Stars />
                          <p className="truncate text-[11px] font-bold text-slate-400">
                            {review.type}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}