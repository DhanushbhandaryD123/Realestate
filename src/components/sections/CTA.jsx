import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import Button from "../ui/Button";
import { fadeUp, viewport } from "../../utils/motion";

const bg =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />

      <motion.div
        variants={fadeUp()}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mx-auto max-w-7xl px-4 py-14 text-center sm:px-5 sm:py-24 lg:px-8"
      >
        <span className="eyebrow text-gold">Let's Begin</span>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready To Find Your Dream Property?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-cream/70">
          Speak to an advisor today and let us shortlist the homes worth your time.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Button to="/contact" size="lg">
            <Phone size={18} /> Contact an Agent
          </Button>
          <Button to="/properties" variant="ghost" size="lg">
            <CalendarCheck size={18} /> Book a Property Tour
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
