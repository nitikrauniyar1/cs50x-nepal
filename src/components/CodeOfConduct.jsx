const principles = [
  {
    title: "Treat people with respect",
    body: "Use welcoming language, listen to different perspectives, and give feedback about ideas rather than attacking people.",
  },
  {
    title: "Make room for everyone to learn",
    body: "Be patient with questions and mistakes. Share knowledge generously and help keep discussions accessible to learners with different levels of experience.",
  },
  {
    title: "Keep the community safe",
    body: "Harassment, discrimination, intimidation, personal attacks, and unwanted contact are not acceptable in course spaces or events.",
  },
  {
    title: "Act responsibly",
    body: "Respect others’ privacy and work, follow course and event guidelines, and raise concerns with the organizing team as soon as possible.",
  },
];

export default function CodeOfConduct() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x max-w-4xl">
        <header className="mb-10">
          <p className="eyebrow text-crimson">Community</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">Code of conduct</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-mute">
            CS50x Nepal is a learning community. Everyone taking part in classes, discussions, and events is expected to help make it respectful, welcoming, and safe.
          </p>
        </header>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {principles.map((principle, index) => (
            <article key={principle.title} className="interactive-card glass-surface mb-3 grid gap-2 rounded-2xl px-5 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
              <span className="font-mono text-sm text-gold-deep">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-xl font-bold">{principle.title}</h2>
                <p className="mt-2 leading-relaxed text-ink-mute">{principle.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-ink-mute">
          If something makes you feel unsafe or unwelcome, contact a course organizer or instructor so the team can review it.
        </p>
      </div>
    </section>
  );
}
