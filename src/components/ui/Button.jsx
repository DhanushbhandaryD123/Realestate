import { Link } from "react-router-dom";
import { cn } from "../../utils/format";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants = {
  gold: "bg-gold text-navy hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(212,175,55,0.7)]",
  navy: "bg-navy text-white hover:bg-navy-light hover:-translate-y-0.5",
  outline:
    "border border-gold/60 text-gold hover:bg-gold hover:text-navy hover:-translate-y-0.5",
  ghost:
    "border border-white/25 text-white hover:bg-white/10 hover:-translate-y-0.5",
};

export default function Button({
  children,
  variant = "gold",
  size = "md",
  to,
  href,
  className,
  ...props
}) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
