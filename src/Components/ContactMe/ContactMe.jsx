import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactFrom/ContactForm";
import { PROFILE } from "../../utils/data";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";

export default function ContactMe({ section }) {
  return (
    <section className="contact-section section-block" ref={section} id="contact">
      <Reveal>
        <SectionHeader
          label="Contact"
          title="Let's connect"
          subtitle="Have a role, project, or collaboration in mind? I'd love to hear from you."
        />
      </Reveal>

      <div className="contact-grid">
        <Reveal>
          <div className="contact-info-col">
            <ContactInfoCard
              iconUrl="./assets/img/gmail.webp"
              text={PROFILE.email}
              href={`mailto:${PROFILE.email}`}
            />
            <ContactInfoCard
              iconUrl="./assets/img/github.webp"
              text="github.com/akshaywadhi"
              href={PROFILE.github}
            />
            <ContactInfoCard
              icon="call"
              text={PROFILE.phone}
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
            />
            <ContactInfoCard icon="location_on" text={PROFILE.location} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
