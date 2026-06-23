import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-navy"
      style={{ pointerEvents: "none" }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-display text-4xl tracking-wide text-white">
            LUXE
          </span>
          <span className="ml-1 font-display text-4xl text-gradient-gold">
            Estate
          </span>
        </motion.div>
        <div className="h-px w-44 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
