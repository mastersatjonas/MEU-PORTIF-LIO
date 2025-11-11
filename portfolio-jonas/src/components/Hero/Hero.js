import React from 'react';
import { personalInfo, contactInfo } from '../../data/contact';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-site" role="region" aria-label="Introdução">
      <div className="interface">
        <div className="txt-hero" data-aos="fade-right" data-aos-duration="1000">
          <img
            src="/img/Jonas.png"
            className="img-jonas"
            alt="Foto de Jonas Fernandes"
            width="100"
            height="100"
          />
          <h1>
            Olá! Eu sou <span>{personalInfo.name.toUpperCase()}</span>, um desenvolvedor fullstack apaixonado por criar
            soluções inovadoras.
          </h1>
          <p>{personalInfo.description}</p>

          <div className="hero-buttons">
            <a
              href={`https://wa.me/${contactInfo.phoneLink}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-btn" type="button" aria-label="Abrir WhatsApp">
                <i className="bi bi-whatsapp"></i> WhatsApp
              </button>
            </a>
            <a
              href={personalInfo.cv}
              className="download-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-btn secondary" type="button" aria-label="Download do CV">
                <i className="bi bi-file-earmark-arrow-down"></i> Download CV
              </button>
            </a>
          </div>
        </div>

        <div className="txt-hero-1" data-aos="fade-left" data-aos-duration="1000">
          <img
            src="/img/img-3.png"
            alt="Imagem representando códigos de programação"
            width="400"
            height="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;