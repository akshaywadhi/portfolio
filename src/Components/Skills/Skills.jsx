import { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillCard/SkillInfoCard/SkillInfoCard";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function Skills({ section }) {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  return (
    <section className="skills-section section-block" ref={section} id="skills">
      <Reveal>
        <SectionHeader
          label="Skills"
          title="Technical stack"
          subtitle="Click a category to explore proficiency levels."
        />
      </Reveal>

      <div className="skills-layout">
        <div className="skills-categories">
          {SKILLS.map((item, i) => (
            <Reveal key={item.title} delay={i * 40}>
              <SkillCard
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => setSelectedSkill(item)}
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <SkillInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
        </Reveal>
      </div>
    </section>
  );
}
