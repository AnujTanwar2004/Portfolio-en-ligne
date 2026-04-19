import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-night"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="relative">
        <motion.div
          className="h-24 w-24 rounded-full border-2 border-red-500/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.3, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-t-red-400 border-r-red-700 border-b-transparent border-l-transparent"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 0.95, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
