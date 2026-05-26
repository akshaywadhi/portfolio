import { useState } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";
import { PROFILE, NAV_ITEMS } from "../../utils/data";
import { useScrollSpy } from "../../hooks/useScrollSpy";

export default function Navbar({ sectionRefs, scrollToSection }) {
  const [openMenu, setOpenMenu] = useState(false);
  const activeId = useScrollSpy(sectionRefs);

  const handleNavClick = (key) => {
    scrollToSection(sectionRefs[key]);
    setOpenMenu(false);
  };

  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={() => setOpenMenu((p) => !p)}
        sectionRefs={sectionRefs}
        scrollToSection={scrollToSection}
        navItems={NAV_ITEMS}
        activeId={activeId}
      />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <button
            type="button"
            className="logo-email"
            onClick={() => handleNavClick("section4")}
            aria-label="Go to home"
          >
            <img className="logo" src={PROFILE.avatar} alt="" width={44} height={44} />
            <span className="logo-name">{PROFILE.name.split(" ")[0]}</span>
          </button>

          <ul className="nav-links">
            {NAV_ITEMS.map(({ label, key }) => (
              <li key={key}>
                <button
                  type="button"
                  className={`menu-item ${activeId === key ? "menu-item--active" : ""}`}
                  onClick={() => handleNavClick(key)}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <a
                className="contact-btn"
                href={PROFILE.cvUrl}
                download="AkshayWadhi.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpenMenu((p) => !p)}
            aria-label={openMenu ? "Close menu" : "Open menu"}
            aria-expanded={openMenu}
          >
            <span className="material-symbols-outlined">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
