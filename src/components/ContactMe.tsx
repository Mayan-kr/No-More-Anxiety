import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div id="contact" className="contact-me">
      <h1>Contact Me</h1>
      <div className="social-icons">

        <a id="feedback" href="mailto:kumarmayan92@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} />
        </a>
        <a href="https://wa.me/+917667643249" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com/mayan_0_1?igsh=amNnNzhjbmtkaXV5" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://github.com/Mayan-kr" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}