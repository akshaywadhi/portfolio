import "./SkillCard.css";

export default function SkillCard({ title, iconUrl, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt="" loading="lazy" width={40} height={40} />
      </div>
      <span>{title}</span>
    </button>
  );
}
