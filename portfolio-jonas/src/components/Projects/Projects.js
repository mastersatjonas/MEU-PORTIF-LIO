import React, { useState, useMemo } from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from './ProjectCard';
import { projectsData, categories } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  // Usa useMemo para otimizar a filtragem
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'todos') {
      return projectsData;
    }
    return projectsData.filter(project => 
      project.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter]);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <section className="projetos" id="projetos" role="region" aria-label="Projetos">
      <div className="interface">
        <SectionTitle highlight="Projetos">Meus</SectionTitle>

        <div className="filtro-projetos" data-aos="fade-up" role="list" aria-label="Filtro de projetos">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`filtro-btn ${activeFilter === category.id ? 'ativo' : ''}`}
              data-filter={category.id}
              type="button" 
              role="listitem"
              aria-pressed={activeFilter === category.id}
              onClick={() => handleFilterClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="instrucoes" data-aos="fade-up">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;