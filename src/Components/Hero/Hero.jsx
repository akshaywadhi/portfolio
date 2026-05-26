import "./Hero.css";
import Typewriter from "typewriter-effect";
import { PROFILE } from "../../utils/data";
import Reveal from "../common/Reveal";

export default function Hero({ section, scrollToSection, sectionRefs }) {
  return (
    <section className="hero-container section-block" ref={section} id="home">
      <div className="hero-bg-text" aria-hidden="true">
        <span>{PROFILE.initials}</span>
      </div>

      <Reveal className="hero-content">
        <div className="hero-badge-row">
          <span className="status-badge">
            <span className="status-dot" />
            {PROFILE.availability}
          </span>
          <span className="location-badge">
            <span className="material-symbols-outlined">location_on</span>
            {PROFILE.location}
          </span>
        </div>

        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">{PROFILE.name}</h1>
        <h2 className="hero-role" aria-label={PROFILE.title}>
          <Typewriter
            onInit={(typewriter) => {
              PROFILE.typewriterRoles.forEach((role) => {
                typewriter.typeString(role).pauseFor(2200).deleteAll();
              });
              typewriter.start();
            }}
            options={{ loop: true, delay: 75, deleteSpeed: 45 }}
          />
        </h2>
        <p className="hero-tagline">
          I build secure, scalable SaaS platforms — multi-tenant systems, RBAC, REST APIs, and data-driven dashboards.
        </p>

        <div className="hero-cta">
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollToSection(sectionRefs.section5)}
          >
            View Work
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <a
            className="btn-outline"
            href={PROFILE.cvUrl}
            download="AkshayWadhi.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <ul className="social-icons">
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </li>
        </ul>
      </Reveal>

      <Reveal className="hero-visual" delay={120}>
        <div className="hero-photo-frame">
          <div className="photo-glow" />
          <img
            className="hero-photo"
            src={PROFILE.heroImage}
            alt={`${PROFILE.name} — Full Stack Developer`}
            width={560}
            height={700}
            fetchPriority="high"
            decoding="async"
          />
          <div className="floating-card floating-card--top">
            <span className="material-symbols-outlined">code</span>
            Full Stack
          </div>
          <div className="floating-card floating-card--bottom">
            <span className="material-symbols-outlined">cloud_done</span>
            Production SaaS
          </div>
        </div>
      </Reveal>
    </section>
  );
}
