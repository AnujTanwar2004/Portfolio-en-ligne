import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-40 h-36 w-36 rounded-full bg-red-500/10 blur-2xl"
      animate={{ x: pos.x - 72, y: pos.y - 72 }}
      transition={{ type: "spring", damping: 26, stiffness: 180, mass: 0.4 }}
    />
  );
}
