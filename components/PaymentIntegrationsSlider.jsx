import React from "react";

const paymentIntegrations = [
  {
    name: "Paytm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Paytm_Logo.png",
    bg: "bg-[#f4efff]",
    logoClass: "max-h-[38px] max-w-[120px]",
  },
  {
    name: "PhonePe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/3840px-PhonePe_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    bg: "bg-[#eef6ff]",
    logoClass: "max-h-[38px] max-w-[120px]",
  },
  {
    name: "RuPay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1280px-RuPay.svg.png",
    bg: "bg-[#eef6ff]",
    logoClass: "max-h-[40px] max-w-[125px]",
  },
  {
    name: "Mastercard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/3840px-Mastercard-logo.svg.png",
    bg: "bg-[#fff4e8]",
    logoClass: "max-h-[36px] max-w-[110px]",
  },
  {
    name: "Visa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg/3840px-Visa_Inc._logo_%282021%E2%80%93present%29.svg.png",
    bg: "bg-[#f2f4ff]",
    logoClass: "max-h-[34px] max-w-[110px]",
  },{
    name: "UPI",
    logo: "  https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/3840px-UPI-Logo-vector.svg.png",
    bg: "bg-[#f2f4ff]",
    logoClass: "max-h-[34px] max-w-[110px]",
  },
];

function PaymentTile({ item }) {
  return (
    <div
      className={`flex h-[76px] items-center justify-center overflow-hidden rounded-[26px] ${item.bg} px-5 shadow-[0_14px_28px_rgba(15,23,42,0.10)]`}
    >
      <img
        src={item.logo}
        alt={item.name}
        loading="lazy"
        className={`${item.logoClass} h-auto w-auto object-contain`}
      />
    </div>
  );
}

export default function PaymentIntegrationsVerticalSlider() {
  const firstColumn = [
    paymentIntegrations[1],
    paymentIntegrations[0],
    paymentIntegrations[1],
    paymentIntegrations[4],
    paymentIntegrations[3],
    paymentIntegrations[5],
  ];

  const secondColumn = [
    paymentIntegrations[2],
    paymentIntegrations[1],
    paymentIntegrations[2],
    paymentIntegrations[3],
    paymentIntegrations[0],
    paymentIntegrations[5],
  ];

  const loopOne = [...firstColumn, ...firstColumn];
  const loopTwo = [...secondColumn, ...secondColumn];

  return (
    <div className="relative h-full w-full overflow-hidden bg-transparent">
      <div className="grid h-full grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 animate-payment-scroll-up">
          {loopOne.map((item, index) => (
            <PaymentTile key={`${item.name}-left-${index}`} item={item} />
          ))}
        </div>

        <div className="flex flex-col gap-4 animate-payment-scroll-down">
          {loopTwo.map((item, index) => (
            <PaymentTile key={`${item.name}-right-${index}`} item={item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes payment-scroll-up {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes payment-scroll-down {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-payment-scroll-up {
          animation: payment-scroll-up 26s linear infinite;
        }

        .animate-payment-scroll-down {
          animation: payment-scroll-down 26s linear infinite;
        }
      `}</style>
    </div>
  );
}