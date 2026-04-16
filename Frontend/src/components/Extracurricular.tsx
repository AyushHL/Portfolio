import { extracurricular } from "../data/portfolio";
import FadeIn from "./FadeIn";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
);

const Extracurricular = () => {
  return (
    <section className="section" id="extracurricular" style={{ background: "linear-gradient(180deg, transparent, rgba(236,72,153,0.03), transparent)" }}>
      <div className="container">
        <FadeIn>
          <div className="divider" />
          <h2 className="section-title">
            Extra<span className="gradient-text">curricular</span>
          </h2>
          <p className="section-subtitle">Beyond the Classroom</p>
        </FadeIn>

        <div className="extra-grid">
          {/* Photo placeholder */}
          <FadeIn direction="left">
            <div className="extra-photo-wrap">
              <img src="/Media/Photos/Award.JPG" alt="Extracurricular Award" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--radius-lg)" }} />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.1}>
            <div className="card" style={{ background: "transparent", border: "none", padding: "0", boxShadow: "none" }}>
              <span className="tag" style={{ marginBottom: "20px", display: "inline-flex" }}>🎓 Community Impact</span>
              <h3 className="extra-title">{extracurricular.title}</h3>
              <p className="extra-desc">{extracurricular.description}</p>

              <div className="extra-awarded">
                <div className="award-item">
                  <CheckIcon />
                  <span>Awarded by: {extracurricular.awardedBy.join(" & ")}</span>
                </div>
                <div className="award-item">
                  <CheckIcon />
                  <span>Honoured by: {extracurricular.honouredBy}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
