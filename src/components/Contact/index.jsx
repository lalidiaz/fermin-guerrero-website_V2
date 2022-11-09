import { FiClock } from "react-icons/fi";
import { Time } from "@/components/index";
import { contactLinks } from "@/utils/links";

const Contact = () => {
  return (
    <section className="contact-component">
      <div className="email">
        <p className="email-p">Email</p>
        <div className="email-content">
          <a target="_blank" rel="noreferrer" href="mailto:contact@ferminguerrero.com">
            contact@ferminguerrero.com
          </a>
          <div>
            <p>Dubai, UAE.</p>
          </div>
          <div className="time">
            <FiClock color="white" size={23} style={{ paddingRight: "5px" }} />
            <Time />
          </div>
        </div>
      </div>

      <div className="follow">
        <p className="follow-p">Follow</p>

        <ul className="follow-content">
          {contactLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a rel="noreferrer" href={link} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Contact;
