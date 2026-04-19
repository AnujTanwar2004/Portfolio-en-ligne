import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";

export default function Contact({ socials }) {
  const [status, setStatus] = useState("");

  function openMailClient(payload) {
    const recipient = (socials.email || "").replace("mailto:", "");
    const subject = encodeURIComponent(
      `Portfolio Contact from ${payload.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("Message sent to Anuj successfully.");
      event.currentTarget.reset();
    } catch {
      openMailClient(payload);
      setStatus("Opening your email app to send this message to Anuj.");
    }
  }

  return (
    <section id="contact" className="section-wrap">
      <Reveal>
        <h2 className="section-title">Contact</h2>
      </Reveal>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <Reveal>
          <form onSubmit={handleSubmit} className="glass-panel space-y-4 p-6">
            <input
              name="name"
              required
              placeholder="Your name"
              className="field"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="field"
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your message"
              className="field resize-none"
            />
            <button className="rounded-full bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-red transition hover:brightness-110">
              Send Message
            </button>
            {status && <p className="text-sm text-red-200">{status}</p>}
          </form>
        </Reveal>

        <Reveal>
          <div className="glass-panel p-6">
            <p className="text-zinc-300">
              Let us build something meaningful and performant together.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-200">
              <a className="contact-link" href={socials.email}>
                <FiMail /> Email
              </a>
              <a
                className="contact-link"
                href={socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GitHub
              </a>
              <a
                className="contact-link"
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
