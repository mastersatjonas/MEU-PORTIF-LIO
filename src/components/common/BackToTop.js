import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      className={`volta-topo ${isVisible ? 'visible' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      aria-label="Voltar ao topo"
    >
      <i className="bi bi-arrow-up-circle-fill" aria-hidden="true"></i>
    </a>
  );
};

export default BackToTop;