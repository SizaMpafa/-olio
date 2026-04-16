import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  const constellationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

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
    const isMobileView = window.innerWidth <= 768;
    
    // Clear previous content
    constellation.innerHTML = '';
    
    if (isMobileView) {
      // MOBILE: 9-pointed star design
      const centerX = 150; // Smaller center for mobile
      const centerY = 150;
      const starRadius = 80; // Distance from center to star points
      
      // Create 9-pointed star SVG
      const starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      starSvg.setAttribute('class', 'nine-pointed-star');
      starSvg.setAttribute('viewBox', '0 0 300 300');
      starSvg.style.position = 'absolute';
      starSvg.style.left = '50%';
      starSvg.style.top = '50%';
      starSvg.style.transform = 'translate(-50%, -50%)';
      starSvg.style.width = '200px';
      starSvg.style.height = '200px';
      starSvg.style.zIndex = '1';
      
      // Generate 9-pointed star path
      let starPath = '';
      const outerRadius = 100;
      const innerRadius = 40;
      
      for (let i = 0; i < 18; i++) {
        const angle = (i * 20 - 90) * Math.PI / 180; // 9 points = 18 vertices (outer/inner)
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = 150 + Math.cos(angle) * radius;
        const y = 150 + Math.sin(angle) * radius;
        starPath += (i === 0 ? 'M' : 'L') + ` ${x},${y}`;
      }
      starPath += 'Z';
      
      const starPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      starPolygon.setAttribute('d', starPath);
      starPolygon.setAttribute('fill', 'rgba(168, 85, 247, 0.15)');
      starPolygon.setAttribute('stroke', 'var(--accent)');
      starPolygon.setAttribute('stroke-width', '2');
      starSvg.appendChild(starPolygon);
      constellation.appendChild(starSvg);
      
      // Center "Full-Stack" text
      const coreNode = document.createElement('div');
      coreNode.className = 'skill-node core mobile-core';
      coreNode.textContent = 'Full-Stack';
      coreNode.style.left = '50%';
      coreNode.style.top = '50%';
      coreNode.style.transform = 'translate(-50%, -50%)';
      coreNode.style.zIndex = '2';
      coreNode.style.fontSize = '0.75rem';
      coreNode.style.padding = '0.5rem 1rem';
      constellation.appendChild(coreNode);
      
      // Position 12 skills around the star (every 30 degrees)
      const skillRadius = 130; // Distance from center to skills
      
      skills.forEach((skill, index) => {
        const angleDeg = index * 30; // 360 / 12 = 30 degrees each
        const angleRad = (angleDeg - 90) * Math.PI / 180; // -90 to start from top
        const x = centerX + Math.cos(angleRad) * skillRadius;
        const y = centerY + Math.sin(angleRad) * skillRadius;
        
        const node = document.createElement('div');
        node.className = 'skill-node mobile-skill';
        node.textContent = skill.name;
        node.style.left = x + 'px';
        node.style.top = y + 'px';
        node.style.transform = 'translate(-50%, -50%)';
        node.style.fontSize = '0.65rem';
        node.style.padding = '0.4rem 0.8rem';
        constellation.appendChild(node);
        
        // Draw line from star edge to skill
        const line = document.createElement('div');
        line.className = 'constellation-line mobile-line';
        
        // Calculate star edge point (approximate)
        const starEdgeAngle = angleRad;
        const starEdgeX = centerX + Math.cos(starEdgeAngle) * (outerRadius * 0.8);
        const starEdgeY = centerY + Math.sin(starEdgeAngle) * (outerRadius * 0.8);
        
        const dx = x - starEdgeX;
        const dy = y - starEdgeY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const lineAngle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        line.style.width = length + 'px';
        line.style.left = starEdgeX + 'px';
        line.style.top = starEdgeY + 'px';
        line.style.transform = `rotate(${lineAngle}deg)`;
        line.style.opacity = '0.3';
        constellation.insertBefore(line, constellation.firstChild);
      });
      
    } else {
      // DESKTOP: Original circular constellation
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
      
      // Desktop center node
      const coreNode = document.createElement('div');
      coreNode.className = 'skill-node core';
      coreNode.textContent = 'Full-Stack';
      coreNode.style.left = '50%';
      coreNode.style.top = '50%';
      coreNode.style.transform = 'translate(-50%, -50%)';
      constellation.appendChild(coreNode);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="section-header reveal">
        <h2 className="section-title">The Arsenal</h2>
        <p className="section-subtitle">Technologies in the constellation</p>
      </div>
      <div className={`constellation-container ${isMobile ? 'mobile-constellation' : ''}`} ref={constellationRef}>
        {/* Content injected by JavaScript */}
      </div>
    </section>
  );
};

export default Skills;