import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import { fadeUp, slideRight, slideLeft, viewport, staggerContainer } from "../utils/motion";

const offices = [
  {
    city: "New York",
    address: "Park Avenue Tower, Midtown, NY 10022",
    phone: "+1 (212) 555-0142",
  },
  {
    city: "Dubai",
    address: "Marina Gate, Dubai Marina, UAE",
    phone: "+971 4 555 0117",
  },
  {
    city: "London",
    address: "Mayfair House, Mount Street, W1K",
    phone: "+44 20 7555 0190",
  },
];

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-gold";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="Tell us what you're looking for and an advisor will be in touch within 24 hours."
        breadcrumb={[{ label: "Contact" }]}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          {/* Form */}
          <motion.div
            variants={slideRight()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm lg:p-10"
          >
            <h2 className="font-display text-2xl text-navy lg:text-3xl">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-navy/60">
              Fields marked with an asterisk (*) are required.
            </p>

            <div className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/80">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/80">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/80">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+1 (000) 000-0000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="I'd like to buy a villa"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy/80">
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us a little about what you're looking for..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_14px_30px_-12px_rgba(212,175,55,0.7)]"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-success"
                >
                  <CheckCircle2 size={15} /> Thanks — we&rsquo;ll be in touch
                  shortly.
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={slideLeft()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-6"
          >
            <div className="rounded-3xl bg-navy p-8">
              <h3 className="font-display text-xl text-white">
                Contact details
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-cream/80">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-gold" />
                  +1 (212) 555-0142
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-gold" />
                  hello@luxeestate.com
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-gold" />
                  Park Avenue Tower, Midtown, New York
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 text-gold" />
                  Mon–Sat, 9:00 AM – 7:00 PM
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-navy/10">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.74%2C-73.96%2C40.77&layer=mapnik"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Offices */}
        <div className="mx-auto mt-16 max-w-7xl px-5 lg:px-8">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-6 md:grid-cols-3"
          >
            {offices.map((o) => (
              <motion.div
                key={o.city}
                variants={fadeUp()}
                className="rounded-2xl border border-navy/10 bg-white p-7 shadow-sm"
              >
                <h4 className="font-display text-xl text-navy">{o.city}</h4>
                <p className="mt-3 flex items-start gap-2 text-sm text-navy/65">
                  <MapPin size={16} className="mt-0.5 text-gold" /> {o.address}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-navy/65">
                  <Phone size={16} className="text-gold" /> {o.phone}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
