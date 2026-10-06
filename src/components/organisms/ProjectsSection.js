import { useState } from 'react';
import ProjectCard from '../molecules/ProjectCard';
import projectsData from '../../data/projects.json';

function ProjectsSection() {

  const [projects] = useState(projectsData);
  
  return (
    <section id="proyectos" className="py-5">
      <h2 className="mb-4">Mis Proyectos</h2>

      <div className="row g-4">

        {projects.map((project) => (
          <div
            className='col-12 col-md-6 col-lg-4'
            key={project.id}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;