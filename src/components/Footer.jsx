import { pageLinks } from "../data";
import PageLinks from "./PageLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com",
  },
];
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socials.map((social, index) => (
          <a href={social.url} key={index}>
            <FontAwesomeIcon
              icon={social.icon}
              size="2x"
              color="#181136"
              className="footer-icon"
            />
          </a>
        ))}
      </ul>
      <p className="copyright">
        Copyright &copy; Northern Bliss Tours
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
