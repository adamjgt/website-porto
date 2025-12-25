import projects from '../data/projects.json';

export const ProjectGallery = {
  render: () => {
    return `
      <section id="work" style="padding: 100px 0;">
        <div class="container">
          <div class="section-header scroll-animate">
            <h2 class="section-title">Featured <span class="gradient-text">Work</span></h2>
            <p class="section-subtitle">A selection of my best engineering projects.</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
            ${projects.map((project, index) => `
              <div class="glass-card scroll-animate" data-delay="${index + 1}" style="display: flex; flex-direction: column; height: 100%;">
                <div style="margin-bottom: 1rem; height: 200px; background: rgba(0,0,0,0.3); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                   <img src="${project.architectureDiagram}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: opacity 0.3s, transform 0.3s;" onmouseover="this.style.opacity='1'; this.style.transform='scale(1.05)'" onmouseout="this.style.opacity='0.8'; this.style.transform='scale(1)'" />
                </div>
                
                <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">${project.title}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem; flex-grow: 1;">${project.shortDescription}</p>
                
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                  ${project.techStack.slice(0, 3).map(tech => `
                    <span class="tag">${tech}</span>
                  `).join('')}
                </div>
                
                <a href="#project/${project.id}" class="btn btn-secondary" style="width: 100%; justify-content: space-between;">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },
  afterRender: () => { }
};
