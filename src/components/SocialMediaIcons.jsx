// import Linkedin from '../assets/linkedin.png';
// import Github from '../assets/github.png';
// import X from '../assets/x.png';
// import Instagram from '../assets/instagram.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://www.linkedin.com/in/oluwole77101/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#ffffff", fontSize: "2rem" }}
        />
      </a>
      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://github.com/oluwolefsamson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: "#ffffff", fontSize: "2rem" }}
        />
      </a>

      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://twitter.com/@Oluwole77101"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faXTwitter}
          style={{ color: "#ffffff", fontSize: "2rem" }}
        />
      </a>

      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://wa.me/09028014957"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          style={{ color: "#ffffff", fontSize: "2rem" }}
        />
      </a>

      <a
        className="hover:opacity-50 transition-duration-500"
        href="https://www.instagram.com/oluwole7710"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: "#ffffff", fontSize: "2rem" }}
        />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
