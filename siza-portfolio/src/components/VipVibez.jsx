import { useEffect, useRef, useState, useCallback } from 'react';

const VipVibez = () => {
  const sectionRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const START_TIME = 99.98;
  const END_TIME = 124.61;

  // Start audio function
  const startAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audioLoaded) return;
    
    if (audio.currentTime < START_TIME || audio.currentTime >= END_TIME) {
      audio.currentTime = START_TIME;
    }
    
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch((err) => {
      console.log('Audio play failed:', err);
    });
  }, [audioLoaded]);

  // Stop audio function
  const stopAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.pause();
    setIsPlaying(false);
  }, []);

  // Toggle audio on button click
  const toggleAudio = () => {
    if (isPlaying) {
      setManuallyPaused(true);
      stopAudio();
    } else {
      setManuallyPaused(false);
      startAudio();
    }
  };

  // Setup audio element and observers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial time when loaded
    const handleLoaded = () => {
      audio.currentTime = START_TIME;
      setAudioLoaded(true);
    };

    // Loop between timestamps
    const handleTimeUpdate = () => {
      if (audio.currentTime >= END_TIME) {
        audio.currentTime = START_TIME;
      }
    };

    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    // Intersection Observer for section visibility
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          // Section is visible - start audio if not manually paused
          if (!manuallyPaused && audioLoaded) {
            startAudio();
          }
        } else {
          // Section not visible - stop audio and reset manual pause
          stopAudio();
          setManuallyPaused(false);
        }
      });
    }, { threshold: [0, 0.3, 1] });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Scroll reveal observer
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    reveals?.forEach(el => revealObserver.observe(el));

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [manuallyPaused, audioLoaded, startAudio, stopAudio]);

  return (
    <section className="vip-section" id="vipvibez" ref={sectionRef}>
      <div className="section-header reveal">
        <h2 className="section-title" style={{background: 'linear-gradient(135deg, var(--text-primary), var(--red))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>The Project Behind Everything</h2>
      </div>
      <div className="vip-inner reveal">
        <div className="vip-player" onClick={toggleAudio}>
          <div className={`vip-player-btn ${isPlaying ? 'playing' : ''}`}>
            <span className="icon-play">▶</span>
            <span className="icon-pause">⏸</span>
          </div>
        </div>
        <div className={`vip-now-playing ${isPlaying ? 'visible' : ''}`}>▶ Find My Path • SIZA M</div>
        <audio ref={audioRef} loop preload="auto">
          <source src="https://github.com/SizaMpafa/-olio/raw/refs/heads/main/SIZA%20M%20-%20find%20my%20path%20verse.mp3" type="audio/mpeg" />
        </audio>
        <p className="vip-hook">Before the bootcamps. Before the awards. Before the internship. <strong>There was a reason.</strong></p>
        <p className="vip-body"><strong>VIP VIBEZ</strong> was born from watching talented musicians — people with genuine artistry — nearly walk away from music because the money wasn't coming fast enough. They were paying studio fees, building audiences slowly, and still couldn't convert passion into income unless they were already famous.</p>
        <p className="vip-body">Siza, better known as <a href="https://open.spotify.com/artist/09043Me7sfMUoaxtRkygnU?si=Ui4lUmyITWiN8pvIDAGhow" target="_blank" className="artist-link" rel="noreferrer">SIZA M</a>, is a singer-songwriter. <strong>He knows this from the inside.</strong></p>
        <p className="vip-body">VIP VIBEZ is being built to change that — a platform that gives independent artists the tools to make their fans feel seen, valued, and connected. <strong>Not after fame. Now.</strong></p>
        <div className="vip-quote">"Make your fans feel special, give them a VIP treatment, so they'll give you their all."</div>
        <div className="vip-status">// Currently in development</div>
        <div className="vip-cta">
          <a href="https://github.com/SizaMpafa/vip-vibez" target="_blank" className="btn-small btn-red-outline" rel="noreferrer">GitHub</a>
          <a href="#contact" className="btn-small btn-red">Get Notified</a>
        </div>
      </div>
    </section>
  );
};

export default VipVibez;