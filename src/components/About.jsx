import Reveal from "./Reveal";

export default function About({ data }) {
  return (
    <section id="about" className="section-wrap">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-[220px,1fr] md:items-center">
          <img
            src="/profile.png"
            alt="Anuj Tanwar profile"
            className="mx-auto h-52 w-52 rounded-3xl border border-red-400/30 object-cover shadow-red"
          />
          <div className="glass-panel p-8">
            <h2 className="section-title">About Me</h2>
            <p className="mt-3 leading-relaxed text-zinc-300">{data.about}</p>
            <div className="mt-6 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
              <p>
                <span className="text-red-300">Location:</span> {data.location}
              </p>
              <p>
                <span className="text-red-300">Email:</span> {data.email}
              </p>
              <p>
                <span className="text-red-300">Focus:</span> Full Stack + UI
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
