import { useState } from "react";
import "./ServiceCard.scss";
import Fade from "react-reveal/Fade";
const ServiceCard = ({ service }) => {
  const { img, title, description, info } = service;
  const [showInfo, setShowInfo] = useState(false);

  const kebabCase = (string) =>
    string
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();

  return (
    <Fade up>
      <div
        className={`ServiceCard ServiceCard--info-${showInfo}`}
        onClick={() => setShowInfo((prev) => !prev)}
      >
        {img && !showInfo && (
          <Fade>
            <div className="ServiceCard__face">
              <img src={img} alt={title} />
              <p className="ServiceCard__title">{title}</p>
              <p className="ServiceCard_description">{description}</p>
              <p className="ServiceCard__read-more">Read more</p>
            </div>
          </Fade>
        )}

        {img && showInfo && (
          <Fade>
            <div
              className={`ServiceCard__back ServiceCard__back--${kebabCase(
                title
              )}`}
            >
              {info}
            </div>
          </Fade>
        )}
      </div>
    </Fade>
  );
};

export default ServiceCard;
