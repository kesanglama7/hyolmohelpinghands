"use client";

import { useEffect, useState } from "react";

type Options = {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number | number[];
};

export function useScrollSpy({
  sectionIds,
  rootMargin = "-30% 0px -60% 0px",
  threshold = 0.1,
}: Options) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry most visible / intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin, threshold }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  return activeId;
}
