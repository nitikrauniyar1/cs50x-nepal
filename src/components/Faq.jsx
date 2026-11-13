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
    <section id="faqs" className="bg-paper py-14 sm:py-16">
      <div className="container-x">
        <header className="mb-7 max-w-4xl sm:mb-9">
          <p className="eyebrow mb-3 text-crimson">FAQs</p>
          <MainHeading className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-crimson sm:text-5xl lg:text-6xl">
            Frequently asked questions.
          </MainHeading>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-mute sm:text-lg">
            Details about the course, weekly topics, enrollment, and certificates.
          </p>
        </header>

        <div className="faq-board overflow-hidden rounded-2xl border border-ink/10 bg-sand">
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
                    className="group flex min-h-[72px] w-full items-center justify-between gap-5 px-4 py-4 text-left sm:min-h-[84px] sm:px-6"
                  >
                    <span className={`min-w-0 flex-1 font-display text-lg font-semibold leading-snug transition-colors sm:text-2xl ${isOpen ? "text-crimson" : "text-ink group-hover:text-crimson"}`}>
                      {faq.q}
                    </span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-crimson-fill text-white" : "border border-gold/35 bg-gold/15 text-ink group-hover:bg-gold/40"}`}>
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
                    <div className="pb-5 pl-4 pr-5 sm:pb-6 sm:pl-6 sm:pr-16">
                      <div>
                        <p className="max-w-3xl text-base leading-relaxed text-ink-mute sm:text-lg">{faq.a}</p>
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
