import { useState } from 'react';

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

  return (
    <>
      <nav>
        <a href="#top" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>siza m!</a>
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
      </nav>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
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