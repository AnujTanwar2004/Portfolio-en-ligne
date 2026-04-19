import { motion } from "framer-motion";

const dots = Array.from({ length: 24 }, (_, i) => i);
const speedLines = Array.from({ length: 14 }, (_, i) => i);

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,51,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(255,56,56,0.12),transparent_34%),linear-gradient(180deg,#09090b_0%,#0a0a0f_45%,#070709_100%)]" />
      <div className="road-perspective" />

      {speedLines.map((line) => (
        <motion.span
          key={`speed-${line}`}
          className="speed-line"
          style={{
            top: `${10 + line * 6}%`,
            opacity: 0.22 + (line % 5) * 0.1,
          }}
          animate={{ x: ["-10%", "110%"] }}
          transition={{
            duration: 1.2 + (line % 4) * 0.45,
            ease: "linear",
            repeat: Infinity,
            delay: line * 0.18,
          }}
        />
      ))}

      <motion.div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-red-600/20 blur-[90px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-red-400/10 blur-[100px]"
        animate={{ x: [0, -60, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      {dots.map((dot) => (
        <motion.span
          key={dot}
          className="absolute h-1.5 w-1.5 rounded-full bg-red-300/30"
          style={{
            left: `${(dot * 13) % 100}%`,
            top: `${(dot * 17) % 100}%`,
          }}
          animate={{ y: [0, -16, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 3 + (dot % 5),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
