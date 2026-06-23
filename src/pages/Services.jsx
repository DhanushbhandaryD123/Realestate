import { motion } from "framer-motion";
import { Search, FileSearch, Handshake, KeyRound } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import { ServiceGrid } from "../components/sections/ServicesPreview";
import { fadeUp, viewport, staggerContainer } from "../utils/motion";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We learn your goals, budget and timeline to build a precise brief.",
  },
  {
    icon: FileSearch,
    title: "Curation",
    desc: "You receive a shortlist of vetted properties matched to your brief.",
  },
  {
    icon: Handshake,
    title: "Negotiation",
    desc: "We represent your interests to secure the best possible terms.",
  },
  {
    icon: KeyRound,
    title: "Completion",
    desc: "Legal, financing and handover managed end-to-end, stress-free.",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="A full-service property partner — from first viewing to long-term management."
        breadcrumb={[{ label: "Services" }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything Under One Roof"
            subtitle="Eight specialised services designed to cover the entire property journey."
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="How We Work"
            subtitle="A clear, four-step approach that keeps you informed at every stage."
            light
          />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp()}
                className="glass relative rounded-2xl p-7"
              >
                <span className="font-display text-5xl font-bold text-gold/25">
                  0{i + 1}
                </span>
                <s.icon className="mt-4 text-gold" size={26} />
                <h3 className="mt-3 font-display text-xl text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-cream py-20 text-center lg:py-24">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-display text-3xl text-navy lg:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-navy/60">
            Book a complimentary consultation and we&rsquo;ll map out your options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Schedule Consultation
            </Button>
            <Button to="/properties" variant="outline" size="lg">
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
