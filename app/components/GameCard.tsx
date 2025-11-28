import React from 'react';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
  price: number;
  discount?: number;
  tags?: string[];
}

const GameCard: React.FC<GameCardProps> = ({ title, image, rating, genre, price, discount, tags }) => {
  const discountedPrice = discount ? (price * (1 - discount / 100)).toFixed(2) : price.toFixed(2);

  return (
    <div className="game-card">
      <div className="card-image-wrapper">
        <Image src={image} alt={title} width={300} height={400} className="card-image" style={{objectFit: 'cover', width: '100%', height: '100%'}} />
        <div className="card-overlay">
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className={`tag tag-${tag.toLowerCase().replace(' ', '-')}`}>{tag}</span>
            ))}
          </div>
        )}
        {discount && <span className="discount-badge">-{discount}%</span>}
      </div>
      
      <div className="card-content">
        <div className="card-meta">
          <span className="genre">{genre}</span>
          <div className="rating">
            {'★'.repeat(Math.floor(rating))}
            <span className="rating-empty">{'★'.repeat(5 - Math.floor(rating))}</span>
          </div>
        </div>
        <h3 className="card-title">{title}</h3>
        <div className="card-price">
          {discount && <span className="original-price">${price}</span>}
          <span className="final-price">${discountedPrice}</span>
        </div>
      </div>

      <style jsx>{`
        .game-card {
          background-color: var(--bg-secondary);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          position: relative;
          cursor: pointer;
        }

        .game-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.4);
        }

        .card-image-wrapper {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .card-image {
          transition: transform var(--transition-normal);
        }

        .game-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .game-card:hover .card-overlay {
          opacity: 1;
        }

        .add-to-cart-btn {
          background-color: var(--accent-primary);
          color: white;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-full);
          font-weight: bold;
          transform: translateY(20px);
          transition: transform var(--transition-fast);
        }

        .game-card:hover .add-to-cart-btn {
          transform: translateY(0);
        }

        .card-tags {
          position: absolute;
          top: var(--spacing-sm);
          left: var(--spacing-sm);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .tag {
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-weight: bold;
          text-transform: uppercase;
        }

        .tag-bestseller { background-color: #ffcc00; color: black; }
        .tag-new { background-color: var(--accent-tertiary); color: black; }

        .discount-badge {
          position: absolute;
          top: var(--spacing-sm);
          right: var(--spacing-sm);
          background-color: var(--accent-secondary);
          color: black;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }

        .card-content {
          padding: var(--spacing-md);
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xs);
        }

        .rating {
          color: #ffcc00;
        }
        
        .rating-empty {
          color: #444;
        }

        .card-title {
          font-size: 1.1rem;
          margin-bottom: var(--spacing-sm);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-price {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .original-price {
          text-decoration: line-through;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .final-price {
          font-weight: bold;
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
};

export default GameCard;
