import { experiences } from "../data/portfolio";
import FadeIn from "./FadeIn";

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Experience = () => {
  return (
    <section className="section" id="experience" style={{ background: "linear-gradient(180deg, transparent, rgba(138,92,246,0.03), transparent)" }}>
      <div className="container">
        <FadeIn>
          <div className="divider" />
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">Where I've Put My Skills to Work</p>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.1}>
              <div className="card exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-period">{exp.period}</div>
                  </div>
                  <div>
                    <span className="tag cyan">Internship</span>
                  </div>
                </div>

                <ul className="bullet-list">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="exp-links">
                  {exp.github && (
                    <a href={exp.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer" id={`exp-${exp.id}-github`} style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
                      <GithubIcon /> GitHub
                    </a>
                  )}
                  {exp.live && (
                    <a href={exp.live} className="btn btn-outline" target="_blank" rel="noopener noreferrer" id={`exp-${exp.id}-live`} style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
                      <ExternalLinkIcon /> Live
                    </a>
                  )}
                  {exp.certificate && (
                    <a href={exp.certificate} className="btn btn-outline" target="_blank" rel="noopener noreferrer" id={`exp-${exp.id}-certificate`} style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
                      📜 Certificate
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
