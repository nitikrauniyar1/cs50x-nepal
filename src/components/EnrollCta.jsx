import { ArrowUpRight } from "lucide-react";
import ExtLink from "./ExtLink";
import Reveal from "./Reveal";
import { links } from "@/data/links";

export default function EnrollCta() {
  return (
    <section id="enroll" className="px-5 pb-16 sm:px-8 sm:pb-20">
      <Reveal className="glass-accent interactive-card mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-12 text-center text-white sm:px-16 sm:py-16">
        <p className="eyebrow">Enrollment</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">
          Ready to build intelligent systems?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/85">
          Join a growing community of future innovators learning AI through the CS50 curriculum.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <ExtLink href={links.enroll} className="btn bg-gold text-[#151D49] hover:bg-[#ffc633]">
            View enrollment status <ArrowUpRight size={16} aria-hidden="true" />
          </ExtLink>
          <ExtLink href={links.youtube} className="btn border border-white/50 hover:bg-white hover:text-crimson-fill">
            Subscribe on YouTube
          </ExtLink>
        </div>
      </Reveal>
    </section>
  );
}
