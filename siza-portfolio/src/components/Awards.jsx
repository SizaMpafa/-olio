import { useEffect, useRef } from 'react';

const Awards = () => {
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
    <section className="awards-section" id="awards" ref={sectionRef}>
      <div className="section-header reveal">
        <h2 className="section-title">Recognition</h2>
        <p className="section-subtitle">Earned, not given</p>
      </div>
      <div className="awards-grid">
        <div className="award-card reveal">
          <div className="award-inner">
            <div className="award-icon">🏆</div>
            <h3 className="award-name">Most Helpful Peer</h3>
            <div className="award-org">UCT GSB Solution Space<br/>Philippi Developer Programme</div>
            <p className="award-desc">Supporting fellow developers in presence and absence of facilitators — freely sharing knowledge, never gatekeeping.</p>
          </div>
        </div>
        <div className="award-card reveal">
          <div className="award-inner">
            <div className="award-icon">⭐</div>
            <h3 className="award-name">Most Progressed Peer</h3>
            <div className="award-org">UCT GSB Solution Space<br/>Philippi Developer Programme</div>
            <p className="award-desc">Most visible growth trajectory across the full programme duration. Powered by Shaper & Ayoba.</p>
          </div>
        </div>
        <div className="award-card reveal">
          <div className="award-inner">
            <div className="award-icon">⚡</div>
            <h3 className="award-name">Coding Wizard</h3>
            <div className="award-org">Life Choices YouthCode Academy</div>
            <p className="award-desc">Exceptional knowledge-sharing, peer teaching, and showing up consistently for the cohort.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;