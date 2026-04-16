import { achievements } from "../data/portfolio";
import FadeIn from "./FadeIn";

const Achievements = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <FadeIn>
          <div className="divider" />
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">Milestones and Competitive Highlights</p>
        </FadeIn>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <FadeIn key={ach.id} delay={i * 0.1}>
              <div className="card achievement-card">
                <div className="achievement-icon">{ach.icon}</div>
                <div className="achievement-text">{ach.title}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
