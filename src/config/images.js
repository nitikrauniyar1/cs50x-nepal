// Single place for every image on the site.
// To replace an image: drop your file into /public/images/... and change the path here
// (or just overwrite the file keeping the same name). All current files are TEMPORARY placeholders.
export const images = {
  brand: {
    logo: "/images/brand/logo-mark.svg", // used in the site header and footer
  },
  hero: {
    main: "/images/hero/cs50-nepal-hero.png",
    about: "/images/hero/cs50-duck.png",
  },
  og: "/images/og/og-cover.png",
  // Generic placeholder portraits (NOT photos of real people).
  // Each instructor/mentor can point to their own file via the `photo` key in their data file.
  people: {
    a: "/images/people/portrait-a.svg",
    b: "/images/people/portrait-b.svg",
    c: "/images/people/portrait-c.svg",
    d: "/images/people/portrait-d.svg",
  },
};

const portraitKeys = ["a", "b", "c", "d"];
export const portraitFor = (index) => images.people[portraitKeys[index % portraitKeys.length]];
