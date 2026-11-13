"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Enrollment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-crimson">Enrollment</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">Start your AI journey.</h1>
          <p className="mt-4 leading-relaxed text-ink-mute">
            Register your interest in CS50 AI with Python. The course introduces Python, data foundations, machine learning, and practical AI projects.
          </p>
          <div className="glass-surface mt-7 rounded-2xl p-5">
            <h2 className="font-display text-xl font-bold">Before you begin</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-mute">
              Share your details and learning goals. The course team can follow up with the latest enrollment information when a registration service is connected.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="interactive-card glass-surface rounded-3xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Register your interest</h2>
          <p className="mt-2 text-sm text-ink-mute">All fields are required.</p>
          <div className="mt-6 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Full name
            <input name="name" autoComplete="name" required className="glass-control rounded-xl px-4 py-3 font-normal text-ink outline-none transition focus:border-crimson focus:ring-2 focus:ring-crimson/20" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Email address
            <input name="email" type="email" autoComplete="email" required className="glass-control rounded-xl px-4 py-3 font-normal text-ink outline-none transition focus:border-crimson focus:ring-2 focus:ring-crimson/20" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              What would you like to learn?
            <textarea name="goals" required rows={4} className="glass-control resize-y rounded-xl px-4 py-3 font-normal text-ink outline-none transition focus:border-crimson focus:ring-2 focus:ring-crimson/20" />
            </label>
            <button type="submit" className="btn-gold w-full">Submit interest</button>
          </div>
          {submitted && (
            <p role="status" className="glass-surface mt-5 flex gap-2 rounded-xl p-4 text-sm leading-relaxed text-ink">
              <CheckCircle2 className="mt-0.5 shrink-0 text-crimson" size={18} aria-hidden="true" />
              This form is ready, but no enrollment service is connected yet. Your details have not been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
