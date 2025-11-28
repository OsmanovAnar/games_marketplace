import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <span className="hero-label">FEATURED RELEASE</span>
          <h1 className="hero-title">CYBERPUNK 2077:<br />PHANTOM LIBERTY</h1>
          <p className="hero-description">
            Return to the neon-soaked streets of Night City. Embark on a high-stakes mission of espionage and intrigue to save the NUSA President.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Buy Now - $29.99</button>
            <button className="btn btn-secondary">Watch Trailer</button>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
      
      <style jsx>{`
        .hero {
          height: 600px;
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.4) 50%, rgba(18, 18, 18, 0) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-label {
          color: var(--accent-secondary);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.9rem;
          margin-bottom: var(--spacing-sm);
          display: block;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xl);
          line-height: 1.6;
          text-shadow: 0 0 10px rgba(0,0,0,0.8);
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
        }

        @media (max-width: 768px) {
          .hero {
            height: 500px;
            background-position: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-overlay {
            background: linear-gradient(to top, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0.5) 100%);
          }
          
          .hero-content {
            align-self: flex-end;
            padding-bottom: var(--spacing-xl);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
