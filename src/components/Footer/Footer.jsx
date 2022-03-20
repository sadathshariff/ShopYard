import "./Footer.css";
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="text-center headline-h3">
        Download our App from PlayStore
      </h3>
      <div className="footer-social-links">
        <ul>
          <li>
            <a
              href="https://github.com/sadathshariff"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/SadathullaS"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sadathulla-shariff"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom-div small-text-2 flex ">
        Made with <FaHeart color="red" /> by Sadath
      </div>
    </footer>
  );
};
