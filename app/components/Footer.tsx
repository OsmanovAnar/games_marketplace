import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4 className="footer-title">GAME<span className="highlight">STORE</span></h4>
          <p className="footer-desc">Your ultimate destination for the latest and greatest video games.</p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Shop</h4>
          <ul className="footer-links">
            <li><Link href="#">New Releases</Link></li>
            <li><Link href="#">Bestsellers</Link></li>
            <li><Link href="#">Deals</Link></li>
            <li><Link href="#">Coming Soon</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Support</h4>
          <ul className="footer-links">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Order Status</Link></li>
            <li><Link href="#">Returns</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; 2024 GameStore. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: var(--spacing-2xl) 0 var(--spacing-md);
          margin-top: var(--spacing-2xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .footer-title {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .highlight {
          color: var(--accent-primary);
        }

        .footer-desc {
          color: var(--text-secondary);
          max-width: 300px;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: var(--spacing-sm);
        }

        .footer-links a {
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: var(--spacing-md);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-desc {
            margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
