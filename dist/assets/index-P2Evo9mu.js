(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const s={render:()=>`
      <nav class="navbar" style="position: fixed; top: 0; width: 100%; z-index: 1000; padding: 1.5rem 0; background: var(--glass-bg); backdrop-filter: blur(10px); transition: background var(--transition-theme);">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
          <a href="#" class="logo" style="font-weight: 700; font-size: 1.5rem; color: var(--text-primary);">
            &lt;Dev<span style="color: var(--accent-primary)">Porto</span>/&gt;
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
              ${(localStorage.getItem("theme")||"dark")==="dark"?'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>':'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'}
            </button>
          </div>
        </div>
      </nav>
    `,afterRender:()=>{const e=document.getElementById("theme-toggle");if(!e)return;const r=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",r),e.addEventListener("click",()=>{const o=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",o),localStorage.setItem("theme",o);const i='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',a='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';e.innerHTML=o==="dark"?i:a})}},f="Backend Developer & System Architect",b="Specializing in building scalable, high-performance APIs and distributed systems. Expert in turning complex data problems into efficient backend solutions.",x={github:"https://github.com/adamjgt",linkedin:"https://linkedin.com/in/adamjgt",email:"adamjagad2@gmail.com"},w=[{category:"Languages",items:["Python","SQL","JavaScript","Dart"]},{category:"Frameworks",items:["FastAPI","Flask","Express"]},{category:"Infrastructure",items:["Docker","Nginx"]},{category:"Databases",items:["PostgreSQL","Redis","MongoDB"]},{category:"Tools",items:["Git","CI/CD"]}],n={title:f,bio:b,social:x,skills:w},k={render:()=>`
      <section class="hero" style="min-height: 100vh; display: flex; align-items: center; padding-top: 80px; position: relative; overflow: hidden;">
        <!-- Background Elements -->
        <div style="position: absolute; top: 20%; right: 10%; width: 400px; height: 400px; background: var(--accent-primary); filter: blur(150px); opacity: 0.15; border-radius: 50%;"></div>
        <div style="position: absolute; bottom: 10%; left: 5%; width: 300px; height: 300px; background: var(--accent-secondary); filter: blur(150px); opacity: 0.15; border-radius: 50%;"></div>
        
        <div class="container" style="position: relative; z-index: 1;">
          <div style="max-width: 800px;">
            <p class="tag scroll-animate" style="margin-bottom: 1.5rem;">${n.title}</p>
            <h1 class="scroll-animate" data-delay="1" style="font-size: clamp(3rem, 5vw, 4.5rem); line-height: 1.1; margin-bottom: 1.5rem; font-weight: 800;">
              Backend Developer <br />
              <span class="gradient-text">& System Architect</span>
            </h1>
            <p class="scroll-animate" data-delay="2" style="font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 2.5rem; max-width: 600px;">
              ${n.bio}
            </p>
            <div class="scroll-animate" data-delay="3" style="display: flex; gap: 1rem;">
              <a href="#work" class="btn btn-primary">
                Explore Work
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="${n.social.email}" class="btn btn-secondary">
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
    `,afterRender:()=>{}},j={render:()=>`
      <section id="skills" style="padding: 100px 0;">
        <div class="container">
          <div class="section-header scroll-animate">
            <h2 class="section-title">Technical <span class="gradient-text">Skills</span></h2>
            <p class="section-subtitle">Technologies I use to build robust systems.</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
            ${n.skills.map((e,r)=>`
              <div class="glass-card scroll-animate-scale" data-delay="${r+1}">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-primary);">${e.category}</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  ${e.items.map(t=>`
                    <span style="font-size: 0.9rem; padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; color: var(--text-secondary);">
                      ${t}
                    </span>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `,afterRender:()=>{}},p=[{id:"ocr-api",title:"OCR API Service",shortDescription:"High-throughput Optical Character Recognition service designed for extracting text from images at scale.",fullDescription:"A robust, production-ready OCR API built with Python and FastAPI. It utilizes a Redis-based job queue to handle high-volume concurrent requests efficiently. The system is containerized with Docker for consistent deployment and scalability.",techStack:["Python","FastAPI","Redis","Docker","Tesseract"],highlights:["Asynchronous job processing with Redis queue","Scalable architecture supporting horizontal scaling","Comprehensive API documentation with Swagger UI","99.9% uptime with robust error handling"],architectureDiagram:"images/ocr-architecture.png",links:{github:"https://github.com/adamjgt/ocr-API",demo:"#",docs:"#"},codeSnippet:{language:"python",code:`@app.post('/ocr/submit')
async def submit_job(file: UploadFile, background_tasks: BackgroundTasks):
    job_id = str(uuid.uuid4())
    image_bytes = await file.read()
    
    # Enqueue job to Redis
    await redis_client.lpush('ocr_queue', json.dumps({'id': job_id, 'data': base64.b64encode(image_bytes).decode()}))
    
    return {'job_id': job_id, 'status': 'queued'}`}}],S={render:()=>`
      <section id="work" style="padding: 100px 0;">
        <div class="container">
          <div class="section-header scroll-animate">
            <h2 class="section-title">Featured <span class="gradient-text">Work</span></h2>
            <p class="section-subtitle">A selection of my best engineering projects.</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
            ${p.map((e,r)=>`
              <div class="glass-card scroll-animate" data-delay="${r+1}" style="display: flex; flex-direction: column; height: 100%;">
                <div style="margin-bottom: 1rem; height: 200px; background: rgba(0,0,0,0.3); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                   <img src="${e.architectureDiagram}" alt="${e.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: opacity 0.3s, transform 0.3s;" onmouseover="this.style.opacity='1'; this.style.transform='scale(1.05)'" onmouseout="this.style.opacity='0.8'; this.style.transform='scale(1)'" />
                </div>
                
                <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">${e.title}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem; flex-grow: 1;">${e.shortDescription}</p>
                
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                  ${e.techStack.slice(0,3).map(t=>`
                    <span class="tag">${t}</span>
                  `).join("")}
                </div>
                
                <a href="#project/${e.id}" class="btn btn-secondary" style="width: 100%; justify-content: space-between;">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `,afterRender:()=>{}},m={render:e=>{const r=e.id,t=p.find(o=>o.id===r);return t?`
      <div style="padding-top: 100px; padding-bottom: 100px;">
        <div class="container">
          <a href="#" class="btn btn-secondary" style="display: inline-flex; margin-bottom: 2rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
            Back to Home
          </a>
          
          <h1 style="font-size: 3rem; margin-bottom: 1rem; background: var(--accent-gradient); -webkit-background-clip: text; color: transparent;">${t.title}</h1>
          
          <div style="display: flex; gap: 0.5rem; margin-bottom: 2rem;">
            ${t.techStack.map(o=>`<span class="tag">${o}</span>`).join("")}
          </div>
          
          <!-- Overview -->
          <div class="glass-card" style="margin-bottom: 2rem;">
            <h2 style="margin-bottom: 1rem;">Project Overview</h2>
            <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.8;">${t.fullDescription}</p>
          </div>
          
          <!-- Key Highlights -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
             <div class="glass-card">
                <h3 style="margin-bottom: 1rem;">Key Highlights</h3>
                <ul style="list-style: none;">
                  ${t.highlights.map(o=>`
                    <li style="margin-bottom: 0.75rem; padding-left: 1.5rem; position: relative;">
                      <span style="position: absolute; left: 0; color: var(--accent-primary);">✔</span>
                      ${o}
                    </li>
                  `).join("")}
                </ul>
             </div>
             
             <!-- Links -->
             <div class="glass-card">
                <h3 style="margin-bottom: 1rem;">Project Links</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                  <a href="${t.links.github}" class="btn btn-secondary">GitHub Repository</a>
                  <a href="${t.links.demo}" class="btn btn-primary">Live Demo</a>
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
              <pre><code style="font-family: var(--font-mono); font-size: 0.9rem; color: #c9d1d9;">${t.codeSnippet.code}</code></pre>
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">Language: <span style="color: var(--accent-primary);">${t.codeSnippet.language}</span></p>
          </div>
          
        </div>
      </div>
    `:'<div class="container" style="padding-top: 100px;"><h1>Project not found</h1><a href="#" class="btn btn-secondary">Go Back</a></div>'},afterRender:()=>{window.scrollTo(0,0)}},$={render:()=>`
      <section id="contact" style="padding: 100px 0;">
        <div class="container">
          <div class="glass-card scroll-animate-scale" style="max-width: 600px; margin: 0 auto; text-align: center;">
            <h2 class="section-title">Let's <span class="gradient-text">Connect</span></h2>
            <p style="margin-bottom: 2rem; color: var(--text-secondary);">Interested in building something amazing together? Reach out!</p>
            
            <a href="${n.social.email}" class="btn btn-primary" style="margin-bottom: 2rem;">
              Send me an Email
            </a>
            
            <div style="display: flex; justify-content: center; gap: 1.5rem;">
               <a href="${n.social.github}" target="_blank" style="color: var(--text-secondary); hover: var(--text-primary);">GitHub</a>
               <a href="${n.social.linkedin}" target="_blank" style="color: var(--text-secondary); hover: var(--text-primary);">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    `,afterRender:()=>{}},g={render:()=>`
      <footer style="padding: 2rem 0; text-align: center; color: var(--text-secondary); border-top: 1px solid var(--glass-border); margin-top: 4rem;">
        <div class="container">
          <p>&copy; ${new Date().getFullYear()} BackendDev. Built with Vanilla JS & Vite.</p>
        </div>
      </footer>
    `,afterRender:()=>{}},l=document.querySelector("#app"),h=()=>{l.innerHTML=`
    ${s.render()}
    <main>
      ${k.render()}
      ${j.render()}
      ${S.render()}
      ${$.render()}
    </main>
    ${g.render()}
  `,s.afterRender()},y=e=>{l.innerHTML=`
    ${s.render()}
    <main>
      ${m.render({id:e})}
    </main>
    ${g.render()}
  `,s.afterRender(),m.afterRender({id:e})},d=()=>{const e=window.location.hash;if(e.startsWith("#project/")){const r=e.split("/")[1];y(r),window.scrollTo(0,0)}else(document.querySelector(".hero")===null||l.innerHTML.trim()==="")&&(h(),e&&setTimeout(()=>{const t=document.querySelector(e);t&&t.scrollIntoView()},100))};window.addEventListener("hashchange",d);window.addEventListener("load",d);const u=()=>{const e=document.querySelectorAll(".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale");if(e.length===0)return;const r=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("animate-in"),r.unobserve(o.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach(t=>r.observe(t))},P=h,I=()=>{P(),setTimeout(u,100)},A=y,L=e=>{A(e),setTimeout(u,100)},v=()=>{const e=window.location.hash;if(e.startsWith("#project/")){const r=e.split("/")[1];L(r),window.scrollTo(0,0)}else(document.querySelector(".hero")===null||l.innerHTML.trim()==="")&&(I(),e&&setTimeout(()=>{const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})},100))};window.removeEventListener("hashchange",d);window.removeEventListener("load",d);window.addEventListener("hashchange",v);window.addEventListener("load",v);
