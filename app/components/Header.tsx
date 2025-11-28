import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-icon">🎮</span>
          <span className="logo-text">GAME<span className="highlight">STORE</span></span>
        </Link>

        {/* Navigation */}
        <nav className="main-nav">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="#" className="nav-link">Recommendations</Link>
          <Link href="#" className="nav-link">New</Link>
          <Link href="#" className="nav-link">Hits</Link>
        </nav>

        {/* Search */}
        <div className="search-bar">
          <input type="text" placeholder="Search games..." />
          <button className="search-btn">🔍</button>
        </div>

        {/* User Actions */}
        <div className="user-actions">
          <button className="action-btn" title="Profile">👤</button>
          <button className="action-btn" title="Wishlist">❤️</button>
          <button className="action-btn cart-btn" title="Cart">
            🛒
            <span className="cart-count">2</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: var(--spacing-md) 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--spacing-md);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--accent-primary);
        }

        .highlight {
          color: var(--accent-primary);
        }

        .main-nav {
          display: flex;
          gap: var(--spacing-lg);
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .search-bar {
          flex: 1;
          max-width: 400px;
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-bar input {
          width: 100%;
          padding: var(--spacing-sm) var(--spacing-md);
          padding-right: 40px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-family: inherit;
        }

        .search-bar input:focus {
          outline: none;
          border-color: var(--accent-primary);
        }

        .search-btn {
          position: absolute;
          right: 10px;
          color: var(--text-secondary);
        }

        .user-actions {
          display: flex;
          gap: var(--spacing-md);
        }

        .action-btn {
          font-size: 1.2rem;
          color: var(--text-primary);
          position: relative;
          transition: transform var(--transition-fast);
        }

        .action-btn:hover {
          transform: scale(1.1);
          color: var(--accent-primary);
        }

        .cart-count {
          position: absolute;
          top: -5px;
          right: -8px;
          background-color: var(--accent-primary);
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          padding: 2px 5px;
          border-radius: var(--radius-full);
        }

        @media (max-width: 768px) {
          .main-nav {
            display: none; /* Hidden on mobile for now, would add hamburger menu */
          }
          
          .search-bar {
            display: none; /* Simplify for mobile for now */
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
