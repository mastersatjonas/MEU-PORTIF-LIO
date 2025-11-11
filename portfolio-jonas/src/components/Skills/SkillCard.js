import React from 'react';
import './SkillCard.css';

const SkillCard = ({ name, icon, level, color }) => {
  return (
    <div className="skill-item">
      <div className={`skill-icon ${color}`} aria-hidden="true">
        <i className={`bi ${icon}`}></i>
      </div>
      <h4>{name}</h4>
      <div className="progress-bar" aria-label={`nível de habilidade ${level} por cento em ${name}`}>
        <div className="progress" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillCard;