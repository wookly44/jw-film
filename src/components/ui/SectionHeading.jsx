import { motion } from "framer-motion";

export default function SectionHeading({
  children,
  dark = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <h2
        className={`text-2xl font-bold sm:text-3xl ${dark ? "text-white" : "text-black"}`}
      >
        {children}
      </h2>
      <div
        className={`mt-4 mb-6 h-px w-full ${dark ? "bg-white/30" : "bg-black/15"}`}
      />
    </motion.div>
  );
}
