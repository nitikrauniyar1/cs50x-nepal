import { ArrowUpRight, CalendarDays } from "lucide-react";
import ExtLink from "./ExtLink";
import { links } from "@/data/links";

export default function Enrollment() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-crimson">Enrollment</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Stay connected with CS50 AI.
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-mute">
            CS50 AI with Python brings learners together for practical study in Python, data, and artificial intelligence.
          </p>
        </div>

        <div className="glass-surface rounded-3xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="glass-control flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-crimson">
              <CalendarDays size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="eyebrow text-crimson">Current status</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Registration is closed</h2>
              <p className="mt-2 leading-relaxed text-ink-mute">
                Registration for this edition has ended. Follow CS50x Nepal for announcements about future courses and events.
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <ExtLink href={links.facebook} className="btn-gold">
              Follow CS50x Nepal <ArrowUpRight size={16} aria-hidden="true" />
            </ExtLink>
            <ExtLink href={links.excess} className="btn-ghost">
              Explore EXCESS Nepal <ArrowUpRight size={16} aria-hidden="true" />
            </ExtLink>
          </div>
        </div>
      </div>
    </section>
  );
}
