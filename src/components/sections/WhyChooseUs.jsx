import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";
import { whyChooseUs, stats } from "../../data/content";
import { fadeUp, staggerContainer, viewport } from "../../utils/motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          eyebrow="The LUXE Difference"
          title="Why Choose Us"
          subtitle="A complete advisory service, built around one outcome: the right decision for you."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp()}
              className="group rounded-2xl border border-navy/8 bg-white p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 sm:p-7"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                <item.icon size={24} />
              </span>
              <h3 className="mt-5 font-display text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Counters */}
        <div className="mt-10 grid grid-cols-2 gap-6 rounded-3xl bg-navy px-4 py-10 sm:mt-16 sm:gap-8 sm:px-6 sm:py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl text-gradient-gold sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-cream/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
