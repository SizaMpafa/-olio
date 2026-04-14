const Hero = () => {
  return (
    <section className="hero">
      <div className="gradient-mesh"></div>
      <div className="hero-content">
        <h1 className="hero-name">Siza Mpafa</h1>
        <p className="hero-tagline">Full-Stack Developer & Builder</p>
        <a href="#projects" className="hero-cta">View My Work →</a>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;