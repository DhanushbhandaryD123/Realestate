import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { AgentGrid } from "../components/sections/AgentsPreview";
import { testimonials, stats } from "../data/content";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import { fadeUp, viewport, staggerContainer } from "../utils/motion";

export default function Agents() {
  return (
    <>
      <PageHeader
        title="Meet Our Advisors"
        subtitle="A handpicked team of specialists with deep local knowledge and a global network of buyers."
        breadcrumb={[{ label: "Agents" }]}
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The Team"
            title="Expertise You Can Trust"
            subtitle="Every advisor is vetted for track record, discretion and results."
          />
          <AgentGrid />
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-gold lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm tracking-wide text-cream/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Client Reviews"
            title="What Our Clients Say"
            subtitle="Relationships that outlast the transaction."
          />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-6 md:grid-cols-2"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp()}
                className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-navy/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-navy/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-14 text-center">
            <Button to="/contact" size="lg">
              Work With Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
