export const Footer = {
    render: () => {
        return `
      <footer style="padding: 2rem 0; text-align: center; color: var(--text-secondary); border-top: 1px solid var(--glass-border); margin-top: 4rem;">
        <div class="container">
          <p>&copy; ${new Date().getFullYear()} BackendDev. Built with Vanilla JS & Vite.</p>
        </div>
      </footer>
    `;
    },
    afterRender: () => { }
};
