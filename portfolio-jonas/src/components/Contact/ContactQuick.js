import React from 'react';
import { contactInfo } from '../../data/contact';
import './ContactQuick.css';

const ContactQuick = () => {
  const whatsappLink = `https://wa.me/${contactInfo.phoneLink}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
  const emailLink = `mailto:${contactInfo.email}`;
  const phoneLink = `tel:${contactInfo.phoneLink}`;

  return (
    <section className="contato" role="region" aria-label="Contato rápido">
      <div className="interface">
        <article className="txt-contato" data-aos="fade-up">
          <h3><span>Entre em contato</span> agora mesmo.</h3>
          <p>Tire suas dúvidas e solicite um orçamento sem compromisso</p>
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
        </article>
      </div>
    </section>
  );
};

export default ContactQuick;