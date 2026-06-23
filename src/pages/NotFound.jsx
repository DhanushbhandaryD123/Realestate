import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import Button from "../components/ui/Button";
import { fadeUp, staggerContainer } from "../utils/motion";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-5">
      <img
        src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="relative text-center"
      >
        <motion.p
          variants={fadeUp()}
          className="font-display text-[7rem] font-bold leading-none text-gradient-gold sm:text-[10rem]"
        >
          404
        </motion.p>
        <motion.h1
          variants={fadeUp()}
          className="mt-2 font-display text-3xl text-white sm:text-4xl"
        >
          This page has moved on
        </motion.h1>
        <motion.p
          variants={fadeUp()}
          className="mx-auto mt-4 max-w-md text-cream/70"
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          relocated. Let&rsquo;s get you back to something beautiful.
        </motion.p>
        <motion.div
          variants={fadeUp()}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <Button to="/" size="lg">
            <Home size={18} /> Back Home
          </Button>
          <Button to="/properties" variant="ghost" size="lg">
            <Search size={18} /> Browse Properties
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
