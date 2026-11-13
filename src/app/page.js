import Hero from "@/components/Hero";
import About from "@/components/About";
import Course from "@/components/Course";
import Syllabus from "@/components/Syllabus";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import EnrollCta from "@/components/EnrollCta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Course />
      <Syllabus />
      <Team />
      <Partners />
      <Testimonials />
      <Faq />
      <EnrollCta />
    </>
  );
}
