import React from 'react';
import './SkillCard.css';

const SkillCard = ({ name, icon, level, color }) => {
  return (
    <article className="skill-item" aria-label={`${name} - nível ${level}%`}>
      <div className="skill-top">
        <div className={`skill-icon ${color}`} aria-hidden="true">
          <i className={`bi ${icon}`}></i>
        </div>

        <span className="skill-level">{level}%</span>
      </div>

      <h4>{name}</h4>

      <div
        className="progress-bar"
        role="progressbar"
        aria-label={`Nível de habilidade em ${name}`}
        aria-valuenow={level}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`progress ${color}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </article>
  );
};

export default SkillCard;
