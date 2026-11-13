import Img from "./Img";
import { supporters } from "@/data/supporters";

function Mark({ s }) {
  return s.logo ? (
    <Img src={s.logo} alt={s.name} width={160} height={48} className="h-10 w-auto transition-transform duration-200 hover:scale-105" />
  ) : (
    <span className="inline-block whitespace-nowrap font-display text-2xl font-bold transition-transform duration-200 hover:scale-105">{s.name}</span>
  );
}

export default function Partners() {
  return (
    <section aria-labelledby="partners-title" className="overflow-hidden border-y border-ink/10 bg-paper py-12">
      <h2 id="partners-title" className="container-x eyebrow mb-6 text-ink-mute">Made possible by</h2>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={copy === 1 ? "true" : undefined}>
            {supporters.map((s) => (
              <li key={`${copy}-${s.name}`}>
                <Mark s={s} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
