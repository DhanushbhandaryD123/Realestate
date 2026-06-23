import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  Calendar,
  Car,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Heart,
  Share2,
  Play,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import PropertyCard from "../components/ui/PropertyCard";
import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import {
  getPropertyBySlug,
  getRelatedProperties,
} from "../data/properties";
import { getAgentById } from "../data/agents";
import { formatFullPrice } from "../utils/format";
import { fadeUp, staggerContainer, viewport } from "../utils/motion";

function MortgageWidget({ price }) {
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(5.5);
  const [years, setYears] = useState(20);

  const emi = useMemo(() => {
    const loan = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    return (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [price, down, rate, years]);

  const rows = [
    { label: "Down payment", value: down, set: setDown, min: 5, max: 60, step: 1, suffix: "%" },
    { label: "Interest rate", value: rate, set: setRate, min: 1, max: 12, step: 0.1, suffix: "%" },
    { label: "Term", value: years, set: setYears, min: 5, max: 30, step: 1, suffix: " yrs" },
  ];

  return (
    <div className="rounded-2xl bg-navy p-6 text-white">
      <h3 className="font-display text-lg">Mortgage Calculator</h3>
      <div className="mt-5 space-y-5">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex justify-between text-sm">
              <span className="text-cream/70">{r.label}</span>
              <span className="text-gold">
                {r.value}
                {r.suffix}
              </span>
            </div>
            <input
              type="range"
              min={r.min}
              max={r.max}
              step={r.step}
              value={r.value}
              onChange={(e) => r.set(Number(e.target.value))}
              className="mt-2 w-full accent-[var(--color-gold)]"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-white/5 p-5 text-center">
        <p className="text-xs uppercase tracking-wider text-cream/50">Estimated monthly</p>
        <p className="mt-1 font-display text-3xl text-gradient-gold">
          ${Math.round(emi).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default function PropertyDetails() {
  const { slug } = useParams();
  const property = getPropertyBySlug(slug);
  const [active, setActive] = useState(0);
  const [fav, setFav] = useState(false);

  if (!property) {
    return (
      <div className="grid min-h-[70vh] place-items-center bg-cream px-5 pt-24 text-center">
        <div>
          <h1 className="font-display text-3xl text-navy">Property not found</h1>
          <p className="mt-3 text-navy/60">
            The listing you're looking for may have been sold or removed.
          </p>
          <Button to="/properties" className="mt-6">
            Back to Properties
          </Button>
        </div>
      </div>
    );
  }

  const agent = getAgentById(property.agentId);
  const related = getRelatedProperties(property, 3);
  const images = property.images;

  const facts = [
    { icon: Bed, label: "Bedrooms", value: property.beds || "—" },
    { icon: Bath, label: "Bathrooms", value: property.baths },
    { icon: Maximize, label: "Area", value: `${property.area.toLocaleString()} ft²` },
    { icon: Building2, label: "Type", value: property.type },
    { icon: Calendar, label: "Built", value: property.yearBuilt },
    { icon: Car, label: "Parking", value: property.parking },
  ];

  return (
    <>
      <PageHeader
        title={property.title}
        breadcrumb={[
          { label: "Properties", to: "/properties" },
          { label: property.title },
        ]}
      />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Gallery */}
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <motion.div
              variants={fadeUp()}
              initial="hidden"
              animate="show"
              className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[480px]"
            >
              <img
                src={images[active]}
                alt={property.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />

              <button
                onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy transition hover:bg-gold"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy transition hover:bg-gold"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="flex items-center gap-2 rounded-full bg-navy/85 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:bg-gold hover:text-navy">
                  <Play size={14} /> Virtual Tour
                </button>
                <button className="flex items-center gap-2 rounded-full bg-navy/85 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:bg-gold hover:text-navy">
                  360° View
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 lg:grid-cols-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative h-24 overflow-hidden rounded-xl transition lg:h-[112px] ${
                    active === i ? "ring-2 ring-gold" : "ring-1 ring-navy/10 hover:ring-gold/50"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Main grid */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr_1fr]">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    {property.status}
                  </span>
                  <h2 className="mt-3 font-display text-3xl text-navy">{property.title}</h2>
                  <p className="mt-2 flex items-center gap-1.5 text-navy/60">
                    <MapPin size={16} className="text-gold" />
                    {property.location}, {property.city}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl text-navy">
                    {formatFullPrice(property.price)}
                    {property.status === "For Rent" && (
                      <span className="text-base text-navy/50">/mo</span>
                    )}
                  </p>
                  <div className="mt-2 flex justify-end gap-2">
                    <button
                      onClick={() => setFav((v) => !v)}
                      className="grid h-9 w-9 place-items-center rounded-full border border-navy/15 text-navy transition hover:border-gold hover:text-gold"
                    >
                      <Heart size={16} className={fav ? "fill-gold text-gold" : ""} />
                    </button>
                    <button className="grid h-9 w-9 place-items-center rounded-full border border-navy/15 text-navy transition hover:border-gold hover:text-gold">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Facts */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] sm:grid-cols-3">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy/5 text-gold">
                      <f.icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-navy/45">{f.label}</p>
                      <p className="font-display text-lg text-navy">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-10">
                <h3 className="font-display text-2xl text-navy">Overview</h3>
                <div className="gold-rule mt-3 w-20" />
                <p className="mt-5 leading-relaxed text-navy/70">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mt-10">
                <h3 className="font-display text-2xl text-navy">Amenities</h3>
                <div className="gold-rule mt-3 w-20" />
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2.5 text-sm text-navy/70">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-success/10 text-success">
                        <Check size={13} />
                      </span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location placeholder map */}
              <div className="mt-10">
                <h3 className="font-display text-2xl text-navy">Location</h3>
                <div className="gold-rule mt-3 w-20" />
                <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-navy/10">
                  <iframe
                    title="Property location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=55.25%2C25.16%2C55.32%2C25.22&layer=mapnik"
                    className="h-72 w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Agent card */}
              {agent && (
                <div className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-4">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-gold/30"
                    />
                    <div>
                      <p className="font-display text-lg text-navy">{agent.name}</p>
                      <p className="text-sm text-gold">{agent.role}</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-2 text-sm text-navy/70 transition hover:text-gold"
                    >
                      <Phone size={15} className="text-gold" /> {agent.phone}
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-2 text-sm text-navy/70 transition hover:text-gold"
                    >
                      <Mail size={15} className="text-gold" /> {agent.email}
                    </a>
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <Button to="/contact" size="sm" className="w-full">
                      Request a Viewing
                    </Button>
                    <Button to="/contact" variant="outline" size="sm" className="w-full border-navy/20 text-navy hover:bg-navy hover:text-white hover:border-navy">
                      Enquire Now
                    </Button>
                  </div>
                </div>
              )}

              <MortgageWidget price={property.price} />
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading align="left" eyebrow="You May Also Like" title="Related Properties" />
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {related.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
