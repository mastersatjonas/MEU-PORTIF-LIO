import React from 'react';
import { contactInfo } from '../../data/contact';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose, menuItems, onMenuItemClick }) => {
  const handleLinkClick = () => {
    onMenuItemClick();
  };

  return (
    <>
      <section 
        className={`menu-mobile ${isOpen ? 'active' : ''}`}
        role="navigation" 
        aria-label="Menu mobile"
      >
        <div className="menu-mobile-header">
          <div className="menu-mobile-logo">
            <img src="/img/Logo.png" alt="Logo" />
            <span>Menu</span>
          </div>
          <div 
            className="btn-fechar"
            onClick={onClose}
            role="button" 
            tabIndex="0" 
            aria-label="Fechar menu"
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </div>
        </div>

        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="menu-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-mobile-footer">
          <p>Conecte-se comigo</p>
          <div className="menu-mobile-social">
            <a 
              href={contactInfo.social.instagram}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a 
              href={contactInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a 
              href={contactInfo.social.github}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </section>

      <div 
        className={`overlay-menu ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default MobileMenu;