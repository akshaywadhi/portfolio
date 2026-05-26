import { useEffect, useState } from "react";

export function useScrollSpy(sectionRefs, offset = 140) {
  const [activeId, setActiveId] = useState("section4");

  useEffect(() => {
    const sections = Object.entries(sectionRefs)
      .map(([id, ref]) => ({ id, el: ref?.current }))
      .filter((s) => s.el);

    const onScroll = () => {
      const scrollY = window.scrollY + offset;
      const sorted = sections
        .map(({ id, el }) => ({ id, top: el.offsetTop }))
        .sort((a, b) => a.top - b.top);

      let current = sorted[0]?.id ?? "section4";
      for (const { id, top } of sorted) {
        if (top <= scrollY) current = id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionRefs, offset]);

  return activeId;
}
