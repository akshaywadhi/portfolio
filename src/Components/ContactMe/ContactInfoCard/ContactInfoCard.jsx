import "./ContactInfoCard.css";

export default function ContactInfoCard({ iconUrl, icon, text, href }) {
  const content = (
    <>
      <div className="icon">
        {iconUrl ? (
          <img src={iconUrl} alt="" width={24} height={24} loading="lazy" />
        ) : (
          <span className="material-symbols-outlined">{icon}</span>
        )}
      </div>
      <p>{text}</p>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        className="contact-details-card"
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return <div className="contact-details-card">{content}</div>;
}
