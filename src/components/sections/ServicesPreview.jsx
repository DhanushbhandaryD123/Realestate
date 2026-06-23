import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { services } from "../../data/content";
import { fadeUp, staggerContainer, viewport } from "../../utils/motion";

export function ServiceGrid({ list = services }) {
  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
    >
      {list.map((s) => (
        <motion.div
          key={s.title}
          variants={fadeUp()}
          className="group rounded-2xl border border-navy/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-navy sm:p-6"
        >
          <span className="grid h-13 w-13 place-items-center rounded-xl bg-gold/10 p-3 text-gold transition group-hover:bg-gold group-hover:text-navy">
            <s.icon size={22} />
          </span>
          <h3 className="mt-4 font-display text-lg text-navy transition group-hover:text-white">
            {s.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/60 transition group-hover:text-cream/70">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="bg-cream py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="What We Do"
            title="Real Estate Services"
            subtitle="End-to-end support across the full property journey."
          />
          <Button to="/services" variant="outline" size="sm" className="border-navy/20 text-navy hover:bg-navy hover:text-white hover:border-navy">
            All Services <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-8 sm:mt-12">
          <ServiceGrid list={services.slice(0, 8)} />
        </div>
      </div>
    </section>
  );
}
