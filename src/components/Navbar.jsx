import logo from "../images/logo.png";
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
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socials.map((social, index) => (
            <a href={social.url} key={index}>
              <FontAwesomeIcon icon={social.icon} size="2x" color="#fffdfd" />
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
