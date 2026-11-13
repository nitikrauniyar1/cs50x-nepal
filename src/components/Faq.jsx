"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import ExtLink from "./ExtLink";
import { faqs } from "@/data/faqs";

export default function Faq({ page = false }) {
  const MainHeading = page ? "h1" : "h2";
  const QuestionHeading = page ? "h2" : "h3";
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="py-16 sm:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-crimson">FAQs</p>
          <MainHeading className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Frequently asked questions.</MainHeading>
        </div>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q}>
                <QuestionHeading>
                  <button
                    type="button"
                    id={`faq-btn-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-crimson"
                  >
                    <span className="font-display text-xl font-bold sm:text-2xl">{f.q}</span>
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-[#151D49] transition-transform duration-200 group-hover:scale-105">
                      <Plus
                        size={18}
                        aria-hidden="true"
                        className={`absolute transition-all duration-200 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                      />
                      <Minus
                        size={18}
                        aria-hidden="true"
                        className={`absolute transition-all duration-200 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                      />
                    </span>
                  </button>
                </QuestionHeading>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  aria-hidden={!isOpen}
                  data-open={isOpen}
                  className="faq-panel"
                >
                  <div className="faq-panel-inner rounded-xl px-4">
                    <div className="pb-5 pr-14">
                      <p className="leading-relaxed text-ink-mute">{f.a}</p>
                      {f.cta && (
                        <ExtLink href={f.cta.href} tabIndex={isOpen ? 0 : -1} className="mt-3 inline-flex items-center gap-1.5 font-semibold underline underline-offset-4 transition-transform hover:translate-x-1">
                          {f.cta.label} <ArrowUpRight size={16} aria-hidden="true" />
                        </ExtLink>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
