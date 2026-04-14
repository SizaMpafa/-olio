import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import VipVibez from './components/VipVibez';
import Contact from './components/Contact';
import './App.css';

function App() {
useEffect(() => {
  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  
  if (cursor && cursorDot) {
    const moveCursor = (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      cursorDot.style.left = e.clientX - 2 + 'px';
      cursorDot.style.top = e.clientY - 2 + 'px';
    };
    
    document.addEventListener('mousemove', moveCursor);

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .story-card, .project-card, .skill-node, .award-card, .contact-link').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
      });
    };
    addHoverListeners();
  }

  // Escape key for mobile menu
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      document.getElementById('mobile-menu')?.classList.remove('open');
      document.getElementById('nav-toggle')?.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
  document.addEventListener('keydown', handleKeyDown);

  // Smooth scroll - only for valid hash links
  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleAnchorClick);
  });

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Awards />
      <VipVibez />
      <Contact />
      <footer>
        © 2026 SIZA MPAFA • FULL-STACK DEVELOPER • CAPE TOWN, ZA
      </footer>
    </>
  );
}

export default App;