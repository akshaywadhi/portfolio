import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function Projects({ section }) {
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="projects-section section-block" ref={section} id="projects">
      <Reveal>
        <SectionHeader
          label="Work"
          title="Featured projects"
          subtitle="Production-grade systems with real architecture — not just tutorials."
        />
      </Reveal>

      <div className="projects-bento">
        {featured && (
          <Reveal>
            <ProjectCard {...featured} size="large" />
          </Reveal>
        )}
        <div className="projects-secondary">
          {others.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <ProjectCard {...item} size="medium" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
