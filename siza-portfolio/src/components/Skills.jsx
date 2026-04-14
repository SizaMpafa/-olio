import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  const constellationRef = useRef(null);

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

    // Build constellation
    const skills = [
      { name: 'React', angle: 0 },
      { name: 'Vue.js', angle: 30 },
      { name: 'Angular', angle: 60 },
      { name: 'TypeScript', angle: 90 },
      { name: 'Tailwind', angle: 120 },
      { name: 'Ruby on Rails', angle: 150 },
      { name: 'Node.js', angle: 180 },
      { name: 'Python', angle: 210 },
      { name: 'C# / .NET', angle: 240 },
      { name: 'PostgreSQL', angle: 270 },
      { name: 'MongoDB', angle: 300 },
      { name: 'Git', angle: 330 }
    ];

    const constellation = constellationRef.current;
    const centerX = 500;
    const centerY = 250;
    const radius = 200;

    skills.forEach((skill) => {
      const angleRad = (skill.angle * Math.PI) / 180;
      const x = centerX + Math.cos(angleRad) * radius;
      const y = centerY + Math.sin(angleRad) * radius;
      
      const node = document.createElement('div');
      node.className = 'skill-node';
      node.textContent = skill.name;
      node.style.left = x + 'px';
      node.style.top = y + 'px';
      node.style.transform = 'translate(-50%, -50%)';
      constellation.appendChild(node);
      
      const line = document.createElement('div');
      line.className = 'constellation-line';
      const length = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const angleDeg = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI;
      line.style.width = length + 'px';
      line.style.left = centerX + 'px';
      line.style.top = centerY + 'px';
      line.style.transform = `rotate(${angleDeg}deg)`;
      constellation.insertBefore(line, constellation.firstChild);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="section-header reveal">
        <h2 className="section-title">The Arsenal</h2>
        <p className="section-subtitle">Technologies in the constellation</p>
      </div>
      <div className="constellation-container" ref={constellationRef}>
        <div className="skill-node core">Full-Stack</div>
      </div>
    </section>
  );
};

export default Skills;