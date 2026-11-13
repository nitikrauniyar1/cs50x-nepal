import { ArrowDown, ArrowUpRight } from "lucide-react";
import Img from "./Img";
import ExtLink from "./ExtLink";
import Reveal from "./Reveal";
import { images } from "@/config/images";
import { links, site } from "@/data/links";
import { syllabus } from "@/data/courses";
import { instructors } from "@/data/instructors";
import { mentors, guestSpeakers } from "@/data/mentors";

const team = instructors.length + mentors.length + guestSpeakers.length;

export default function Hero() {
  const stats = [
    { value: String(syllabus.length), label: "weeks, from Python to a team project" },
    { value: String(team), label: "instructors, mentors and guest speakers" },
    { value: "IOE", label: "Purwanchal Campus" },
  ];
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="container-x grid items-center gap-8 pb-12 sm:gap-10 lg:grid-cols-2 lg:gap-8 lg:pb-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full bg-gold/25 px-3 py-1.5 text-ink">
              <span className="h-2 w-2 rounded-full bg-crimson" aria-hidden="true" />
              {site.course}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight text-crimson sm:text-7xl lg:text-[4rem]">
              The golden duck
              <br />
              has <span className="relative whitespace-nowrap"><span className="relative z-10">returned.</span><span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-gold sm:h-4" aria-hidden="true" /></span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-mute">
              Dive into the fundamentals of artificial intelligence through the renowned CS50 curriculum, now adapted for
              students in Nepal and guided by instructors from Purwanchal Campus.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <ExtLink href={links.enroll} className="btn-gold">
                Get started <ArrowUpRight size={16} aria-hidden="true" />
              </ExtLink>
              <ExtLink href={links.syllabus} className="btn-ghost">
                See the syllabus <ArrowDown size={16} aria-hidden="true" />
              </ExtLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="hero-art-stage relative mx-auto w-full max-w-[640px]">
            <Img
              src={images.hero.main}
              alt="CS50 Nepal duck mascot with a laptop, computer science books, and Himalayan mountains"
              width={1252}
              height={731}
              className="duck-float relative z-10 block h-auto w-full object-contain drop-shadow-[0_20px_34px_rgba(15,23,42,0.2)]"
              priority
            />
          </div>
        </Reveal>
      </div>

      <div className="glass-surface border-y border-ink/10">
        <dl className="container-x grid divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="interactive-row flex items-baseline gap-4 py-6 sm:px-6 sm:first:pl-0">
              <dt className="font-display text-4xl font-bold">{s.value}</dt>
              <dd className="text-sm text-ink-mute">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
