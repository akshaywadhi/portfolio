export default function SectionHeader({ label, title, subtitle }) {
  return (
    <header className="section-header">
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">
        <span>{title}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
