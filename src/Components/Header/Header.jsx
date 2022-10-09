import "./Header.scss";
import { useState } from "react";
import ActionBtn from "../ActionBtn";
import { Link } from "react-scroll";
import Close from "../../assets/close.png";

const Header = ({ navBkg, handleToggleContactModal }) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className={`${navBkg}`}>
      <h1>SMC</h1>
      <div className="header__mobile-nav-open" onClick={() => setOpenNav(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`mobile-nav-${openNav ? "open" : "close"}`}>
        <div
          className="header__mobile-nav-close"
          onClick={() => setOpenNav(false)}
        >
          <img src={Close} alt="close menu" />
        </div>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              onClick={() => setOpenNav(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              onClick={() => setOpenNav(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="record"
              spy={true}
              smooth={true}
              offset={-80}
              onClick={() => setOpenNav(false)}
            >
              Track Record
            </Link>
          </li>

          <li
            className="nav-contact-li"
            onClick={() => {
              handleToggleContactModal("open");
              setOpenNav(false);
            }}
          >
            <a>Contact</a>
          </li>
          <li className="nav-contact-btn">
            <ActionBtn
              type="primary solid"
              onClick={() => handleToggleContactModal("open")}
            >
              Contact
            </ActionBtn>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
