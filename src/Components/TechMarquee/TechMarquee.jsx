import { TECH_STACK } from "../../utils/data";
import "./TechMarquee.css";

export default function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="marquee-section" aria-label="Technologies">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="marquee-pill">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
