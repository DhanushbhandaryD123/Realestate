import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Agents", to: "/agents" },
      { label: "Careers", to: "/contact" },
      { label: "Testimonials", to: "/about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Buy", to: "/buy" },
      { label: "Rent", to: "/rent" },
      { label: "Commercial", to: "/commercial" },
      { label: "All Services", to: "/services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Properties", to: "/properties" },
      { label: "Blog", to: "/blog" },
      { label: "FAQ", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy text-cream/70">
      <div className="gold-rule" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.4fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-baseline gap-1">
              <span className="font-display text-2xl text-white">LUXE</span>
              <span className="font-display text-2xl text-gradient-gold">Estate</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A boutique advisory for buyers, sellers and investors who expect more
              from prime real estate.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-cream/70 transition hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-base text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-base text-white">Newsletter</h4>
            <p className="mt-5 text-sm">
              Off-market listings and market intelligence, monthly.
            </p>
            <div className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5 focus-within:border-gold">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-cream/40 focus:outline-none"
              />
              <button
                aria-label="Subscribe"
                className="grid w-12 place-items-center bg-gold text-navy transition hover:bg-gold-soft"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                One Prime Avenue, Downtown, Dubai
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold" /> +971 4 555 0100
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-gold" /> hello@luxeestate.com
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.25%2C25.16%2C55.32%2C25.22&layer=mapnik"
            className="h-56 w-full grayscale"
            loading="lazy"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/50 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} LUXE Estate. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
