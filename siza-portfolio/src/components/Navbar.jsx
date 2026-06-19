import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  // Close menu when screen resizes to > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <nav>
        <a href="#top" className="logo" onClick={(e) => { 
          e.preventDefault(); 
          window.scrollTo({ top: 0, behavior: 'smooth' });
          closeMobileMenu();
        }}>siza m!</a>
        
        <div className="nav-right">
          <a href="/cv.pdf" download className="cv-btn-desktop">
            <span className="cv-icon">📄</span>
            <span className="cv-text">CV</span>
          </a>
          <ul className="nav-links">
            <li><a href="#story">Story</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#vipvibez">VIP VIBEZ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu – will be hidden by CSS on large screens */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="/cv.pdf" download className="cv-btn-mobile" onClick={closeMobileMenu}>
          <span>📄</span> Download CV
        </a>
        <a href="#story" onClick={closeMobileMenu}>Story</a>
        <a href="#projects" onClick={closeMobileMenu}>Work</a>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#awards" onClick={closeMobileMenu}>Awards</a>
        <a href="#vipvibez" onClick={closeMobileMenu}>VIP VIBEZ</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;