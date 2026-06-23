import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../../utils/motion";

export default function PageHeader({ title, subtitle, breadcrumb = [], image }) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-navy pb-14 pt-32">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        </>
      )}
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-5 lg:px-8"
      >
        <motion.nav
          variants={fadeUp()}
          className="mb-4 flex items-center gap-2 text-sm text-cream/60"
        >
          <Link to="/" className="hover:text-gold">Home</Link>
          {breadcrumb.map((b) => (
            <span key={b.label} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-gold/60" />
              {b.to ? (
                <Link to={b.to} className="hover:text-gold">{b.label}</Link>
              ) : (
                <span className="text-gold">{b.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
        <motion.h1
          variants={fadeUp(0.1)}
          className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp(0.2)}
            className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div variants={fadeUp(0.3)} className="gold-rule mt-6 w-28" />
      </motion.div>
    </section>
  );
}
