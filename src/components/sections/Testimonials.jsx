import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const go = (dir) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-navy py-14 lg:py-24">
      <Quote
        size={220}
        className="pointer-events-none absolute -left-10 top-10 text-white/[0.03]"
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          light
          eyebrow="Client Stories"
          title="What Our Clients Say"
        />

        <div className="relative mt-8 sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-xl leading-relaxed text-white sm:text-2xl lg:text-[1.75rem]">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40"
                />
                <div className="text-left">
                  <p className="font-display text-lg text-white">{t.name}</p>
                  <p className="text-sm text-gold">{t.role}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream/70 transition hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream/70 transition hover:border-gold hover:text-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
