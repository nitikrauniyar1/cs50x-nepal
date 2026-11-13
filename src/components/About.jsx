import { ArrowUpRight } from "lucide-react";
import Img from "./Img";
import ExtLink from "./ExtLink";
import Reveal from "./Reveal";
import { images } from "@/config/images";
import { course } from "@/data/courses";
import { links } from "@/data/links";

export default function About() {
  return (
    <>
      <section id="about" className="bg-sand py-16 sm:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="duck-stage group interactive-card glass-surface relative rounded-3xl p-2 sm:p-3">
            <Img
              src={images.hero.about}
              alt="CS50 golden duck wearing a virtual reality headset"
              width={524}
              height={484}
              className="duck-float relative z-10 w-full rounded-3xl"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-crimson">About us</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">{course.aboutHeading}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-6 font-display text-2xl text-gold-deep">What is CS50 AI?</h3>
              <p className="mt-3 leading-relaxed text-ink-mute">{course.intro}</p>
              <p className="mt-4 leading-relaxed text-ink-mute">{course.aboutBody}</p>
              <ExtLink href={links.harvardCourse} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-crimson underline-offset-4 hover:underline">
                Harvard CS50 AI course page <ArrowUpRight size={16} aria-hidden="true" />
              </ExtLink>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
