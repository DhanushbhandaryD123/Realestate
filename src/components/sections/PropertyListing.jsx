import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PropertyCard from "../ui/PropertyCard";
import { properties, propertyTypes, cities } from "../../data/properties";
import { staggerContainer } from "../../utils/motion";

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "area-desc", label: "Largest Area" },
];

const PER_PAGE = 6;

export default function PropertyListing({ purpose = "all", lockPurpose = false }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All Types");
  const [city, setCity] = useState("All Cities");
  const [beds, setBeds] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = properties.filter((p) =>
      purpose === "all" ? true : p.purpose === purpose
    );

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q)
      );
    }
    if (type !== "All Types") list = list.filter((p) => p.type === type);
    if (city !== "All Cities") list = list.filter((p) => p.city === city);
    if (beds > 0) list = list.filter((p) => p.beds >= beds);
    if (maxPrice > 0) list = list.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "area-desc":
        list = [...list].sort((a, b) => b.area - a.area);
        break;
      default:
        list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [purpose, query, type, city, beds, maxPrice, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const resetPageAnd = (fn) => (val) => {
    setPage(1);
    fn(val);
  };

  const clearAll = () => {
    setQuery("");
    setType("All Types");
    setCity("All Cities");
    setBeds(0);
    setMaxPrice(0);
    setSort("featured");
    setPage(1);
  };

  const selectClass =
    "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none";

  const FilterControls = (
    <>
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-navy/50">
          Property Type
        </label>
        <select value={type} onChange={(e) => resetPageAnd(setType)(e.target.value)} className={selectClass}>
          {propertyTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-navy/50">
          City
        </label>
        <select value={city} onChange={(e) => resetPageAnd(setCity)(e.target.value)} className={selectClass}>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-navy/50">
          Min Bedrooms
        </label>
        <select
          value={beds}
          onChange={(e) => resetPageAnd(setBeds)(Number(e.target.value))}
          className={selectClass}
        >
          <option value={0}>Any</option>
          {[1, 2, 3, 4, 5].map((b) => (
            <option key={b} value={b}>
              {b}+
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-navy/50">
          Max Price
        </label>
        <select
          value={maxPrice}
          onChange={(e) => resetPageAnd(setMaxPrice)(Number(e.target.value))}
          className={selectClass}
        >
          <option value={0}>No max</option>
          <option value={1000000}>$1M</option>
          <option value={2000000}>$2M</option>
          <option value={5000000}>$5M</option>
          <option value={10000000}>$10M</option>
        </select>
      </div>
    </>
  );

  return (
    <section className="bg-cream py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        {/* Search + sort bar */}
        <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-[var(--shadow-card)] ring-1 ring-navy/5 lg:flex-row lg:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-navy/10 px-4 py-3 focus-within:border-gold">
            <Search size={18} className="text-gold" />
            <input
              value={query}
              onChange={(e) => resetPageAnd(setQuery)(e.target.value)}
              placeholder="Search by name, location or city..."
              className="w-full bg-transparent text-sm text-navy placeholder:text-navy/40 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="flex items-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-navy-light lg:hidden"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Desktop filters */}
        <div className="mt-4 hidden grid-cols-4 gap-4 lg:grid">{FilterControls}</div>

        {/* Mobile filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 grid gap-4 overflow-hidden sm:grid-cols-2 lg:hidden"
            >
              {FilterControls}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results header */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-navy/60">
            <span className="font-semibold text-navy">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "property" : "properties"} found
          </p>
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 text-sm text-navy/60 transition hover:text-gold"
          >
            <X size={14} /> Clear filters
          </button>
        </div>

        {/* Grid */}
        {pageItems.length > 0 ? (
          <motion.div
            key={current + sort + type + city + beds + maxPrice + query}
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
            className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3"
          >
            {pageItems.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </motion.div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-navy/15 bg-white py-20 text-center">
            <p className="font-display text-2xl text-navy">No properties match your filters</p>
            <p className="mt-2 text-sm text-navy/55">Try widening your search or clearing filters.</p>
            <button
              onClick={clearAll}
              className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition hover:bg-gold-soft"
            >
              Reset search
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy transition enabled:hover:border-gold enabled:hover:text-gold disabled:opacity-40"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-10 w-10 rounded-full text-sm font-medium transition ${
                  current === i + 1
                    ? "bg-gold text-navy"
                    : "border border-navy/15 text-navy hover:border-gold hover:text-gold"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={current === totalPages}
              className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy transition enabled:hover:border-gold enabled:hover:text-gold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
