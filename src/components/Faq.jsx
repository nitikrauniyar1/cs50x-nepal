"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import ExtLink from "./ExtLink";
import { faqs } from "@/data/faqs";
import { links } from "@/data/links";

export default function Faq({ page = false }) {
  const MainHeading = page ? "h1" : "h2";
  const QuestionHeading = page ? "h2" : "h3";
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="py-12 sm:py-16">
      <div className="container-x">
        <header className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <p className="eyebrow mb-3 inline-flex items-center gap-2 text-crimson">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson" aria-hidden="true" />
              FAQ / QUICK ANSWERS
            </p>
            <MainHeading className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Good questions. Clear answers.
            </MainHeading>
          </div>
          <div className="flex items-center gap-4 sm:max-w-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/25 font-mono text-sm font-bold text-ink">
              {String(faqs.length).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-ink-mute">
              A quick guide to the course, syllabus, enrollment, and what to expect from CS50 AI.
            </p>
          </div>
        </header>

        <div className="faq-board mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-paper">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <article
                key={faq.q}
                data-open={isOpen}
                className="faq-item border-b border-ink/10 last:border-b-0"
              >
                <QuestionHeading className="m-0">
                  <button
                    type="button"
                    id={`faq-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="group grid min-h-14 w-full grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] items-center gap-3 px-3 py-3 text-left sm:min-h-[60px] sm:grid-cols-[3rem_minmax(0,1fr)_2.5rem] sm:gap-4 sm:px-5"
                  >
                    <span
                      aria-hidden="true"
                      className={`font-mono text-xs font-semibold tabular-nums ${isOpen ? "text-crimson" : "text-ink-mute"}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`min-w-0 font-display text-base font-semibold leading-snug transition-colors sm:text-lg ${isOpen ? "text-crimson" : "text-ink group-hover:text-crimson"}`}>
                      {faq.q}
                    </span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${isOpen ? "bg-crimson-fill text-white" : "bg-gold/20 text-ink group-hover:bg-gold/50"}`}>
                      <Plus
                        size={17}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                      />
                    </span>
                  </button>
                </QuestionHeading>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  aria-hidden={!isOpen}
                  data-open={isOpen}
                  className="faq-panel"
                >
                  <div className="faq-panel-inner">
                    <div className="grid grid-cols-[2.25rem_minmax(0,1fr)_2.25rem] gap-3 px-3 pb-4 sm:grid-cols-[3rem_minmax(0,1fr)_2.5rem] sm:gap-4 sm:px-5 sm:pb-5">
                      <span aria-hidden="true" className="mt-1 h-full border-l border-gold/50 justify-self-center" />
                      <div>
                        <p className="max-w-3xl text-sm leading-relaxed text-ink-mute sm:text-base">{faq.a}</p>
                        {faq.cta && (
                          <ExtLink
                            href={faq.cta.href}
                            tabIndex={isOpen ? 0 : -1}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson underline-offset-4 hover:underline"
                          >
                            {faq.cta.label} <ArrowUpRight size={15} aria-hidden="true" />
                          </ExtLink>
                        )}
                      </div>
                      <span aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 text-sm">
          <p className="text-ink-mute">Need the week-by-week breakdown?</p>
          <ExtLink href={links.syllabus} className="group inline-flex items-center gap-1.5 font-semibold text-crimson hover:underline hover:underline-offset-4">
            Browse the full syllabus
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
          </ExtLink>
        </footer>
      </div>
    </section>
  );
}
