import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, LogIn, CalendarCheck } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Buy", to: "/buy" },
  { label: "Rent", to: "/rent" },
  { label: "Commercial", to: "/commercial" },
  { label: "Agents", to: "/agents" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-display text-2xl tracking-wide text-white">LUXE</span>
          <span className="font-display text-2xl text-gradient-gold">Estate</span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-gold" : "text-cream/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/properties"
            aria-label="Search properties"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream/80 transition hover:border-gold hover:text-gold"
          >
            <Search size={18} />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-1.5 text-sm font-medium text-cream/80 transition hover:text-white"
          >
            <LogIn size={16} /> Login
          </Link>
          <Button to="/contact" size="sm">
            <CalendarCheck size={16} /> Schedule Visit
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white xl:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy/70 backdrop-blur-sm xl:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-navy p-6 xl:hidden"
            >
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-baseline gap-1">
                  <span className="font-display text-xl text-white">LUXE</span>
                  <span className="font-display text-xl text-gradient-gold">Estate</span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 text-base font-medium transition ${
                          isActive
                            ? "bg-white/5 text-gold"
                            : "text-cream/80 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button to="/contact" variant="ghost" size="sm">
                  <LogIn size={16} /> Login
                </Button>
                <Button to="/contact" size="sm">
                  <CalendarCheck size={16} /> Schedule Visit
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
