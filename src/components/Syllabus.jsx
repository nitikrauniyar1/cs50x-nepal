"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ExtLink from "./ExtLink";
import { syllabus } from "@/data/courses";
import { links } from "@/data/links";

export default function Syllabus() {
  const [active, setActive] = useState(0);
  const week = syllabus[active];

  const onKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + syllabus.length) % syllabus.length;
    setActive(next);
    document.getElementById(`week-tab-${next}`)?.focus();
  };

  return (
    <section id="syllabus" className="bg-sand py-16 sm:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-crimson">Syllabus</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Five weeks, one clear path.</h2>
          </div>
          <ExtLink href={links.syllabus} className="btn-ghost">
            Full syllabus <ArrowUpRight size={16} aria-hidden="true" />
          </ExtLink>
        </div>

        <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div role="tablist" aria-label="Course weeks" aria-orientation="vertical" onKeyDown={onKeyDown} className="grid gap-2 lg:flex lg:flex-col">
            {syllabus.map((w, i) => (
              <button
                key={w.week}
                id={`week-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls="week-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={`w-full min-w-0 rounded-2xl border px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                  i === active ? "border-crimson-fill bg-crimson-fill text-white" : "glass-control hover:border-crimson/50"
                }`}
              >
                <span className={`eyebrow block ${i === active ? "text-white/80" : "text-ink-mute"}`}>Week {w.week}</span>
                <span className="mt-1 block font-display text-lg font-bold leading-snug">{w.title}</span>
              </button>
            ))}
          </div>

          <div id="week-panel" role="tabpanel" aria-labelledby={`week-tab-${active}`} className="interactive-card glass-surface min-w-0 rounded-3xl p-6 sm:p-10">
            <p className="eyebrow text-crimson">Week {week.week}</p>
            <h3 className="mt-2 font-display text-3xl font-bold">{week.title}</h3>
            <p className="mt-3 max-w-2xl text-ink-mute">{week.summary}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {week.days.map((d, i) => (
                <div key={d.title} className="min-w-0 border-t-2 border-ink pt-4">
                  <p className="font-mono text-xs text-ink-mute">DAY {i + 1}</p>
                  <h4 className="mt-1 break-words font-display text-xl font-bold">{d.title}</h4>
                  {d.topics.length > 0 && (
                    <ul className="mt-3 space-y-2 text-sm">
                      {d.topics.map((t) => (
                        <li key={t} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
