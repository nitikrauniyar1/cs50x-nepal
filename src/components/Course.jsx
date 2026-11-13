import Reveal from "./Reveal";
import { outcomes } from "@/data/courses";

export default function Course({ page = false }) {
  const MainHeading = page ? "h1" : "h2";
  const ItemHeading = page ? "h2" : "h3";

  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-crimson">What you will learn</p>
          <MainHeading className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Practical skills and theory in AI, machine learning and data science.
          </MainHeading>
        </Reveal>
        <ol className="mt-10 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <li key={outcome.title} className="interactive-row border-b border-ink/15 py-6 pr-6 sm:[&:nth-child(2n)]:pl-6 lg:[&:nth-child(2n)]:pl-0 lg:[&:not(:nth-child(3n+1))]:pl-6">
              <Reveal delay={(index % 3) * 0.06}>
                <span className="font-mono text-sm text-gold-deep">{String(index + 1).padStart(2, "0")}</span>
                <ItemHeading className="mt-2 font-display text-2xl font-bold">{outcome.title}</ItemHeading>
                <p className="mt-2 text-ink-mute">{outcome.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
