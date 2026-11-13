import "./globals.css";
import { site } from "@/data/links";
import { images } from "@/config/images";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.course}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["CS50", "CS50 AI", "CS50x Nepal", "IOE Purwanchal Campus", "artificial intelligence", "Python", "Nepal"],
  openGraph: {
    title: `${site.name} | ${site.course}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: images.og, width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.course}`, description: site.description, images: [images.og] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const saved=localStorage.getItem("cs50x-nepal-theme");const dark=saved?saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=dark?"dark":"light"}catch{document.documentElement.dataset.theme="light"}})()`,
          }}
        />
      </head>
      <body>
        <NavigationProgress />
        <Navbar />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
