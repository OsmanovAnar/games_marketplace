import React from 'react';
import GameCard from './GameCard';

const DynamicSections = () => {
  const recommendations = [
    { id: 1, title: 'Starfield', image: 'https://placehold.co/300x400/1a1a1a/FFF?text=Starfield', rating: 4.5, genre: 'RPG', price: 69.99, tags: ['Bestseller'] },
    { id: 2, title: 'Baldur\'s Gate 3', image: 'https://placehold.co/300x400/2a2a2a/FFF?text=BG3', rating: 5, genre: 'RPG', price: 59.99, tags: ['Bestseller'] },
    { id: 3, title: 'Cyberpunk 2077', image: 'https://placehold.co/300x400/3a3a3a/FFF?text=CP2077', rating: 4, genre: 'Action', price: 59.99, discount: 50 },
    { id: 4, title: 'Forza Horizon 5', image: 'https://placehold.co/300x400/4a4a4a/FFF?text=Forza', rating: 4.8, genre: 'Racing', price: 59.99 },
  ];

  const newReleases = [
    { id: 5, title: 'Assassin\'s Creed Mirage', image: 'https://placehold.co/300x400/5a5a5a/FFF?text=AC+Mirage', rating: 4.2, genre: 'Action', price: 49.99, tags: ['New'] },
    { id: 6, title: 'Spider-Man 2', image: 'https://placehold.co/300x400/6a6a6a/FFF?text=Spider-Man+2', rating: 4.9, genre: 'Action', price: 69.99, tags: ['New'] },
    { id: 7, title: 'Super Mario Wonder', image: 'https://placehold.co/300x400/7a7a7a/FFF?text=Mario', rating: 4.7, genre: 'Platformer', price: 59.99, tags: ['New'] },
    { id: 8, title: 'Alan Wake 2', image: 'https://placehold.co/300x400/8a8a8a/FFF?text=Alan+Wake+2', rating: 4.6, genre: 'Horror', price: 59.99, tags: ['New'] },
  ];

  return (
    <div className="dynamic-sections container">
      {/* Recommendations */}
      <section className="section">
        <h2 className="section-title">Recommended for You</h2>
        <div className="game-grid">
          {recommendations.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </section>

      {/* New Releases with Filters */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Hot Releases</h2>
          <div className="filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Action</button>
            <button className="filter-btn">RPG</button>
            <button className="filter-btn">Strategy</button>
          </div>
        </div>
        <div className="game-grid">
          {newReleases.map(game => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="section">
        <h2 className="section-title">Curated Collections</h2>
        <div className="collections-grid">
          <div className="collection-card indie">
            <h3>Best Indie Games</h3>
            <button className="btn-link">Explore &rarr;</button>
          </div>
          <div className="collection-card rpg">
            <h3>Epic RPG Adventures</h3>
            <button className="btn-link">Explore &rarr;</button>
          </div>
          <div className="collection-card vr">
            <h3>VR Experiences</h3>
            <button className="btn-link">Explore &rarr;</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section {
          margin-bottom: var(--spacing-2xl);
        }

        .game-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: var(--spacing-md);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }

        .filters {
          display: flex;
          gap: var(--spacing-sm);
        }

        .filter-btn {
          padding: 6px 16px;
          border-radius: var(--radius-full);
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover, .filter-btn.active {
          background-color: var(--accent-primary);
          color: white;
        }

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-md);
        }

        .collection-card {
          height: 200px;
          border-radius: var(--radius-md);
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          border: 1px solid var(--border-color);
        }

        .collection-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2));
          z-index: 1;
        }

        .collection-card h3 {
          position: relative;
          z-index: 2;
          font-size: 1.5rem;
          margin-bottom: var(--spacing-sm);
        }

        .btn-link {
          position: relative;
          z-index: 2;
          color: var(--accent-secondary);
          font-weight: bold;
        }

        .indie { background-color: #333; /* Placeholder color */ }
        .rpg { background-color: #444; /* Placeholder color */ }
        .vr { background-color: #555; /* Placeholder color */ }

        @media (max-width: 768px) {
          .game-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .game-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default DynamicSections;
