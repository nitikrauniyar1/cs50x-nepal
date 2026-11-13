import { ArrowUpRight, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Img from "./Img";
import ExtLink from "./ExtLink";
import { images } from "@/config/images";
import { footerGroups, links, navItems, site } from "@/data/links";

const socials = [
  { label: "Facebook", href: links.facebook, Icon: Facebook },
  { label: "X (Twitter)", href: links.x, Icon: Twitter },
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "YouTube", href: links.youtube, Icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand text-ink">
      <div className="container-x grid gap-x-8 gap-y-9 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,1fr)]">
        <div className="glass-surface rounded-2xl p-5">
          <div className="group flex items-center gap-2.5">
            <Img src={images.brand.logo} alt="" width={36} height={36} className="transition-transform duration-200 group-hover:scale-105 h-9 w-9" />
            <span className="font-display text-xl font-bold">{site.name}</span>
          </div>
          <p className="eyebrow mt-4 text-crimson">Learn AI. Build what matters.</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-mute">
            Explore artificial intelligence through the CS50 curriculum, adapted for learners in Nepal at IOE Purwanchal Campus.
          </p>
          <ExtLink href={links.enroll} className="btn-gold mt-4 !px-5 !py-2.5">
            Get started <ArrowUpRight size={16} aria-hidden="true" />
          </ExtLink>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <ExtLink href={href} aria-label={label} className="glass-control glass-social icon-action flex h-10 w-10 items-center justify-center rounded-full hover:bg-crimson-fill hover:text-white">
                  <Icon size={18} aria-hidden="true" />
                </ExtLink>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Explore">
          <h2 className="eyebrow text-crimson">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block text-ink-mute transition-all hover:translate-x-1 hover:text-crimson">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {footerGroups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h2 className="eyebrow text-crimson">{g.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {g.items.map((it) => (
                <li key={it.label}>
                  <ExtLink href={it.href} className="inline-block text-ink-mute transition-all hover:translate-x-1 hover:text-crimson">
                    {it.label}
                  </ExtLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-ink/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CS50x Nepal. All rights reserved.</p>
          <p className="text-crimson">Made with love by Nitik Rauniyar ♥</p>
          <Link href="/" className="transition-all hover:-translate-y-0.5 hover:text-crimson">Back to home ↑</Link>
        </div>
      </div>
    </footer>
  );
}
