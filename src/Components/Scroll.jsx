export const scrollToSection = (ref, yOffset = -120) => {
  if (!ref?.current) return;
  const y =
    ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
