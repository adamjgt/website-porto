import './styles/global.css';
import './styles/components.css';

import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Skills } from './components/Skills.js';
import { ProjectGallery } from './components/ProjectGallery.js';
import { ProjectDetail } from './components/ProjectDetail.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

const app = document.querySelector('#app');

const renderHome = () => {
  app.innerHTML = `
    ${Navbar.render()}
    <main>
      ${Hero.render()}
      ${Skills.render()}
      ${ProjectGallery.render()}
      ${Contact.render()}
    </main>
    ${Footer.render()}
  `;

  Navbar.afterRender();
  Hero.afterRender();
  Skills.afterRender();
  ProjectGallery.afterRender();
  Contact.afterRender();
  Footer.afterRender();
};

const renderProject = (id) => {
  app.innerHTML = `
    ${Navbar.render()}
    <main>
      ${ProjectDetail.render({ id })}
    </main>
    ${Footer.render()}
  `;

  Navbar.afterRender();
  ProjectDetail.afterRender({ id });
  Footer.afterRender();
};

const router = () => {
  const hash = window.location.hash;

  if (hash.startsWith('#project/')) {
    const id = hash.split('/')[1];
    renderProject(id);
    window.scrollTo(0, 0);
  } else {
    // Only re-render if we are not already on home view, OR if it's the first load
    // Simple check: if app is empty, render. If app has project-detail, render home.
    // But hash links on Home (like #work) trigger router(); we shouldn't re-render entire home then.

    const isProjectView = document.querySelector('.hero') === null; // If hero is missing, we are likely not on home (or app is empty)

    if (isProjectView || app.innerHTML.trim() === '') {
      renderHome();
      // Handle scrolling to anchor if present
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView();
        }, 100);
      }
    }
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Scroll Animation Observer
const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');

  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
};

// Re-run animations after each render
const originalRenderHome = renderHome;
const renderHomeWithAnimations = () => {
  originalRenderHome();
  setTimeout(initScrollAnimations, 100);
};

const originalRenderProject = renderProject;
const renderProjectWithAnimations = (id) => {
  originalRenderProject(id);
  setTimeout(initScrollAnimations, 100);
};

// Override router to use animated renders
const routerWithAnimations = () => {
  const hash = window.location.hash;

  if (hash.startsWith('#project/')) {
    const id = hash.split('/')[1];
    renderProjectWithAnimations(id);
    window.scrollTo(0, 0);
  } else {
    const isProjectView = document.querySelector('.hero') === null;

    if (isProjectView || app.innerHTML.trim() === '') {
      renderHomeWithAnimations();
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }
};

window.removeEventListener('hashchange', router);
window.removeEventListener('load', router);
window.addEventListener('hashchange', routerWithAnimations);
window.addEventListener('load', routerWithAnimations);
