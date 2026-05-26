import "./SkillInfoCard.css";

export default function SkillInfoCard({ heading, skills }) {
  return (
    <div className="skills-info-card bento-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item) => (
          <div key={item.skill} className="skill-row">
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress" style={{ width: item.percentage }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
