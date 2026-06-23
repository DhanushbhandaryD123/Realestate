import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import PropertyCard from "../ui/PropertyCard";
import Button from "../ui/Button";
import { properties } from "../../data/properties";
import { staggerContainer, viewport } from "../../utils/motion";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Handpicked"
            title="Featured Properties"
            subtitle="A selection of standout residences and spaces from our current portfolio."
          />
          <Button to="/properties" variant="outline" size="sm" className="border-navy/20 text-navy hover:bg-navy hover:text-white hover:border-navy">
            View All <ArrowRight size={16} />
          </Button>
        </div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
