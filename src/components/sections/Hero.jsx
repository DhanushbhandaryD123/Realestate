import { motion } from "framer-motion";
import { Search, MapPin, Home, Wallet, BedDouble, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { staggerContainer, fadeUp } from "../../utils/motion";

const heroImg =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80";

const fields = [
  { icon: MapPin, label: "Location", placeholder: "City or area" },
  { icon: Home, label: "Property Type", placeholder: "Any type" },
  { icon: Wallet, label: "Budget", placeholder: "No max" },
  { icon: BedDouble, label: "Bedrooms", placeholder: "Any" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      {/* Background */}
      <motion.img
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        src={heroImg}
        alt="Luxury property aerial view"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />

      <motion.div
        variants={staggerContainer(0.15, 0.3)}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-8"
      >
        <motion.span
          variants={fadeUp()}
          className="eyebrow inline-block text-gold"
        >
          ✦ Curated Prime Real Estate
        </motion.span>

        <motion.h1
          variants={fadeUp(0.1)}
          className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Find Your Dream Property{" "}
          <span className="text-gradient-gold">With Confidence</span>
        </motion.h1>

        <motion.p
          variants={fadeUp(0.2)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75"
        >
          Luxury homes, apartments, villas, commercial spaces and investment
          opportunities — handpicked and verified by advisors who know the market.
        </motion.p>

        <motion.div variants={fadeUp(0.3)} className="mt-8 flex flex-wrap gap-4">
          <Button to="/properties" size="lg">
            Explore Properties
          </Button>
          <Button to="/contact" variant="ghost" size="lg">
            Schedule Consultation
          </Button>
        </motion.div>

        {/* Search bar */}
        <motion.div
          variants={fadeUp(0.45)}
          className="mt-12 max-w-5xl rounded-2xl glass-light p-2"
        >
          <div className="grid gap-2 md:grid-cols-[repeat(4,1fr)_auto]">
            {fields.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <f.icon size={18} className="shrink-0 text-gold" />
                <div className="min-w-0">
                  <p className="text-[0.65rem] uppercase tracking-wider text-cream/50">
                    {f.label}
                  </p>
                  <input
                    placeholder={f.placeholder}
                    className="w-full bg-transparent text-sm text-white placeholder:text-cream/40 focus:outline-none"
                  />
                </div>
              </div>
            ))}
            <Link
              to="/properties"
              className="flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 font-medium text-navy transition hover:bg-gold-soft"
            >
              <Search size={18} /> Search
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-8 top-1/3 hidden xl:block"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-56 rounded-2xl glass p-5 text-white"
        >
          <p className="font-display text-3xl text-gold">$2.4B+</p>
          <p className="mt-1 text-sm text-cream/70">in property sold last year</p>
          <div className="gold-rule my-4" />
          <p className="text-sm text-cream/70">
            Trusted by <span className="text-white">1,960+</span> clients worldwide.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/60"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
