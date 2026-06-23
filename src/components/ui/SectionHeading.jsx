import { motion } from "framer-motion";
import { fadeUp, viewport } from "../../utils/motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      variants={fadeUp()}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={`flex flex-col ${alignment} max-w-2xl gap-4`}
    >
      {eyebrow && (
        <span className="eyebrow text-gold">{eyebrow}</span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed ${
            light ? "text-cream/70" : "text-navy/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      {align === "center" && <div className="gold-rule w-24 mt-1" />}
    </motion.div>
  );
}
