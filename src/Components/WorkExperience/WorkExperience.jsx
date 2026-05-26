import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function WorkExperience({ section }) {
  return (
    <section className="experience-section section-block" ref={section} id="experience">
      <Reveal>
        <SectionHeader
          label="Experience"
          title="Where I've built impact"
          subtitle="Production systems, mentorship, and end-to-end ownership."
        />
      </Reveal>

      <div className="timeline">
        {WORK_EXPERIENCE.map((item, index) => (
          <Reveal key={`${item.title}-${item.company}`} delay={index * 100}>
            <article className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {index < WORK_EXPERIENCE.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="bento-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <ul className="timeline-list">
                  {item.responsibilities.map((r) => (
                    <li key={r.slice(0, 50)}>{r}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
