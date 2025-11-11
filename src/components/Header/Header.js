import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import { contactInfo } from '../../data/contact';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#', active: true },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#formulario' }  // ← MUDANÇA AQUI
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header id="header" role="banner">
        <div className="interface">
          <section className="logo">
            <img 
              className="logo-branca" 
              src="/img/Logo.png" 
              alt="Logo Jonas Fernandes Developer" 
              width="60"
              height="60" 
            />
            <div className="logo-text">
              <span className="nome">Jonas Fernandes</span>
              <span className="subtitulo">Full Stack Developer</span>
            </div>
          </section>

          <section className="menu-desktop" role="navigation" aria-label="Menu principal">
            <nav>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className={item.active ? 'active' : ''}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <div className="header-actions">
            <section className="btn-contato">
              <a 
                href={`https://wa.me/${contactInfo.phoneLink}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button type="button" aria-label="Contato via WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                  <span>Contato</span>
                </button>
              </a>
            </section>

            <div 
              className="btn-abrir-menu" 
              onClick={handleMobileMenuToggle}
              role="button" 
              tabIndex="0" 
              aria-label="Abrir menu"
            >
              <i className="bi bi-list" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuToggle}
        menuItems={menuItems}
        onMenuItemClick={handleMenuLinkClick}
      />
    </>
  );
};

export default Header;