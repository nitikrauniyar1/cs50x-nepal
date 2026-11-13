"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials({ page = false }) {
  const MainHeading = page ? "h1" : "h2";
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const total = testimonials.length;
  const story = testimonials[active];

  const move = (direction) => {
    setActive((current) => (current + direction + total) % total);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  };

  const handleTouchStart = (event) => {
    const touch = event.changedTouches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    move(deltaX < 0 ? 1 : -1);
  };

  return (
    <section id="stories" className="bg-sand py-14 sm:py-16">
      <div className="container-x">
        <header className="max-w-4xl">
          <p className="eyebrow mb-3 text-crimson">Testimonials</p>
          <MainHeading className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-crimson sm:text-5xl lg:text-[3.35rem]">
            Stories from the learners who came before you.
          </MainHeading>
        </header>

        <div
          className="mx-auto mt-8 max-w-5xl sm:mt-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Learner testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => { touchStart.current = null; }}
          style={{ touchAction: "pan-y" }}
        >
          <figure key={active} className="testimonial-quote-enter testimonial-card rounded-[1.5rem] px-6 py-8 sm:rounded-[1.75rem] sm:px-10 sm:py-10 lg:px-12 lg:py-11" aria-live="polite">
            <Quote className="h-8 w-8 text-crimson sm:h-9 sm:w-9" strokeWidth={2.2} aria-hidden="true" />
            <blockquote className="mt-6 max-w-4xl font-display text-xl leading-[1.45] text-ink sm:text-3xl lg:text-[2.4rem]">
              {story.quote}
            </blockquote>
            <figcaption className="mt-8 border-t border-ink/10 pt-5">
              <span className="block font-display font-bold text-ink">{story.name}</span>
              <span className="mt-0.5 block text-sm leading-relaxed text-ink-mute">{story.role}</span>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous learner story"
              className="testimonial-arrow icon-action flex h-11 w-11 items-center justify-center rounded-full border border-crimson/35 text-ink hover:border-crimson hover:bg-crimson-fill hover:text-white"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next learner story"
              className="testimonial-arrow icon-action flex h-11 w-11 items-center justify-center rounded-full border border-crimson/35 text-ink hover:border-crimson hover:bg-crimson-fill hover:text-white"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <span className="ml-1 font-mono text-sm tabular-nums text-ink-mute" aria-live="polite">
              {active + 1} <span className="px-1 text-crimson">/</span> {total}
            </span>
            <span className="ml-auto hidden text-xs text-ink-mute sm:inline">Use ← / → to browse</span>
          </div>
        </div>
      </div>
    </section>
  );
}
