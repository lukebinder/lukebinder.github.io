import "./ContactModal.scss";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import LinkedIn from "../../assets/linkedin.png";

const ContactModal = ({ handleToggleContactModal }) => {
  return (
    <div
      className="ContactModal"
      onClick={() => handleToggleContactModal("close")}
    >
      <div className="ContactModal__content">
        <p>
          Send me an email, connect with me on Linkedin, or give me a call and
          let's have a chat.
        </p>
        <a href="tel:+64 021 481 870">
          <img src={Phone} alt="tel:+64 021 481 870" />
          <p>+64 021 481 870</p>
        </a>
        <a
          href="mailto:simonmarkhamconsulting@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Email} alt="simonmarkhamconsulting@outlook.com" />
          <p>simonmarkhamconsulting@outlook.com</p>
        </a>
        <a
          href="https://www.linkedin.com/in/simon-markham-2751b515"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedIn}
            alt="https://www.linkedin.com/in/simon-markham-2751b515"
          />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};
export default ContactModal;
