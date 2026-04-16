import { skills } from "../data/portfolio";
import FadeIn from "./FadeIn";

const Skills = () => {
  return (
    <section className="section" id="skills" style={{ background: "linear-gradient(180deg, transparent, rgba(6,182,212,0.03), transparent)" }}>
      <div className="container">
        <FadeIn>
          <div className="divider" />
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">My Toolbox — Languages, Frameworks and Platforms I work with</p>
        </FadeIn>

        <div className="skills-grid">
          {skills.map((cat, i) => (
            <FadeIn key={cat.category} delay={i * 0.07}>
              <div className="card" style={{ height: "100%" }}>
                <div className="skill-category-title">{cat.category}</div>
                <div className="skill-pills">
                  {cat.skills.map((sk) => (
                    <span className="tag" key={sk.name}>{sk.name}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
