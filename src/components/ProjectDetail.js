import projects from '../data/projects.json';

export const ProjectDetail = {
    render: (params) => {
        const projectId = params.id;
        const project = projects.find(p => p.id === projectId);

        if (!project) return `<div class="container" style="padding-top: 100px;"><h1>Project not found</h1><a href="#" class="btn btn-secondary">Go Back</a></div>`;

        return `
      <div style="padding-top: 100px; padding-bottom: 100px;">
        <div class="container">
          <a href="#" class="btn btn-secondary" style="display: inline-flex; margin-bottom: 2rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
            Back to Home
          </a>
          
          <h1 style="font-size: 3rem; margin-bottom: 1rem; background: var(--accent-gradient); -webkit-background-clip: text; color: transparent;">${project.title}</h1>
          
          <div style="display: flex; gap: 0.5rem; margin-bottom: 2rem;">
            ${project.techStack.map(tech => `<span class="tag">${tech}</span>`).join('')}
          </div>
          
          <!-- Overview -->
          <div class="glass-card" style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 1rem;">Project Overview</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8;">${project.fullDescription}</p>
          </div>
          
          <!-- Key Highlights -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
             <div class="glass-card">
                <h3 style="margin-bottom: 1rem;">Key Highlights</h3>
                <ul style="list-style: none;">
                  ${project.highlights.map(h => `
                    <li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
                      <span style="position: absolute; left: 0; color: var(--accent-primary);">✔</span>
                      ${h}
                    </li>
                  `).join('')}
                </ul>
             </div>
             
             <!-- Links -->
             <div class="glass-card">
                <h3 style="margin-bottom: 1rem;">Project Links</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  <a href="${project.links.github}" class="btn btn-secondary">GitHub Repository</a>
                  <a href="${project.links.demo}" class="btn btn-primary">Live Demo</a>
                </div>
             </div>
          </div>
          
          <!-- Architecture (Placeholder or Diagram) -->
          <div class="glass-card" style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 1rem;">System Architecture</h2>
             <!-- In a real app, this would be an image. We'll use a CSS diagram for wow factor or just text placeholder if no image -->
             <div style="padding: 2rem; background: rgba(0,0,0,0.3); border-radius: var(--radius-md); text-align: center;">
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">Microservices Architecture</p>
                <!-- Simple CSS Flowchart Representation -->
                <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                   <div style="padding: 1rem; border: 1px solid var(--accent-primary); border-radius: 8px;">Client</div>
                   <div>→</div>
                   <div style="padding: 1rem; border: 1px solid var(--accent-secondary); border-radius: 8px;">API Gateway</div>
                   <div>→</div>
                   <div style="padding: 1rem; border: 1px dashed var(--text-secondary); border-radius: 8px;">Worker (Redis)</div>
                </div>
             </div>
          </div>
          
          <!-- Code Snippet -->
          <div class="glass-card">
            <h2 style="margin-bottom: 1rem;">Core Implementation</h2>
            <div style="background: #0d1117; padding: 1.5rem; border-radius: var(--radius-md); overflow-x: auto;">
              <pre><code style="font-family: var(--font-mono); font-size: 0.9rem; color: #c9d1d9;">${project.codeSnippet.code}</code></pre>
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">Language: <span style="color: var(--accent-primary);">${project.codeSnippet.language}</span></p>
          </div>
          
        </div>
      </div>
    `;
    },
    afterRender: () => {
        window.scrollTo(0, 0);
    }
};
