import { PROFILE } from "../../utils/data";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import "./About.css";

const HIGHLIGHTS = [
  { icon: "domain", title: "Multi-tenant SaaS", desc: "Isolated institute data with InstituteId scoping" },
  { icon: "admin_panel_settings", title: "RBAC Systems", desc: "Dynamic menus & ProtectedRoute guards" },
  { icon: "api", title: "REST APIs", desc: "JWT, bcrypt, Multer, optimized Mongoose" },
  { icon: "school", title: "Mentorship", desc: "150+ students trained in MERN stack" },
];

export default function About({ section }) {
  return (
    <section className="about-section section-block" ref={section} id="about">
      <Reveal>
        <SectionHeader
          label="About"
          title="Engineering with purpose"
          subtitle="I turn complex business requirements into clean, scalable full-stack solutions."
        />
      </Reveal>

      <div className="about-bento bento-grid">
        <Reveal className="bento-span-2">
          <article className="bento-card about-main-card">
            <p>{PROFILE.summary}</p>
            <div className="about-contact-row">
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                <span className="material-symbols-outlined">call</span>
                {PROFILE.phone}
              </a>
              <a href={`mailto:${PROFILE.email}`}>
                <span className="material-symbols-outlined">mail</span>
                {PROFILE.email}
              </a>
            </div>
          </article>
        </Reveal>

        {HIGHLIGHTS.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <article className="bento-card highlight-bento-card">
              <span className="material-symbols-outlined highlight-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
