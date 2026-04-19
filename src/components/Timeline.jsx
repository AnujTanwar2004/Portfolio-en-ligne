import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Timeline({ timeline }) {
  return (
    <section id="timeline" className="section-wrap">
      <Reveal>
        <h2 className="section-title">Experience & Timeline</h2>
      </Reveal>
      <div className="relative mt-8 space-y-8 border-l border-red-500/30 pl-6 md:pl-8">
        {timeline.map((item, index) => (
          <Reveal key={`${item.title}-${index}`} delay={index * 0.08}>
            <motion.div
              whileHover={{ x: 6 }}
              className="relative glass-panel p-5"
            >
              <span className="absolute -left-[2.05rem] top-7 h-3.5 w-3.5 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(239,68,68,0.15)] md:-left-10" />
              <p className="text-xs uppercase tracking-[0.2em] text-red-300">
                {item.date}
              </p>
              <h3 className="mt-1 text-lg text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.subtitle}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
