import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Percent } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const tabs = [
  { id: "emi", label: "Mortgage EMI", icon: Calculator },
  { id: "roi", label: "ROI", icon: TrendingUp },
  { id: "yield", label: "Rental Yield", icon: Percent },
];

function Field({ label, value, onChange, min, max, step, prefix, suffix }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-cream/70">{label}</span>
        <span className="font-medium text-gold">
          {prefix}
          {Number(value).toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--color-gold)]"
      />
    </div>
  );
}

export default function InvestmentCalculator() {
  const [tab, setTab] = useState("emi");

  // EMI inputs
  const [price, setPrice] = useState(1200000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(5.5);
  const [years, setYears] = useState(20);

  // ROI / yield inputs
  const [rent, setRent] = useState(7000);
  const [appreciation, setAppreciation] = useState(4);

  const emi = useMemo(() => {
    const loan = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    if (r === 0) return loan / n;
    const m = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return m;
  }, [price, down, rate, years]);

  const annualRent = rent * 12;
  const grossYield = (annualRent / price) * 100;
  const totalReturn = grossYield + appreciation;

  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Plan Ahead"
          title="Investment Calculator"
          subtitle="Model your numbers before you commit — mortgage, returns and yield in one place."
        />

        <div className="mt-12 grid overflow-hidden rounded-3xl bg-navy-light ring-1 ring-white/8 lg:grid-cols-[1.2fr_1fr]">
          {/* Inputs */}
          <div className="p-8">
            <div className="mb-8 flex flex-wrap gap-2">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    tab === t.id
                      ? "bg-gold text-navy"
                      : "border border-white/10 text-cream/70 hover:text-white"
                  }`}
                >
                  <t.icon size={15} /> {t.label}
                </button>
              ))}
            </div>

            <div className="space-y-7">
              <Field
                label="Property Price"
                value={price}
                onChange={setPrice}
                min={200000}
                max={10000000}
                step={50000}
                prefix="$"
              />
              {tab === "emi" && (
                <>
                  <Field
                    label="Down Payment"
                    value={down}
                    onChange={setDown}
                    min={5}
                    max={60}
                    step={1}
                    suffix="%"
                  />
                  <Field
                    label="Interest Rate"
                    value={rate}
                    onChange={setRate}
                    min={1}
                    max={12}
                    step={0.1}
                    suffix="%"
                  />
                  <Field
                    label="Loan Term"
                    value={years}
                    onChange={setYears}
                    min={5}
                    max={30}
                    step={1}
                    suffix=" yrs"
                  />
                </>
              )}
              {(tab === "roi" || tab === "yield") && (
                <Field
                  label="Monthly Rent"
                  value={rent}
                  onChange={setRent}
                  min={1000}
                  max={50000}
                  step={500}
                  prefix="$"
                />
              )}
              {tab === "roi" && (
                <Field
                  label="Annual Appreciation"
                  value={appreciation}
                  onChange={setAppreciation}
                  min={0}
                  max={12}
                  step={0.5}
                  suffix="%"
                />
              )}
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col justify-center border-t border-white/8 bg-gradient-to-br from-navy to-navy-soft p-8 lg:border-l lg:border-t-0">
            <motion.div
              key={tab}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {tab === "emi" && (
                <>
                  <p className="text-sm uppercase tracking-wider text-cream/50">
                    Monthly Payment
                  </p>
                  <p className="mt-3 font-display text-5xl text-gradient-gold">
                    ${Math.round(emi).toLocaleString()}
                  </p>
                  <div className="mt-8 space-y-3 text-sm">
                    <Row label="Loan Amount" value={`$${Math.round(price * (1 - down / 100)).toLocaleString()}`} />
                    <Row label="Total Interest" value={`$${Math.round(emi * years * 12 - price * (1 - down / 100)).toLocaleString()}`} />
                    <Row label="Total Payable" value={`$${Math.round(emi * years * 12).toLocaleString()}`} />
                  </div>
                </>
              )}
              {tab === "roi" && (
                <>
                  <p className="text-sm uppercase tracking-wider text-cream/50">
                    Total Annual Return
                  </p>
                  <p className="mt-3 font-display text-5xl text-gradient-gold">
                    {totalReturn.toFixed(1)}%
                  </p>
                  <div className="mt-8 space-y-3 text-sm">
                    <Row label="Rental Yield" value={`${grossYield.toFixed(1)}%`} />
                    <Row label="Appreciation" value={`${appreciation.toFixed(1)}%`} />
                    <Row label="Annual Rent" value={`$${annualRent.toLocaleString()}`} />
                  </div>
                </>
              )}
              {tab === "yield" && (
                <>
                  <p className="text-sm uppercase tracking-wider text-cream/50">
                    Gross Rental Yield
                  </p>
                  <p className="mt-3 font-display text-5xl text-gradient-gold">
                    {grossYield.toFixed(2)}%
                  </p>
                  <div className="mt-8 space-y-3 text-sm">
                    <Row label="Monthly Rent" value={`$${rent.toLocaleString()}`} />
                    <Row label="Annual Rent" value={`$${annualRent.toLocaleString()}`} />
                    <Row label="Property Price" value={`$${price.toLocaleString()}`} />
                  </div>
                </>
              )}
              <p className="mt-8 text-xs text-cream/40">
                Indicative figures only — not financial advice.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/8 pb-3 text-cream/70">
      <span>{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}
