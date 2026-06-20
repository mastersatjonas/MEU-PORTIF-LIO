import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SkillCard from './SkillCard';
import { skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section className="habilidades" id="habilidades" role="region" aria-label="Habilidades de Jonas Fernandes">
      <div className="interface">
        <SectionTitle highlight="Habilidades">Minhas</SectionTitle>

        <div className="skills-container">
          {/* Frontend Skills */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
            <h3>
              <i className={`bi ${skillsData.frontend.icon}`}></i> {skillsData.frontend.title}
            </h3>

            <div className="skills-grid">
              {skillsData.frontend.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Backend & Database Skills */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <h3>
              <i className={`bi ${skillsData.backend.icon}`}></i> {skillsData.backend.title}
            </h3>

            <div className="skills-grid">
              {skillsData.backend.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>

          {/* Tools & Deploy Skills */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
            <h3>
              <i className={`bi ${skillsData.tools.icon}`}></i> {skillsData.tools.title}
            </h3>

            <div className="skills-grid">
              {skillsData.tools.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
