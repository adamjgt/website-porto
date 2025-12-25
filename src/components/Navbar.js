export const Navbar = {
  render: () => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';

    return `
      <nav class="navbar" style="position: fixed; top: 0; width: 100%; z-index: 1000; padding: 1.5rem 0; background: var(--glass-bg); backdrop-filter: blur(10px); transition: background var(--transition-theme);">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
          <a href="#" class="logo" style="font-weight: 700; font-size: 1.5rem; color: var(--text-primary);">
            &lt;Poa<span style="color: var(--accent-primary)">Porto</span>/&gt;
          </a>
          <div style="display: flex; align-items: center; gap: 2rem;">
            <ul class="nav-links" style="display: flex; gap: 2rem; list-style: none; align-items: center;">
              <li><a href="#work" style="color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-secondary)'">Work</a></li>
              <li><a href="#skills" style="color: var(--text-secondary); transition: color 0.3s;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-secondary)'">Skills</a></li>
              <li><a href="#contact" class="btn btn-secondary" style="padding: 0.5rem 1.25rem; font-size: 0.9rem;">Contact</a></li>
            </ul>
            
            <!-- Theme Toggle Button -->
            <button id="theme-toggle" aria-label="Toggle theme" style="
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: var(--glass-bg);
              border: 1px solid var(--glass-border);
              color: var(--text-primary);
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all var(--transition-fast);
            " onmouseover="this.style.borderColor='var(--accent-primary)'" onmouseout="this.style.borderColor='var(--glass-border)'">
              ${isDark ?
        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>` :
        `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      }
            </button>
          </div>
        </div>
      </nav>
    `;
  },
  afterRender: () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Update icon
      const sunIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      const moonIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

      themeToggle.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    });
  }
};
