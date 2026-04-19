import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import AnimatedBackground from "./components/AnimatedBackground";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-zinc-100">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <AnimatedBackground />
      <CursorGlow />

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Timeline timeline={portfolioData.timeline} />
        <Contact socials={portfolioData.socials} />
        <Footer />
      </motion.main>
    </div>
  );
}

export default App;
