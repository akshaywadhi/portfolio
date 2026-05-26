import "./MobileNav.css";
import { PROFILE } from "../../utils/data";

export default function MobileNav({
  isOpen,
  toggleMenu,
  sectionRefs,
  scrollToSection,
  navItems,
  activeId,
}) {
  const handleClick = (key) => {
    scrollToSection(sectionRefs[key], -80);
    toggleMenu();
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-header">
          <img className="logo" src={PROFILE.avatar} alt="" width={40} height={40} />
          <span>{PROFILE.name}</span>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map(({ label, key }) => (
            <li key={key}>
              <button
                type="button"
                className={`menu-item ${activeId === key ? "menu-item--active" : ""}`}
                onClick={() => handleClick(key)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <a
          className="contact-btn"
          href={PROFILE.cvUrl}
          download="AkshayWadhi.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>

        <p className="mobile-footer">© {new Date().getFullYear()} {PROFILE.name}</p>
      </div>
    </div>
  );
}
