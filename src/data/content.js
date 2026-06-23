import {
  Home,
  Building2,
  Store,
  Trees,
  Warehouse,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  Scale,
  LineChart,
  Landmark,
  KeyRound,
  Paintbrush,
  Handshake,
} from "lucide-react";

const cover = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories = [
  { name: "Luxury Villas", icon: Home, count: 128, slug: "villa" },
  { name: "Apartments", icon: Building2, count: 342, slug: "apartment" },
  { name: "Commercial Spaces", icon: Store, count: 87, slug: "office" },
  { name: "Land Plots", icon: Trees, count: 54, slug: "land" },
  { name: "Farm Houses", icon: Warehouse, count: 31, slug: "farmhouse" },
  { name: "Investment", icon: TrendingUp, count: 96, slug: "investment" },
];

export const whyChooseUs = [
  {
    title: "Trusted Agents",
    desc: "A hand-picked team with deep local knowledge and a discreet, client-first approach.",
    icon: ShieldCheck,
  },
  {
    title: "Verified Properties",
    desc: "Every listing is inspected and documented before it reaches you.",
    icon: BadgeCheck,
  },
  {
    title: "Legal Assistance",
    desc: "In-house counsel guides contracts, due diligence and transfers end to end.",
    icon: Scale,
  },
  {
    title: "Investment Guidance",
    desc: "Data-led advice on yield, capital growth and portfolio strategy.",
    icon: LineChart,
  },
  {
    title: "Loan Support",
    desc: "Preferred mortgage partners and fast-tracked pre-approvals.",
    icon: Landmark,
  },
  {
    title: "Property Management",
    desc: "Full-service letting, maintenance and tenant care after you buy.",
    icon: KeyRound,
  },
];

export const services = [
  {
    title: "Buying",
    desc: "Source, negotiate and secure the right property with expert representation.",
    icon: KeyRound,
  },
  {
    title: "Selling",
    desc: "Position and market your home to the right buyers for the best price.",
    icon: Handshake,
  },
  {
    title: "Renting",
    desc: "Curated rentals and tenancy management for landlords and tenants.",
    icon: Home,
  },
  {
    title: "Property Management",
    desc: "Hands-off ownership with maintenance, letting and reporting handled.",
    icon: Building2,
  },
  {
    title: "Legal Services",
    desc: "Contracts, due diligence and conveyancing handled by in-house counsel.",
    icon: Scale,
  },
  {
    title: "Home Loans",
    desc: "Mortgage structuring and pre-approval through preferred lenders.",
    icon: Landmark,
  },
  {
    title: "Interior Design",
    desc: "Turnkey styling and fit-out from our design studio partners.",
    icon: Paintbrush,
  },
  {
    title: "Investment Consulting",
    desc: "Portfolio strategy, yield analysis and off-market opportunities.",
    icon: TrendingUp,
  },
];

export const stats = [
  { label: "Properties Sold", value: 2480, suffix: "+" },
  { label: "Happy Clients", value: 1960, suffix: "+" },
  { label: "Cities Covered", value: 38, suffix: "" },
  { label: "Expert Agents", value: 64, suffix: "" },
];

export const testimonials = [
  {
    name: "Eleanor Whitfield",
    role: "Bought a villa in Dubai",
    rating: 5,
    quote:
      "From the first viewing to the keys in my hand, the process felt effortless and genuinely personal. They understood exactly what I was looking for.",
    image: cover("1494790108377-be9c29b29330", 200),
  },
  {
    name: "Marcus Bennett",
    role: "Sold a penthouse in Manhattan",
    rating: 5,
    quote:
      "They achieved a price I didn't think was possible, and the marketing was simply on another level. A truly premium service.",
    image: cover("1500648767791-00dcc994a43e", 200),
  },
  {
    name: "Priya Nair",
    role: "Investment client",
    rating: 5,
    quote:
      "The investment guidance was sharp and data-backed. My portfolio has outperformed every projection they set.",
    image: cover("1438761681033-6461ffad8d80", 200),
  },
  {
    name: "Thomas Vogel",
    role: "Rented an apartment in Lisbon",
    rating: 5,
    quote:
      "Responsive, transparent and a pleasure to deal with. The whole tenancy was handled with real care.",
    image: cover("1507003211169-0a1dd7228f2d", 200),
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "2026-luxury-market-outlook",
    title: "The 2026 Luxury Market Outlook",
    category: "Market Trends",
    date: "June 12, 2026",
    readTime: "6 min read",
    excerpt:
      "Where prime values are heading this year, and the cities quietly outperforming the headlines.",
    image: cover("1486406146926-c627a92ad1ab"),
    author: "David Aaronson",
    content:
      "Prime residential markets are entering a more selective phase. Buyers are rewarding quality, provenance and energy efficiency, while generic stock lingers. In this piece we map the districts showing the strongest momentum and explain why scarcity — not sentiment — is driving the best returns.",
  },
  {
    id: 2,
    slug: "first-time-luxury-buyer-guide",
    title: "A First-Time Buyer's Guide to Prime Property",
    category: "Property Guides",
    date: "June 4, 2026",
    readTime: "8 min read",
    excerpt:
      "Everything to know before your first high-value purchase, from due diligence to negotiation.",
    image: cover("1560518883-ce09059eeffa"),
    author: "Isabella Moreau",
    content:
      "Buying at the top end of the market rewards preparation. From assembling the right advisory team to understanding service charges, snagging and transfer costs, this guide walks you through each stage so nothing surprises you at completion.",
  },
  {
    id: 3,
    slug: "designing-for-resale-value",
    title: "Designing Interiors That Hold Their Value",
    category: "Investment Tips",
    date: "May 22, 2026",
    readTime: "5 min read",
    excerpt:
      "The design choices that quietly protect — and grow — what your home is worth.",
    image: cover("1618221195710-dd6b41faaea6"),
    author: "Amara Okafor",
    content:
      "Trends date quickly; materials don't. We look at the finishes, layouts and light strategies that consistently appeal to future buyers, and the costly renovations that rarely pay you back.",
  },
  {
    id: 4,
    slug: "commercial-real-estate-signals",
    title: "Reading the Signals in Commercial Real Estate",
    category: "Real Estate News",
    date: "May 9, 2026",
    readTime: "7 min read",
    excerpt:
      "How occupiers and investors are repositioning around flexibility and prime location.",
    image: cover("1497366811353-6870744d04b2"),
    author: "Sophia Lindqvist",
    content:
      "The flight to quality is reshaping commercial demand. Grade-A, well-located and amenity-rich space is commanding a clear premium, while secondary stock is being repriced. Here's what that means for both occupiers and investors in 2026.",
  },
  {
    id: 5,
    slug: "mortgage-strategy-2026",
    title: "Smart Mortgage Strategy for High-Value Homes",
    category: "Investment Tips",
    date: "April 28, 2026",
    readTime: "6 min read",
    excerpt:
      "Structuring finance intelligently when the numbers get large.",
    image: cover("1554224155-6726b3ff858f"),
    author: "Julian Hayes",
    content:
      "Financing a prime purchase is rarely about the headline rate alone. We break down loan-to-value strategy, offset structures and the timing decisions that can save serious money over the life of a mortgage.",
  },
  {
    id: 6,
    slug: "waterfront-living-premium",
    title: "Why Waterfront Living Commands a Premium",
    category: "Property Guides",
    date: "April 15, 2026",
    readTime: "4 min read",
    excerpt:
      "The enduring appeal — and economics — of a home by the water.",
    image: cover("1600210492493-0946911123ea"),
    author: "Mateo Ribeiro",
    content:
      "Waterfront homes have outperformed wider markets for decades. We examine the supply constraints, lifestyle pull and rental resilience that keep these residences in a category of their own.",
  },
];

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);

export const blogCategories = [
  "All",
  "Market Trends",
  "Property Guides",
  "Investment Tips",
  "Real Estate News",
];

export const faqs = [
  {
    q: "How do you verify the properties you list?",
    a: "Every property is physically inspected by our team and its documentation is checked by in-house counsel before it goes live. You only ever see listings we'd be comfortable buying ourselves.",
  },
  {
    q: "Can you help international buyers?",
    a: "Yes. A large share of our clients buy across borders. We coordinate viewings, legal due diligence, currency and financing so the distance never becomes a barrier.",
  },
  {
    q: "Do you assist with mortgages and financing?",
    a: "We work with a panel of preferred lenders and can fast-track pre-approvals, structure loan-to-value and compare offers so you secure the right terms.",
  },
  {
    q: "What are your fees?",
    a: "Fees vary by service and are always agreed transparently up front. There are no hidden charges — you'll have a clear written breakdown before committing.",
  },
  {
    q: "Do you manage properties after purchase?",
    a: "Our property management team handles letting, maintenance, tenant care and reporting, so ownership stays completely hands-off if you'd like it to be.",
  },
  {
    q: "How quickly can I schedule a viewing?",
    a: "Most viewings are arranged within 24–48 hours. Use the Schedule Visit button on any property and an advisor will confirm a time that suits you.",
  },
];

export const projects = [
  {
    id: 1,
    name: "The Solenne Collection",
    location: "Palm Jumeirah, Dubai",
    status: "Now Selling",
    completion: "Q4 2026",
    progress: 78,
    image: cover("1545324418-cc1a3fa10c00"),
  },
  {
    id: 2,
    name: "Aurelia Towers",
    location: "Business Bay, Dubai",
    status: "Under Construction",
    completion: "Q2 2027",
    progress: 46,
    image: cover("1496564203457-11bb12075d90"),
  },
  {
    id: 3,
    name: "Park Lane Residences",
    location: "Central Park West, Lisbon",
    status: "Final Phase",
    completion: "Q1 2026",
    progress: 92,
    image: cover("1487958449943-2429e8be8625"),
  },
];
