import "./Footer.css";
import { PROFILE } from "../../utils/data";

export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-linkedin-in", href: PROFILE.linkedin, label: "LinkedIn" },
    { icon: "fab fa-github", href: PROFILE.github, label: "GitHub" },
    { icon: "fas fa-envelope", href: `mailto:${PROFILE.email}`, label: "Email" },
  ];

  return (
    <footer className="footer">
      <p className="footer-copy">
        © {new Date().getFullYear()} {PROFILE.name}
      </p>
      <ul className="footer-social">
        {socialLinks.map(({ icon, href, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <i className={icon} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
