import { motion } from "framer-motion";
import { Phone, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { agents } from "../../data/agents";
import { fadeUp, staggerContainer, viewport } from "../../utils/motion";

export function AgentGrid({ list = agents }) {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
    >
      {list.map((a) => (
        <motion.article
          key={a.id}
          variants={fadeUp()}
          className="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-navy/5"
        >
          <div className="relative h-72 overflow-hidden">
            <img
              src={a.image}
              alt={a.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-4 justify-center gap-2 pb-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy transition hover:bg-gold"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <div className="p-5 text-center">
            <h3 className="font-display text-lg text-navy">{a.name}</h3>
            <p className="text-sm text-gold">{a.role}</p>
            <div className="mt-4 flex justify-center gap-6 border-t border-navy/8 pt-4 text-sm text-navy/60">
              <span>
                <span className="block font-display text-lg text-navy">{a.experience}y</span>
                Experience
              </span>
              <span>
                <span className="block font-display text-lg text-navy">{a.sold}</span>
                Sold
              </span>
            </div>
            <a
              href={`tel:${a.phone}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy transition hover:text-gold"
            >
              <Phone size={15} className="text-gold" /> Contact
            </a>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default function AgentsPreview() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="The People"
            title="Meet Our Agents"
            subtitle="Specialists who pair market intelligence with genuine, personal service."
          />
          <Button to="/agents" variant="outline" size="sm" className="border-navy/20 text-navy hover:bg-navy hover:text-white hover:border-navy">
            All Agents <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-12">
          <AgentGrid list={agents.slice(0, 4)} />
        </div>
      </div>
    </section>
  );
}
