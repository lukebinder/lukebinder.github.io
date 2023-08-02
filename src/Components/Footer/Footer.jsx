import "./Footer.scss";
import LinkedIn from "../../assets/linkedin.png";
import Email from "../../assets/email.png";
import Phone from "../../assets/phone.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__details">SMC 2023</div>
      <div className="Footer__contact">
        <a href="tel:+64 021 481 870">
          <img src={Phone} alt="tel:+64 021 481 870" />
        </a>
        <a
          href="mailto:simonmarkhamconsulting@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Email} alt="simonmarkhamconsulting@outlook.com" />
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
        </a>
      </div>
    </footer>
  );
};

export default Footer;
