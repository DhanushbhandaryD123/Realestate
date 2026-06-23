import { motion } from "framer-motion";
import { Target, Eye, Award, ShieldCheck } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import Button from "../components/ui/Button";
import FAQ from "../components/sections/FAQ";
import { AgentGrid } from "../components/sections/AgentsPreview";
import { stats } from "../data/content";
import { fadeUp, slideLeft, slideRight, viewport, staggerContainer } from "../utils/motion";

const timeline = [
  { year: "2009", title: "Founded", desc: "LUXE Estate opens its first office with a team of three." },
  { year: "2014", title: "Going Global", desc: "Expanded into international markets across three continents." },
  { year: "2019", title: "1,000 Sales", desc: "Crossed a thousand completed luxury transactions." },
  { year: "2026", title: "Market Leader", desc: "Now operating in 38 cities with 64 expert advisors." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Transparent advice, every time — even when it costs us the deal." },
  { icon: Award, title: "Excellence", desc: "An obsessive standard of service from first call to handover." },
  { icon: Target, title: "Precision", desc: "Data-led decisions that protect and grow your investment." },
  { icon: Eye, title: "Discretion", desc: "Privacy and confidentiality at the heart of how we work." },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About LUXE Estate"
        subtitle="A premium property house built on trust, expertise and an eye for the exceptional."
        breadcrumb={[{ label: "About" }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Story */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <motion.div
            variants={slideRight()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-display text-3xl text-navy lg:text-4xl">
              Seventeen years of moving people into homes they love
            </h2>
            <p className="mt-5 leading-relaxed text-navy/70">
              What began as a boutique agency with a single office has grown into
              one of the most trusted names in luxury real estate. We&rsquo;ve
              never lost the personal touch that started it all — every client is
              still treated as our only client.
            </p>
            <p className="mt-4 leading-relaxed text-navy/70">
              From waterfront villas to skyline penthouses and high-yield
              commercial assets, our advisors combine deep local knowledge with a
              global network of buyers and sellers.
            </p>
            <Button to="/contact" className="mt-8">
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            variants={slideLeft()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
              alt="Luxury home"
              className="rounded-3xl object-cover shadow-2xl"
            />
            <div className="glass-light absolute -bottom-6 -left-6 rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-display text-3xl font-bold text-navy">17+</p>
              <p className="text-xs tracking-wide text-navy/60">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          <motion.div
            variants={fadeUp()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="glass rounded-2xl p-9"
          >
            <Target className="text-gold" size={30} />
            <h3 className="mt-4 font-display text-2xl text-white">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-cream/70">
              To make every property decision confident and rewarding — pairing
              world-class advice with genuine care, so our clients always move
              forward on the best possible terms.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="glass rounded-2xl p-9"
          >
            <Eye className="text-gold" size={30} />
            <h3 className="mt-4 font-display text-2xl text-white">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-cream/70">
              To be the most trusted name in luxury real estate worldwide — the
              first call for anyone buying, selling or investing in property that
              matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-navy lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm tracking-wide text-navy/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            subtitle="The principles behind every relationship we build."
          />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp()}
                className="rounded-2xl border border-navy/10 bg-cream p-7 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                  <v.icon className="text-gold" size={24} />
                </div>
                <h3 className="mt-4 font-display text-xl text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-navy/60">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones"
            subtitle="A timeline of growth, trust and results."
            light
          />
          <div className="relative mt-4">
            <div className="absolute left-4 top-0 h-full w-px bg-gold/30 md:left-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  variants={i % 2 === 0 ? slideRight() : slideLeft()}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute top-1.5 flex h-3 w-3 -translate-x-1/2 rounded-full bg-gold ring-4 ring-gold/20 left-4 md:left-auto ${
                      i % 2 === 0 ? "md:-right-1.5 md:left-auto" : "md:-left-1.5"
                    }`}
                  />
                  <p className="font-display text-2xl font-bold text-gold">
                    {t.year}
                  </p>
                  <h4 className="mt-1 font-display text-lg text-white">
                    {t.title}
                  </h4>
                  <p className="mt-1 text-sm text-cream/60">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The People"
            title="Meet The Team"
            subtitle="Specialists who make the exceptional feel effortless."
          />
          <AgentGrid />
        </div>
      </section>

      <FAQ />
    </>
  );
}
