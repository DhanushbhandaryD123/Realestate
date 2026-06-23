import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import { categories } from "../../data/content";
import { fadeUp, staggerContainer, viewport } from "../../utils/motion";

export default function Categories() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Explore by"
          title="Property Categories"
          subtitle="Whatever you're searching for, start with the kind of space that fits."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6"
        >
          {categories.map((c) => (
            <motion.div key={c.name} variants={fadeUp()}>
              <Link
                to="/properties"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.06]"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy">
                  <c.icon size={26} />
                </span>
                <div>
                  <h3 className="font-display text-base text-white">{c.name}</h3>
                  <p className="mt-1 text-xs text-cream/50">{c.count} listings</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
