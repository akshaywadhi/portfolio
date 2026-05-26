import { EDUCATION } from "../../utils/data";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import "./Education.css";

export default function Education({ section }) {
  return (
    <section className="education-section section-block" ref={section} id="education">
      <Reveal>
        <SectionHeader label="Education" title="Learning path" />
      </Reveal>

      <div className="education-grid bento-grid">
        {EDUCATION.map((item, i) => (
          <Reveal key={item.degree} delay={i * 80}>
            <article className="bento-card education-card">
              <span className="education-date">{item.date}</span>
              <h3>{item.degree}</h3>
              <p>
                {item.institution} · {item.location}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
