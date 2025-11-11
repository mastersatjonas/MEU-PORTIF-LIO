import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { contactInfo } from '../../data/contact';
import './About.css';

const About = () => {
  return (
    <section className="sobre" id="sobre" role="region" aria-label="Sobre Jonas Fernandes">
      <div className="interface">
        <SectionTitle highlight="Mim">Sobre</SectionTitle>

        <div className="conteudo-sobre" data-aos="fade-up">
          <div className="foto-sobre" data-aos="fade-right">
            <img 
              src="/img/Jonas.png" 
              alt="Foto de Jonas Fernandes" 
              width="350" 
              height="auto" 
            />
          </div>

          <div className="texto-sobre" data-aos="fade-left">
            <h3>Quem sou <span>eu?</span></h3>
            <p>
              Sou um desenvolvedor Web dedicado a criar soluções web eficientes e inovadoras. Com
              experiência em diversas tecnologias front-end e back-end, estou sempre em busca de novos
              desafios e aprendizados.
            </p>
            <p>
              Minha jornada na programação começou com HTML, CSS e JavaScript, e desde então tenho
              expandido constantemente meus conhecimentos para incluir frameworks modernos e metodologias
              ágeis de desenvolvimento.
            </p>
            <p>
              Acredito que a tecnologia tem o poder de transformar realidades, e meu objetivo é criar
              aplicações que proporcionem experiências significativas para os usuários.
            </p>

            <div className="info-pessoal" aria-label="Informações pessoais">
              <div className="info-item">
                <strong><i className="bi bi-envelope"></i> Email:</strong>
                <span>{contactInfo.email}</span>
              </div>
              <div className="info-item">
                <strong><i className="bi bi-geo-alt"></i> Localização:</strong>
                <span>{contactInfo.location}</span>
              </div>
              <div className="info-item">
                <strong><i className="bi bi-translate"></i> Idiomas:</strong>
                <span>{contactInfo.languages}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;