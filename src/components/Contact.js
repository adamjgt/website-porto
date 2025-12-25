import profile from '../data/profile.json';

export const Contact = {
  render: () => {
    return `
      <section id="contact" style="padding: 100px 0;">
        <div class="container">
          <div class="glass-card scroll-animate-scale" style="max-width: 600px; margin: 0 auto; text-align: center;">
            <h2 class="section-title">Let's <span class="gradient-text">Connect</span></h2>
            <p style="margin-bottom: 2rem; color: var(--text-secondary);">Interested in building something amazing together? Reach out!</p>
            
            <a href="${profile.social.email}" class="btn btn-primary" style="margin-bottom: 2rem;">
              Send me an Email
            </a>
            
            <div style="display: flex; justify-content: center; gap: 1.5rem;">
               <a href="${profile.social.github}" target="_blank" style="color: var(--text-secondary); hover: var(--text-primary);">GitHub</a>
               <a href="${profile.social.linkedin}" target="_blank" style="color: var(--text-secondary); hover: var(--text-primary);">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  afterRender: () => { }
};
