import { motion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}