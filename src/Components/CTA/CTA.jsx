import { PROFILE } from "../../utils/data";
import Reveal from "../common/Reveal";
import "./CTA.css";

export default function CTA({ scrollToSection, sectionRefs }) {
  return (
    <Reveal>
      <section className="cta-strip">
        <div className="cta-content">
          <h3>Let's build something impactful</h3>
          <p>Open to full-time roles, internships, and freelance MERN projects.</p>
        </div>
        <div className="cta-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollToSection(sectionRefs.section3)}
          >
            Get in Touch
          </button>
          <a className="btn-outline" href={PROFILE.cvUrl} download="AkshayWadhi.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </section>
    </Reveal>
  );
}
