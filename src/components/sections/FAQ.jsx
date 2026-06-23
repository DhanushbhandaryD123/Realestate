import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "../../data/content";

export default function FAQ({ light = false }) {
  const [open, setOpen] = useState(0);

  return (
    <section className={`${light ? "bg-cream" : "bg-cream"} py-14 lg:py-24`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently Asked Questions"
          subtitle="Everything you might want to ask before getting started."
        />

        <div className="mt-8 space-y-3 sm:mt-12">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? "border-gold/40 bg-white" : "border-navy/8 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base text-navy sm:text-lg">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      isOpen ? "bg-gold text-navy" : "bg-navy/5 text-navy"
                    }`}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p className="px-4 pb-4 text-sm leading-relaxed text-navy/60 sm:px-6 sm:pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
