import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, Heart, Share2, GitCompare } from "lucide-react";
import { useState } from "react";
import { formatPrice } from "../../utils/format";
import { fadeUp } from "../../utils/motion";

export default function PropertyCard({ property, index = 0 }) {
  const [fav, setFav] = useState(false);

  return (
    <motion.article
      variants={fadeUp(index * 0.05)}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-navy/5"
    >
      <div className="relative h-60 overflow-hidden">
        <Link to={`/properties/${property.slug}`}>
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-70" />
        </Link>

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
            {property.status}
          </span>
          {property.badge && property.badge !== "Featured" && (
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              {property.badge}
            </span>
          )}
        </div>

        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <button
            onClick={() => setFav((v) => !v)}
            aria-label="Save property"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy backdrop-blur transition hover:bg-gold"
          >
            <Heart size={16} className={fav ? "fill-gold text-gold" : ""} />
          </button>
          <button
            aria-label="Share property"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy backdrop-blur transition hover:bg-gold"
          >
            <Share2 size={16} />
          </button>
          <button
            aria-label="Compare property"
            className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy backdrop-blur transition hover:bg-gold"
          >
            <GitCompare size={16} />
          </button>
        </div>

        <div className="absolute bottom-4 left-4">
          <p className="font-display text-2xl font-semibold text-white">
            {formatPrice(property.price)}
            {property.status === "For Rent" && (
              <span className="ml-1 text-sm font-body font-normal text-cream/80">/mo</span>
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/properties/${property.slug}`}>
          <h3 className="font-display text-lg font-semibold text-navy transition-colors group-hover:text-gold">
            {property.title}
          </h3>
        </Link>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-navy/55">
          <MapPin size={14} className="text-gold" />
          {property.location}, {property.city}
        </p>

        <div className="mt-4 flex items-center gap-5 border-t border-navy/8 pt-4 text-sm text-navy/70">
          {property.beds > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed size={16} className="text-gold" /> {property.beds}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Bath size={16} className="text-gold" /> {property.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={16} className="text-gold" /> {property.area.toLocaleString()} ft²
          </span>
        </div>
      </div>
    </motion.article>
  );
}
