import { STATS } from "../../utils/data";
import Reveal from "../common/Reveal";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats-bento" aria-label="Impact metrics">
      <div className="bento-grid stats-grid">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <article className="bento-card stat-card">
              <span className="material-symbols-outlined stat-icon">{stat.icon}</span>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
