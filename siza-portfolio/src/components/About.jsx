import { useEffect, useRef } from 'react';

const About = () => {
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
    <section className="story-section" id="story" ref={sectionRef}>
      <div className="section-header reveal">
        <h2 className="section-title">The Journey</h2>
        <p className="section-subtitle">Four chapters, one trajectory</p>
      </div>
      <div className="story-timeline">
        <div className="story-card reveal">
          <div>
            <div className="story-icon">🎵</div>
            <h3 className="story-title">Musician</h3>
            <p className="story-tagline">Started with rhythm, learned discipline</p>
            <div className="story-details">
              <p>Singer-songwriter. Built the foundation for creative thinking and emotional intelligence that now drives user-centered development.</p>
            </div>
          </div>
          <span className="story-year">'15</span>
        </div>
        <div className="story-card reveal">
          <div>
            <div className="story-icon">💻</div>
            <h3 className="story-title">Developer</h3>
            <p className="story-tagline">Found code, found purpose</p>
            <div className="story-details">
              <p>Left university, found coding through community need. UCT GSB, Le Wagon, Life Choices — three institutions, one trajectory.</p>
            </div>
          </div>
          <span className="story-year">'18</span>
        </div>
        <div className="story-card reveal">
          <div>
            <div className="story-icon">🚀</div>
            <h3 className="story-title">Builder</h3>
            <p className="story-tagline">Real apps, real impact</p>
            <div className="story-details">
              <p>Built for Ukhanyo Foundation (real client). Created M-Tutorials. Always solving problems nobody assigned.</p>
            </div>
          </div>
          <span className="story-year">'21</span>
        </div>
        <div className="story-card reveal">
          <div>
            <div className="story-icon">⚡</div>
            <h3 className="story-title">Mission</h3>
            <p className="story-tagline">VIP VIBEZ — the reason</p>
            <div className="story-details">
              <p>Building tools that help independent artists monetize before fame. Because community - algorithms.</p>
            </div>
          </div>
          <span className="story-year">Now</span>
        </div>
      </div>
    </section>
  );
};

export default About;