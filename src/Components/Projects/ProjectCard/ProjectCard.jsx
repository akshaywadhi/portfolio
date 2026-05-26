import "./ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  tech,
  icon,
  link,
  highlights,
  size = "medium",
}) {
  const Wrapper = link ? "a" : "article";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noreferrer", className: `project-card project-card--${size} project-card--link` }
    : { className: `project-card project-card--${size}` };

  return (
    <Wrapper {...wrapperProps}>
      <div className="project-card__media">
        <img src={icon} alt="" loading="lazy" decoding="async" />
        <div className="project-card__overlay">
          {link ? (
            <span className="project-cta">
              View Live <span className="material-symbols-outlined">arrow_outward</span>
            </span>
          ) : (
            <span className="project-cta project-cta--private">Production SaaS</span>
          )}
        </div>
      </div>
      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        {highlights && (
          <ul className="project-highlights">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        {tech && (
          <ul className="project-tech">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}
