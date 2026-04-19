import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiZap } from "react-icons/fi";
import TypingText from "./TypingText";
import Reveal from "./Reveal";

const racingStatus = [
  { label: "Problem Solving", value: "ON" },
  { label: "Coffee Level", value: "MAX" },
  { label: "Focus", value: "DEEP WORK" },
  { label: "Bugs", value: "ELIMINATED" },
];

export default function Hero({ data }) {
  return (
    <section id="home" className="section-wrap pt-16 md:pt-24">
      <Reveal>
        <div className="supercar-grid glass-panel relative overflow-hidden p-8 md:p-12">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/20 blur-3xl" />

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-300">
              Performance Portfolio 2026
            </p>
            <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
              {data.name}
            </h1>
            <p className="mt-3 text-lg text-red-200/90 md:text-2xl">
              {data.role}
            </p>
            <div className="mt-5">
              <TypingText />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href={data.cta.projects}
                className="rounded-full bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-red"
              >
                View Projects <FiArrowRight className="ml-2 inline" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href={data.cta.resume}
                download
                className="glass-btn rounded-full px-6 py-3 text-sm"
              >
                <FiDownload className="mr-2 inline" /> Download Resume
              </motion.a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {data.heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-red-300/30 bg-red-900/20 px-3 py-1 text-xs text-red-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="cyber-stage"
          >
            <div className="hud-head">
              <div>
                <p className="hud-label">Developer Mode</p>
                <p className="hud-value">Racing Status</p>
              </div>
              <FiZap className="text-red-300" />
            </div>

            <div className="hud-corners" aria-hidden="true">
              <span className="hud-corner hud-corner-tl" />
              <span className="hud-corner hud-corner-tr" />
              <span className="hud-corner hud-corner-bl" />
              <span className="hud-corner hud-corner-br" />
            </div>

            <div className="hud-speed-track" aria-hidden="true">
              <span className="hud-speed-glow" />
            </div>

            <div className="hud-meter" aria-hidden="true">
              <span className="hud-meter-fill" />
            </div>

            <div className="hud-tagline-wrap" aria-label="Racing tagline">
              <p className="hud-tagline">THE RACE IS ALWAYS ON</p>
              <p className="hud-tagline-sub">
                Build fast. Think deep. Ship clean.
              </p>
            </div>

            <div className="hud-status">
              {racingStatus.map((item) => (
                <div key={item.label} className="hud-status-item">
                  <span className="hud-status-label">{item.label}</span>
                  <span className="hud-status-value">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
