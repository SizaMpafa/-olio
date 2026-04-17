import { useEffect, useRef } from 'react';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const reveals = sectionRef.current.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="section-header reveal">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">Projects that define the craft</p>
      </div>
      <div className="projects-grid">
        <div className="project-card reveal">
          <div className="project-visual">
            <div className="project-placeholder">🎭</div>
          </div>
          <div className="project-info">
            <div className="project-context">Le Wagon Cape Town • Group of 2</div>
            <h3 className="project-name">MoodMosaic</h3>
            <p className="project-desc">AI-powered mood curation platform. Spotify integration, sentiment analysis, visual storytelling — all personalised to how you feel right now.</p>
            <div className="project-stack">
              <span className="stack-tag">Ruby on Rails</span>
              <span className="stack-tag">PostgreSQL</span>
              <span className="stack-tag">Spotify API</span>
              <span className="stack-tag">OpenAI API</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Genius574/moodmosaic" target="_blank" className="btn-small btn-outline" rel="noreferrer">GitHub</a>
            </div>
            <div className="tap-hint">👆 Tap for details</div>
          </div>
        </div>
        <div className="project-card reveal">
          <div className="project-visual">
            <div className="project-placeholder">🎪</div>
          </div>
          <div className="project-info">
            <div className="project-context">Le Wagon • AirBnB Project Week</div>
            <h3 className="project-name">StageIt</h3>
            <p className="project-desc">Full-service platform for event organisers — venues, suppliers, talent, logistics — all in one place.</p>
            <div className="project-stack">
              <span className="stack-tag">Ruby on Rails</span>
              <span className="stack-tag">PostgreSQL</span>
              <span className="stack-tag">StimulusJS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Genius574/STAGEIT" target="_blank" className="btn-small btn-outline" rel="noreferrer">GitHub</a>
            </div>
            <div className="tap-hint">👆 Tap for details</div>
          </div>
        </div>
        <div className="project-card reveal">
          <div className="project-visual">
            <div className="project-placeholder">🎓</div>
          </div>
          <div className="project-info">
            <div className="project-context">UCT GSB • Real Client ★</div>
            <h3 className="project-name">Ukhanyo Foundation</h3>
            <p className="project-desc">Real application for real client supporting Grade 12 learners who need a second chance. Built with purpose, delivered with impact.</p>
            <div className="project-stack">
              <span className="stack-tag">Angular</span>
              <span className="stack-tag">Vercel</span>
              <span className="stack-tag">Ayoba</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/D3konR3kon/Ukhanyo_SMS_Client-Student" target="_blank" className="btn-small btn-outline" rel="noreferrer">GitHub</a>
            </div>
            <div className="tap-hint">👆 Tap for details</div>
          </div>
        </div>
        <div className="project-card reveal">
          <div className="project-visual">
            <div className="project-placeholder">📚</div>
          </div>
          <div className="project-info">
            <div className="project-context">Personal Initiative • Solo</div>
            <h3 className="project-name">M-Tutorials</h3>
            <p className="project-desc">Platform supporting Matric students struggling with Mathematics. Nobody assigned this. Saw a gap, built something.</p>
            <div className="project-stack">
              <span className="stack-tag">HTML</span>
              <span className="stack-tag">CSS</span>
              <span className="stack-tag">JavaScript</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/SizaMpafa/M-Tutorials" target="_blank" className="btn-small btn-outline" rel="noreferrer">GitHub</a>
            </div>
            <div className="tap-hint">👆 Tap for details</div>
          </div>
        </div>
        <div className="project-card reveal">
          <div className="project-visual">
            <div className="project-placeholder">🛒</div>
          </div>
          <div className="project-info">
            <div className="project-context">Life Choices • Group Project</div>
            <h3 className="project-name">Impulsive Shopping</h3>
            <p className="project-desc">Full-stack e-commerce application built across three progressive iterations — frontend, full-stack, production-ready.</p>
            <div className="project-stack">
              <span className="stack-tag">Vue.js</span>
              <span className="stack-tag">Node.js</span>
              <span className="stack-tag">MySQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/SizaMpafa/impulsive_shopping_b_f" target="_blank" className="btn-small btn-outline" rel="noreferrer">GitHub</a>
            </div>
            <div className="tap-hint">👆 Tap for details</div>
          </div>
        </div>
        <div className="project-card reveal" style={{borderColor: 'rgba(255, 0, 51, 0.3)'}}>
          <div className="project-visual" style={{background: 'linear-gradient(135deg, #1a0510, #0F051D)'}}>
            <div className="project-placeholder" style={{color: 'var(--red)'}}>🎤</div>
          </div>
          <div className="project-info">
            <div className="project-context" style={{color: 'var(--red)'}}>Personal • In Progress 🔴</div>
            <h3 className="project-name" style={{color: 'var(--red)'}}>VIP VIBEZ</h3>
            <p className="project-desc">Platform for musicians who are not famous yet but are already serious. Closing the gap between art and monetization.</p>
            <div className="project-stack">
              <span className="stack-tag" style={{background: 'rgba(255, 0, 51, 0.2)', borderColor: 'rgba(255, 0, 51, 0.3)', color: 'var(--red)'}}>Actively Building</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/SizaMpafa/vip-vibez" target="_blank" className="btn-small btn-red-outline" rel="noreferrer">GitHub</a>
            </div>
            <div className="tap-hint" style={{color: 'var(--red)'}}>👆 Tap for details</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;