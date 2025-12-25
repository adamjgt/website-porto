import profile from '../data/profile.json';

export const Skills = {
  render: () => {
    return `
      <section id="skills" style="padding: 100px 0;">
        <div class="container">
          <div class="section-header scroll-animate">
            <h2 class="section-title">Technical <span class="gradient-text">Skills</span></h2>
            <p class="section-subtitle">Technologies I use to build robust systems.</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
            ${profile.skills.map((category, index) => `
              <div class="glass-card scroll-animate-scale" data-delay="${index + 1}">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-primary);">${category.category}</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  ${category.items.map(item => `
                    <span style="font-size: 0.9rem; padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; color: var(--text-secondary);">
                      ${item}
                    </span>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  },
  afterRender: () => { }
};
