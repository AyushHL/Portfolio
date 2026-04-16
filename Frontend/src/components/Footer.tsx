import { personalInfo } from "../data/portfolio";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {year} <span style={{ color: "var(--accent-purple)" }}>Ayush</span>. Built with React + TypeScript.
        </p>
        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" id="footer-github">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" id="footer-linkedin">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
