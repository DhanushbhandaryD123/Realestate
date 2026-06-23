import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/content";
import { fadeUp, staggerContainer, viewport } from "../../utils/motion";

export default function ShowcaseProjects() {
  return (
    <section className="relative overflow-hidden bg-navy-light py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="In Development"
          title="Latest Projects"
          subtitle="Off-plan and under-construction developments worth securing early."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-8 grid gap-5 sm:mt-14 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp()}
              className="group overflow-hidden rounded-2xl bg-navy ring-1 ring-white/8"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                  {p.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white">{p.name}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-cream/60">
                  <MapPin size={14} className="text-gold" /> {p.location}
                </p>

                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs text-cream/60">
                    <span>Construction progress</span>
                    <span className="text-gold">{p.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-gold to-gold-soft"
                    />
                  </div>
                </div>

                <p className="mt-5 flex items-center gap-1.5 text-sm text-cream/60">
                  <Calendar size={14} className="text-gold" /> Completion {p.completion}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
