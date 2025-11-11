import React from 'react';
import { contactInfo } from '../../data/contact';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappLink = `https://wa.me/${contactInfo.phoneLink}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

  const menuLinks = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#formulario' }
  ];

  return (
    <footer id="footer" role="contentinfo">
      <div className="interface">
        <section className="top-footer">
          <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
            <button aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </button>
          </a>
          <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
            <button aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </button>
          </a>
          <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer">
            <button aria-label="GitHub">
              <i className="bi bi-github"></i>
            </button>
          </a>
          <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
            <button aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </button>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button aria-label="WhatsApp">
              <i className="bi bi-whatsapp"></i>
            </button>
          </a>
        </section>

        <section className="middle-footer">
          {menuLinks.map((link, index) => (
            <a key={index} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </section>

        <section className="bottom-footer">
          <p>&copy; {currentYear} Jonas Fernandes Dev. Todos os direitos reservados.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;