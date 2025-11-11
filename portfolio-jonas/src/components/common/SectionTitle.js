import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ children, highlight }) => {
  return (
    <div className="titulo-secao" data-aos="fade-up">
      <h2>
        {children} {highlight && <span>{highlight}</span>}
      </h2>
      <div className="line"></div>
    </div>
  );
};

export default SectionTitle;