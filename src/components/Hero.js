import profile from '../data/profile.json';

export const Hero = {
  render: () => {
    return `
      <section class="hero" style="min-height: 100vh; display: flex; align-items: center; padding-top: 80px; position: relative; overflow: hidden;">
        <!-- Background Elements -->
        <div style="position: absolute; top: 20%; right: 10%; width: 400px; height: 400px; background: var(--accent-primary); filter: blur(150px); opacity: 0.15; border-radius: 50%;"></div>
        <div style="position: absolute; bottom: 10%; left: 5%; width: 300px; height: 300px; background: var(--accent-secondary); filter: blur(150px); opacity: 0.15; border-radius: 50%;"></div>
        
        <div class="container" style="position: relative; z-index: 1;">
          <div style="max-width: 800px;">
            <p class="tag scroll-animate" style="margin-bottom: 1.5rem;">${profile.title}</p>
            <h1 class="scroll-animate" data-delay="1" style="font-size: clamp(3rem, 5vw, 4.5rem); line-height: 1.1; margin-bottom: 1.5rem; font-weight: 800;">
              Backend Developer <br />
              <span class="gradient-text">& System Architect</span>
            </h1>
            <p class="scroll-animate" data-delay="2" style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2.5rem; max-width: 600px;">
              ${profile.bio}
            </p>
            <div class="scroll-animate" data-delay="3" style="display: flex; gap: 1rem;">
              <a href="#work" class="btn btn-primary">
                Explore Work
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="${profile.social.email}" class="btn btn-secondary">
                Contact Me
              </a>
            </div>
            
            <!-- Code Snippet Decoration -->
            <div class="glass-card" style="position: absolute; top: 50%; right: -150px; transform: translateY(-50%); width: 400px; padding: 1.5rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary); opacity: 0.6; z-index: -1; pointer-events: none; display: none;">
              <div style="display: flex; gap: 6px; margin-bottom: 1rem;">
                <div style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: #eab308;"></div>
                <div style="width: 10px; height: 10px; border-radius: 50%; background: #22c55e;"></div>
              </div>
              <pre><code style="color: #60a5fa;">class</code> <code style="color: #fca5a5;">SystemArchitecture</code>:
    <code style="color: #60a5fa;">def</code> <code style="color: #fde047;">__init__</code>(self):
        self.api = <code style="color: #86efac;">"FastAPI"</code>
        self.queue = <code style="color: #86efac;">"Redis"</code>
        self.db = <code style="color: #86efac;">"PostgreSQL"</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  afterRender: () => { }
};
