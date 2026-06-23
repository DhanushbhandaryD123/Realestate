// Formatting helpers shared across the app.

export const formatPrice = (value) => {
  if (value >= 10000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value.toLocaleString()}`;
};

export const formatFullPrice = (value) => `$${value.toLocaleString()}`;

export const cn = (...classes) => classes.filter(Boolean).join(" ");
