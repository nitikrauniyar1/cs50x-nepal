import { syllabus } from "@/data/courses";

export default function FullSyllabus() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <header className="mb-10 max-w-3xl">
          <p className="eyebrow text-crimson">Full syllabus</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">Five weeks, from foundations to applied AI.</h1>
          <p className="mt-4 leading-relaxed text-ink-mute">Explore the topics and practical sessions planned for CS50 AI with Python.</p>
        </header>
        <div className="space-y-6">
          {syllabus.map((week) => (
            <article key={week.week} className="interactive-card glass-surface rounded-3xl p-6 sm:p-8">
              <p className="eyebrow text-crimson">Week {week.week}</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{week.title}</h2>
              <p className="mt-2 max-w-3xl text-ink-mute">{week.summary}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {week.days.map((day, index) => (
                  <section key={day.title} className="min-w-0 border-t-2 border-gold pt-4">
                    <p className="font-mono text-xs text-ink-mute">DAY {index + 1}</p>
                    <h3 className="mt-1 break-words font-display text-xl font-bold">{day.title}</h3>
                    {day.topics.length > 0 && (
                      <ul className="mt-3 space-y-2 text-sm text-ink-mute">
                        {day.topics.map((topic) => (
                          <li key={topic} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
