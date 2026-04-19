import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section-wrap">
      <Reveal>
        <h2 className="section-title">Performance Stack</h2>
      </Reveal>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="skill-card glass-panel p-5"
            >
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-zinc-100">{skill.name}</span>
                <span className="font-semibold text-red-300">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-zinc-800/80">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-red-500 via-red-400 to-red-700"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-zinc-400">
                Engine Efficiency Index
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
