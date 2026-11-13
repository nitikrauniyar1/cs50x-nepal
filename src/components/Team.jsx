import Reveal from "./Reveal";
import { instructors } from "@/data/instructors";
import { mentors, guestSpeakers } from "@/data/mentors";

const initials = (name) =>
  name
    .replace(/^(Er\.|Mr\.|Ms\.)\s*/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

export default function Team({ page = false }) {
  const MainHeading = page ? "h1" : "h2";
  const SubHeading = page ? "h2" : "h3";
  const MentorHeading = page ? "h3" : "h4";
  const ItemHeading = page ? "h3" : "h4";

  return (
    <section id="team" className="bg-gold-pale py-16 sm:py-20">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-crimson">Instructors</p>
            <MainHeading className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Meet the people behind the duck.</MainHeading>
            <p className="mt-5 text-ink-mute">
              Learn with experienced educators and technology professionals bringing practical insight from across the field.
            </p>
          </div>
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {instructors.map((p) => (
              <li key={p.name}>
                <Reveal className="group interactive-card glass-surface flex gap-5 rounded-2xl p-4">
                  <span aria-hidden="true" className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-crimson/10 font-display text-2xl font-bold tracking-wide text-crimson ring-1 ring-inset ring-crimson/15 sm:h-24 sm:w-24">
                    {initials(p.name)}
                  </span>
                  <div className="min-w-0">
                    <SubHeading className="font-display text-2xl font-bold">{p.name}</SubHeading>
                    <p className="mt-0.5 text-sm font-semibold text-gold-deep">
                      {p.role}
                      {p.org ? ` · ${p.org}` : ""}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{p.bio}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <p className="eyebrow text-crimson">Mentors</p>
          <SubHeading className="mt-3 font-display text-3xl font-bold sm:text-4xl">Guiding learners week to week.</SubHeading>
          <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((m) => (
              <li key={m.name} className="interactive-row flex gap-4 rounded-xl p-2">
                <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson-fill font-mono text-sm font-bold text-white">
                  {initials(m.name)}
                </span>
                <div>
                  <MentorHeading className="font-bold">{m.name}</MentorHeading>
                  <p className="text-xs font-semibold text-gold-deep">{m.role}</p>
                  <p className="mt-1 text-sm text-ink-mute">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="interactive-card glass-surface mt-12 rounded-3xl p-6 sm:p-8">
          <SubHeading className="eyebrow">Guest speakers</SubHeading>
          <ul className="mt-5 grid gap-6 md:grid-cols-3">
            {guestSpeakers.map((g) => (
              <li key={g.name}>
                <ItemHeading className="font-display text-2xl font-bold">{g.name}</ItemHeading>
                <p className="mt-1 text-sm font-semibold">{g.role}</p>
                <p className="mt-2 text-sm text-ink/75">{g.topic}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
