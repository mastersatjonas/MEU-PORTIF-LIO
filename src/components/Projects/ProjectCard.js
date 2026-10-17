import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const getTechnologyIcon = (tech) => {
    const icons = {
      'HTML5': 'bi-filetype-html',
      'CSS3': 'bi-filetype-css',
      'JavaScript': 'bi-filetype-js',
      'Bootstrap': 'bi-bootstrap',
      // Novos ícones (Bootstrap Icons) — para projetos com backend
      'React': 'bi-filetype-jsx',
      'Node.js': 'bi-server',
      'Express': 'bi-server',
      'PostgreSQL': 'bi-database',
      'API REST': 'bi-braces',
      'Netlify': 'bi-cloud',
      'Render': 'bi-cloud'
    };
    return icons[tech] || 'bi-code';
  };

  // O botão "Ver Código" só aparece se o projeto tiver link de código
  // (links vazios ou "#" escondem o botão: útil para projetos de clientes
  // com repositório privado)
  const temCodigo = Boolean(
    project.links && project.links.code && project.links.code !== '#'
  );

  return (
    <article 
      className="instru-box" 
      data-category={project.category} 
      role="article" 
      aria-label={`Projeto ${project.title}`}
    >
      <div className="img-instru-box">
        <img 
          src={project.image}
          alt={`Tela do Projeto ${project.title}`}
          width="400" 
          height="200" 
        />
        <div className="overlay-projeto" aria-hidden="true">
          <div className="projeto-links">
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-ver-projeto"
              tabIndex="-1"
            >
              <i className="bi bi-eye"></i> Ver Projeto
            </a>
            {temCodigo && (
              <a 
                href={project.links.code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ver-codigo"
                tabIndex="-1"
              >
                <i className="bi bi-code-slash"></i> Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="txt-instru-box">
        <h4>Projeto <span>{project.title}</span></h4>
        <p className="descricao-projeto">{project.description}</p>
        <div className="tecnologias-usadas" aria-label="Tecnologias usadas">
          {project.technologies.map((tech, index) => (
            <i 
              key={index}
              className={`bi ${getTechnologyIcon(tech)}`}
              aria-hidden="true" 
              title={tech}
            ></i>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
