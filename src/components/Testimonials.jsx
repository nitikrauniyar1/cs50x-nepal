"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials({ page = false }) {
  const MainHeading = page ? "h1" : "h2";
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const t = testimonials[i];
  const go = (n) => setI((n + total) % total);

  return (
    <section id="stories" className="bg-sand py-16 sm:py-20">
      <div className="container-x">
        <p className="eyebrow text-crimson">Testimonials</p>
        <MainHeading className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          Stories from the learners who came before you.
        </MainHeading>

        <figure key={i} className="testimonial-change interactive-card glass-surface mt-10 max-w-4xl rounded-3xl p-6 sm:p-8" aria-live="polite">
          <Quote className="text-crimson" size={40} aria-hidden="true" />
          <blockquote className="mt-4 font-display text-2xl leading-snug sm:text-4xl">{t.quote}</blockquote>
          <figcaption className="mt-6">
            <span className="block text-lg font-bold">{t.name}</span>
            <span className="text-sm text-ink-mute">{t.role}</span>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center gap-4">
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous testimonial" className="icon-action flex h-11 w-11 items-center justify-center rounded-full border border-crimson/30 hover:bg-crimson-fill hover:text-white">
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next testimonial" className="icon-action flex h-11 w-11 items-center justify-center rounded-full border border-crimson/30 hover:bg-crimson-fill hover:text-white">
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <p className="font-mono text-sm text-ink-mute">
            {i + 1} / {total}
          </p>
        </div>
      </div>
    </section>
  );
}
