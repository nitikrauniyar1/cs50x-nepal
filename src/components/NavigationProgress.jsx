"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const interval = useRef(null);
  const resetTimer = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  const start = useCallback(() => {
    window.clearInterval(interval.current);
    window.clearTimeout(resetTimer.current);
    setActive(true);
    setProgress(18);
    interval.current = window.setInterval(() => {
      setProgress((value) => Math.min(value + Math.random() * 9, 88));
    }, 180);
  }, []);

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
      start();
    };

    const onPopState = () => start();
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      window.clearInterval(interval.current);
      window.clearTimeout(resetTimer.current);
    };
  }, [start]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    if (!active) return;

    window.clearInterval(interval.current);
    setProgress(100);
    resetTimer.current = window.setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 220);
  }, [pathname, active]);

  return (
    <div className={`pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] transition-opacity duration-200 ${active ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
      <div className="h-full bg-crimson transition-[width] duration-200 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
