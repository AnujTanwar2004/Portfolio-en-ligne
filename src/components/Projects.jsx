import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-wrap">
      <Reveal>
        <h2 className="section-title">Garage Projects</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -10, rotateX: 4 }}
              className="project-card glass-panel group h-full p-6 transition"
            >
              <div className="project-strip" />
              <p className="text-xs uppercase tracking-[0.2em] text-red-300">
                {project.period}
              </p>
              <h3 className="mt-2 text-xl text-zinc-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-btn rounded-full px-4 py-2"
                >
                  <FiGithub className="mr-2 inline" /> GitHub
                </a>
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-btn rounded-full px-4 py-2"
                  >
                    <FiExternalLink className="mr-2 inline" /> Demo
                  </a>
                )}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
