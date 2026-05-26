import React from "react";

const columns = [
  {
    key: "tally",
    name: "Tally",
    logo: "https://e7.pngegg.com/pngimages/251/36/png-clipart-bhopal-tally-solutions-tally-institute-of-learning-training-tally-miscellaneous-text-thumbnail.png",
  },
  {
    key: "quickbooks",
    name: "QuickBooks",
    logo: "https://quickbooks.intuit.com/cas/dam/IMAGE/A6OWCozsM/qb_thumb.png",
  },
  {
    key: "smartbooks",
    name: "SmartBooks AI",
    logo: "/icon.png",
    highlight: true,
  },
  {
    key: "xero",
    name: "Xero",
    logo: "https://upload.wikimedia.org/wikipedia/en/archive/9/9f/20171204173437%21Xero_software_logo.svg",
  },
  {
    key: "zoho",
    name: "Zoho Books",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XmEjmdiOkCacU6IVYJUCM5ePpUUBB48TSA&s",
  },
  {
    key: "odoo",
    name: "Odoo",
    logo: "https://odoocdn.com/web/image/59965321-a6029fba/icon-hi.png?access_token=7fa8da19-a37f-4b4b-81b1-5ede488bb18b",
  },
];

const rows = [
  {
    label: "Starting price",
    smartbooks: "₹2,999",
    tally: "₹3,855",
    quickbooks: "₹4,260",
    xero: "₹4,305",
    zoho: "₹4,122",
    odoo: "₹6,606",
  },
  {
    label: "AI automation",
    smartbooks: "Yes",
    tally: "No",
    quickbooks: "Partial",
    xero: "Limited",
    zoho: "Limited",
    odoo: "Addon / custom",
  },
  {
    label: "GST invoicing",
    smartbooks: "Yes",
    tally: "Yes",
    quickbooks: "Limited",
    xero: "Limited",
    zoho: "Yes",
    odoo: "Custom setup",
  },
  {
    label: "Billing & invoices",
    smartbooks: "Yes",
    tally: "Yes",
    quickbooks: "Yes",
    xero: "Yes",
    zoho: "Yes",
    odoo: "Yes",
  },
  {
    label: "Expenses & purchases",
    smartbooks: "Yes",
    tally: "Yes",
    quickbooks: "Yes",
    xero: "Yes",
    zoho: "Yes",
    odoo: "Yes",
  },
  {
    label: "Bank reconciliation",
    smartbooks: "AI auto match",
    tally: "Manual / basic",
    quickbooks: "Manual",
    xero: "Manual",
    zoho: "Manual",
    odoo: "Manual",
  },
  {
    label: "Inventory management",
    smartbooks: "Yes",
    tally: "Yes",
    quickbooks: "Limited",
    xero: "Limited",
    zoho: "Yes",
    odoo: "Yes",
  },
  {
    label: "WhatsApp reminders",
    smartbooks: "Yes",
    tally: "No",
    quickbooks: "No",
    xero: "No",
    zoho: "Limited",
    odoo: "Extra integration",
  },
  {
    label: "Multi-user access",
    smartbooks: "Unlimited",
    tally: "Extra cost",
    quickbooks: "Limited by plan",
    xero: "Limited by plan",
    zoho: "Limited by plan",
    odoo: "Higher cost",
  },
  {
    label: "Cloud access",
    smartbooks: "Yes",
    tally: "Limited / setup",
    quickbooks: "Yes",
    xero: "Yes",
    zoho: "Yes",
    odoo: "Yes",
  },
  {
    label: "School management",
    smartbooks: "Fees + records",
    tally: "No",
    quickbooks: "No",
    xero: "No",
    zoho: "No",
    odoo: "Custom setup",
  },
  {
    label: "Restaurant support",
    smartbooks: "Billing + stock",
    tally: "Basic",
    quickbooks: "Generic",
    xero: "Generic",
    zoho: "Generic",
    odoo: "Custom setup",
  },
  {
    label: "Shop / retail support",
    smartbooks: "Sales + stock",
    tally: "Yes",
    quickbooks: "Generic",
    xero: "Generic",
    zoho: "Yes",
    odoo: "Yes",
  },
  {
    label: "Local business support",
    smartbooks: "All-in-one",
    tally: "Accounting only",
    quickbooks: "Generic",
    xero: "Generic",
    zoho: "Generic",
    odoo: "Complex setup",
  },
  {
    label: "Payroll / salary",
    smartbooks: "Yes",
    tally: "Manual / addon",
    quickbooks: "Premium plan",
    xero: "Premium plan",
    zoho: "Premium plan",
    odoo: "Premium plan",
  },
  {
    label: "Role permissions",
    smartbooks: "Yes",
    tally: "Basic",
    quickbooks: "Yes",
    xero: "Yes",
    zoho: "Yes",
    odoo: "Yes",
  },
  {
    label: "Multi-branch support",
    smartbooks: "Yes",
    tally: "Premium plan / setup",
    quickbooks: "Premium plan",
    xero: "Premium plan",
    zoho: "Premium plan",
    odoo: "Premium plan",
  },
  {
    label: "Customization",
    smartbooks: "Yes",
    tally: "Limited",
    quickbooks: "Limited",
    xero: "Limited",
    zoho: "Limited",
    odoo: "Yes but costly",
  },
];

export default function PricingComparisonSection() {
  const smartbooksColumnIndex = 2; // 0: Features, 1: Tally, 2: SmartBooks
  
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-[1500px] px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#5a4fcf]">
            Pricing & Features Comparison
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#08111f] md:text-4xl lg:text-5xl">
            SmartBooks AI vs other accounting software
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
            Built for schools, restaurants, shops, and local businesses with AI
            automation, WhatsApp reminders, inventory, billing, and flexible
            customization.
          </p>
        </div>

        <div className="relative overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
          {/* SmartBooks center highlight - responsive positioning */}
          <style>{`
            .smartbooks-column {
              background: linear-gradient(180deg, rgba(250, 249, 255, 0.8), rgba(255, 255, 255, 0.5));
              border-left: 3px solid #5a4fcf;
              border-right: 3px solid #5a4fcf;
            }
          `}</style>

          <table className="w-full min-w-[1000px] border-collapse">
            <colgroup>
              <col className="w-[200px]" />
              <col className="w-[140px]" />
              <col className="w-[140px]" />
              <col className="w-[140px]" />
              <col className="w-[140px]" />
              <col className="w-[140px]" />
              <col className="w-[140px]" />
            </colgroup>

            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="sticky left-0 z-30 min-w-[200px] bg-slate-50 px-4 py-5 text-left text-[11px] font-bold uppercase tracking-wide text-slate-600">
                  Features
                </th>

                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`relative min-w-[140px] px-2 py-5 text-center transition-colors ${
                      column.highlight ? "smartbooks-column" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div
                        className={`flex h-10 w-10 items-center justify-center ${
                          column.key === "smartbooks"
                            ? "rounded-lg bg-gradient-to-br from-[#5a4fcf] to-[#4839a8]"
                            : ""
                        }`}
                      >
                        <img
                          src={column.logo}
                          alt={column.name}
                          className={`object-contain ${
                            column.key === "smartbooks"
                              ? "h-8 w-8 rounded-md"
                              : "h-7 w-auto"
                          }`}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>

                      <span
                        className={`text-center text-[12px] font-bold md:text-[13px] ${
                          column.highlight
                            ? "text-[#5a4fcf]"
                            : "text-slate-700"
                        }`}
                      >
                        {column.name}
                      </span>

                     
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-slate-100 transition-colors hover:bg-slate-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  }`}
                >
                  <td className="sticky left-0 z-20 bg-inherit px-4 py-4 text-[12px] font-semibold text-slate-800 md:text-[13px]">
                    {row.label}
                  </td>

                  {columns.map((column, colIndex) => {
                    const value = row[column.key];
                    const isSmartBooks = column.key === "smartbooks";

                    return (
                      <td
                        key={column.key}
                        className={`px-2 py-4 text-center ${
                          isSmartBooks ? "smartbooks-column font-semibold" : ""
                        }`}
                      >
                        <ValueBadge value={value} highlight={isSmartBooks} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <SummaryCard
            title="For schools"
            text="Fee tracking, student records, pending fee reminders, payroll, and principal dashboard."
          />
          <SummaryCard
            title="For restaurants & shops"
            text="Fast billing, purchase tracking, inventory control, supplier payments, and daily reports."
          />
          <SummaryCard
            title="For local businesses"
            text="AI automation, WhatsApp reminders, bank matching, multi-branch support, and customization."
          />
        </div>
      </div>
    </section>
  );
}

function ValueBadge({ value, highlight }) {
  const lower = String(value).toLowerCase();

  const isGood =
    lower === "yes" ||
    lower === "unlimited" ||
    lower === "ai auto match" ||
    lower === "all-in-one" ||
    lower.includes("fees") ||
    lower.includes("billing") ||
    lower.includes("sales") ||
    lower.includes("records") ||
    lower.includes("stock");

  const isWarning =
    lower.includes("limited") ||
    lower.includes("premium plan") ||
    lower.includes("addon") ||
    lower.includes("setup") ||
    lower.includes("generic") ||
    lower.includes("basic") ||
    lower.includes("manual") ||
    lower.includes("partial") ||
    lower.includes("extra") ||
    lower.includes("custom");

  const isBad = lower === "no" || lower.includes("complex");

  let badgeClass =
    "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap";

  if (highlight && isGood) {
    badgeClass +=
      " bg-[#5a4fcf] text-white shadow-md";
  } else if (highlight && isWarning) {
    badgeClass += " bg-[#f3e8ff] text-[#5a4fcf]";
  } else if (highlight && isBad) {
    badgeClass += " bg-white text-slate-600";
  } else if (highlight) {
    badgeClass += " bg-[#f3e8ff] text-[#5a4fcf]";
  } else if (isGood) {
    badgeClass += " bg-emerald-50 text-emerald-700";
  } else if (isWarning) {
    badgeClass += " bg-amber-50 text-amber-700";
  } else if (isBad) {
    badgeClass += " bg-red-50 text-red-700";
  } else {
    badgeClass += " bg-slate-50 text-slate-600";
  }

  return <span className={badgeClass}>{value}</span>;
}

function SummaryCard({ icon, title, text }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition-all hover:shadow-md hover:border-[#5a4fcf]/20">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600 md:text-[14px]">
        {text}
      </p>
    </div>
  );
}