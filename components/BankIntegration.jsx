import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

// Using actual bank logos via Clearbit API
const EASE = "power3.out";

const useSafeLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
const leftOuterBanks = [
  { name: 'SBI', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxDUPSOY0c4zGBZlQ9bvJwfAGcphuXMDdwQ&s' },
  { name: 'Punjab National Bank', url: 'https://s3.ap-south-1.amazonaws.com/static.webhost.goldenpi/images/GPID100019.punjab%20national%20bank.png' },
  { name: 'Bank of Baroda', url: 'https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-icon.png' }
];

const leftInnerBanks = [
  { name: 'HDFC Bank', url: 'https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1720244492' },
  { name: 'Axis Bank', url: 'https://companieslogo.com/img/orig/AXISBANK.BO-8f59e95b.png?t=1720244490' }
];

const rightInnerBanks = [
  { name: 'ICICI Bank', url: 'https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1720244492' },
  { name: 'Kotak Mahindra', url: 'https://companieslogo.com/img/orig/KOTAKBANK.NS-36440c5e.png?t=1720244492' }
];

const rightOuterBanks = [
  { name: 'Yes Bank', url: 'https://companieslogo.com/img/orig/YESBANK.NS-a31ff15a.png?t=1720244494' },
  { name: 'Canara Bank', url: 'https://companieslogo.com/img/orig/CANBK.NS-94324ae3.png?t=1720244491' },
  { name: 'Union Bank', url: 'https://companieslogo.com/img/orig/UNIONBANK.NS-5bba728d.png?t=1720244494' }
];

const leftSecondOuter = [
  { name: 'IndusInd Bank', url: 'https://i.pinimg.com/736x/24/f9/b6/24f9b6f308523cd57d723ee717e1ef88.jpg' },
  { name: 'Federal Bank', url: 'https://www.federal.bank.in/documents/d/guest/federal-favicon-blue-1-' },
  { name: 'South Indian Bank', url: 'https://kikkidu.com/wp-content/uploads/2010/12/southIndianBank.jpg' },
  { name: 'RBL Bank', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgS5UaLYIuJWZV9rbs9RM9yCdKRcJYkS_nA&s' },
  { name: 'IDBI Bank', url: 'https://1000logos.net/wp-content/uploads/2021/05/IDBI-Bank-emblem.png' }
];

const rightSecondOuter = [
  { name: 'Bandhan Bank', url: 'https://i.pinimg.com/736x/9d/1c/43/9d1c433d8372320c2e4819ac25d67b69.jpg' },
  { name: 'Airtel Payments Bank', url: 'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/airtel-payments-bank-logo-hd.png' },
  { name: 'NSDL Bank', url: 'https://scontent.fvga2-2.fna.fbcdn.net/v/t39.30808-6/347786331_939337443783463_6007967760580454324_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zdO7jZdz4kYQ7kNvwFPiJYv&_nc_oc=Adq9HFjsLNn_dMMMocuLWmMMDGGA_eIDe81odDRAcJamphl87A5lN8aESV3m-25PDC8QpYDJorPz0Ug3Su0wRlDo&_nc_zt=23&_nc_ht=scontent.fvga2-2.fna&_nc_gid=SXgZvwWvnPxw5OIuDTAPFw&_nc_ss=7b289&oh=00_Af7szB1C8vNkSoVwpfrs-RCG_0J9-bit8rH0QBY3t8y1hA&oe=6A16BE97' },
  { name: 'Dhanlaxmi Bank', url: 'https://s3-symbol-logo.tradingview.com/dhanlaxmi-bank--600.png' },
  { name: 'Bank of India', url: 'https://companieslogo.com/img/orig/BANKINDIA.NS-e3d88e01.png?t=1720244490' }
];

// Reusable Card Component
const LogoCard = ({ url, name, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-[85px] h-[85px] md:w-[110px] md:h-[110px] bg-white rounded-2xl md:rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center p-3 md:p-4 hover:scale-105 transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
      }}
    >
      {/* Changed w-full h-full to w-[75%] h-[75%] for better spacing inside the card */}
      <img src={url} alt={name} className="w-[75%] h-[75%] object-contain" />
    </div>
  );
};

export default function BankHero() {
  return (
    <section className="w-full bg-[#fafbfc] min-h-[600px] flex items-center justify-center overflow-hidden py-16">
      <div className=" w-full flex flex-col lg:flex-row items-center justify-between px-4 gap-12 lg:gap-4">
        
        {/* --- LEFT SIDE LOGOS --- */}
        <div className="flex gap-4 md:gap-6 items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            {leftSecondOuter.map((bank, idx) => (
              <LogoCard key={`lso-${idx}`} url={bank.url} name={bank.name} index={idx} />
            ))}
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {leftOuterBanks.map((bank, idx) => (
              <LogoCard key={`lo-${idx}`} url={bank.url} name={bank.name} index={idx} />
            ))}
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {leftInnerBanks.map((bank, idx) => (
              <LogoCard key={`li-${idx}`} url={bank.url} name={bank.name} index={idx} />
            ))}
          </div>
        </div>

        {/* --- CENTER TEXT AREA --- */}
        <div className="text-center px-4 lg:px-8 z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.15]">
            <span className="text-[#5244a7] block mb-2">140+ Supported Banks</span>
            <span className="text-[#011B33] whitespace-nowrap">
               Goodbye to manual entry
            </span>
          </h1>

          {/* Updated copy to clarify the accounting software connection */}
          <p className="mt-5 text-[#4A5568] text-base md:text-lg font-medium leading-8">
            smartbooks ai seamlessly connects directly to your bank accounts. 
            Automatically sync and import transactions, match UPI payments, track daily expenses, 
            and reconcile payroll instantly. no manual entry required.
          </p>

          <button className="mt-8 px-8 py-2.5 border-2 border-[#011B33] text-[#011B33] font-bold rounded-lg hover:bg-[#011B33] hover:text-white transition-all duration-200">
            View all Banks
          </button>
        </div>

        {/* --- RIGHT SIDE LOGOS --- */}
        <div className="flex gap-4 md:gap-6 items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            {rightInnerBanks.map((bank, idx) => (
              <LogoCard key={`ri-${idx}`} url={bank.url} name={bank.name} index={idx} />
            ))}
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {rightOuterBanks.map((bank, idx) => (
              <LogoCard key={`ro-${idx}`} url={bank.url} name={bank.name} index={idx} />
            ))}
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            {rightSecondOuter.map((bank, idx) => (
              <LogoCard key={`rso-${idx}`} url={bank.url} name={bank.name} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}