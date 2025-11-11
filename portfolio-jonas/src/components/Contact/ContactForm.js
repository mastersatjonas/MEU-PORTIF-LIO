import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { contactInfo } from '../../data/contact';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar lógica de envio (EmailJS, API, etc)
    console.log('Formulário enviado:', formData);
    
    // Exemplo: enviar via WhatsApp
    const message = `
      Nome: ${formData.nome}
      Email: ${formData.email}
      Telefone: ${formData.telefone}
      Assunto: ${formData.assunto}
      Mensagem: ${formData.mensagem}
    `;
    const whatsappLink = `https://wa.me/${contactInfo.phoneLink}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <section className="formulario-contato" id="formulario" role="region" aria-label="Formulário de contato">
      <div className="interface">
        <SectionTitle highlight="Comigo">Fale</SectionTitle>

        <div className="contato-container">
          <div className="contato-info" data-aos="fade-right">
            <h3>Informações de Contato</h3>
            <p>Preencha o formulário ao lado e entrarei em contato o mais breve possível.</p>

            <div className="info-item">
              <i className="bi bi-telephone"></i>
              <div>
                <h4>Telefone</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bi bi-envelope"></i>
              <div>
                <h4>E-mail</h4>
                <p>{contactInfo.email}</p>
              </div>
            </div>

            <div className="info-item">
              <i className="bi bi-geo-alt"></i>
              <div>
                <h4>Localização</h4>
                <p>{contactInfo.location}</p>
              </div>
            </div>

            <div className="social-media">
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="contato-form" data-aos="fade-left">
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo" 
                  required
                  aria-required="true" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com" 
                  required
                  aria-required="true" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="assunto">Assunto</label>
                <input 
                  type="text" 
                  id="assunto" 
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  required 
                  aria-required="true" 
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem..." 
                  required
                  aria-required="true"
                ></textarea>
              </div>

              <button type="submit" className="btn-enviar" aria-label="Enviar mensagem">
                Enviar Mensagem <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;