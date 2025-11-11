import React from 'react';
import { contactInfo } from '../../data/contact';
import './ContactOptions.css';

const ContactOptions = () => {
  const whatsappLink = `https://wa.me/${contactInfo.phoneLink}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
  const emailLink = `mailto:${contactInfo.email}`;
  const phoneLink = `tel:${contactInfo.phoneLink}`;

  return (
    <section className="contato" role="region" aria-label="Opções de contato adicionais">
      <div className="interface">
        <article className="txt-contato" data-aos="fade-up">
          <h3>
            Opções de contato <span>para falar comigo</span>
          </h3>
          <p>e obter informações agora mesmo.</p>
        </article>

        <article className="icons-contato" data-aos="fade-up" data-aos-delay="200">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button type="button" aria-label="WhatsApp">
              <i className="bi bi-whatsapp"></i>
              <p>WhatsApp</p>
            </button>
          </a>
          <a href={emailLink}>
            <button type="button" aria-label="Enviar Email">
              <i className="bi bi-envelope-at-fill"></i>
              <p>Enviar e-mail</p>
            </button>
          </a>
          <a href={phoneLink}>
            <button type="button" aria-label="Ligar">
              <i className="bi bi-telephone-fill"></i>
              <p>Ligar agora</p>
            </button>
          </a>
          <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
            <button type="button" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
              <p>Instagram</p>
            </button>
          </a>
          <a href="#formulario">
            <button type="button" aria-label="Formulário">
              <i className="bi bi-ui-checks"></i>
              <p>Formulário</p>
            </button>
          </a>
        </article>
      </div>
    </section>
  );
};

export default ContactOptions;