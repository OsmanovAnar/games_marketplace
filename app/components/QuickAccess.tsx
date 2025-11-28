import React from 'react';
import Image from 'next/image';

const QuickAccess = () => {
  return (
    <section className="quick-access container">
      {/* Daily Deal */}
      <div className="deal-card">
        <div className="deal-info">
          <div className="deal-header">
            <span className="deal-badge">DAILY DEAL</span>
            <div className="timer">08:45:12</div>
          </div>
          <h3 className="deal-title">Elden Ring</h3>
          <div className="deal-price">
            <span className="old-price">$59.99</span>
            <span className="new-price">$29.99</span>
            <span className="discount">-50%</span>
          </div>
          <button className="btn btn-primary deal-btn">Buy Now</button>
        </div>
        <div className="deal-image">
           <Image src="/daily-deal.png" alt="Elden Ring" width={300} height={200} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
        </div>
      </div>

      {/* Free/Demo */}
      <div className="demo-card">
        <div className="demo-content">
          <h3 className="demo-title">Play for Free</h3>
          <p className="demo-desc">Try the latest demos and free-to-play hits.</p>
          <div className="demo-list">
             <div className="demo-item">
                <div className="demo-thumb">
                    {/* Placeholder for demo thumb */}
                    <div className="thumb-placeholder">🎮</div>
                </div>
                <div className="demo-details">
                    <h4>Hades II</h4>
                    <button className="btn-text">Download Demo</button>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .quick-access {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-md);
          margin-top: -50px; /* Overlap hero */
          position: relative;
          z-index: 10;
          margin-bottom: var(--spacing-2xl);
        }

        .deal-card, .demo-card {
          background-color: var(--bg-secondary);
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .deal-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, #252525 100%);
        }

        .deal-info {
            flex: 1;
        }

        .deal-header {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-sm);
        }

        .deal-badge {
            background-color: var(--accent-primary);
            color: white;
            padding: 2px 8px;
            border-radius: var(--radius-sm);
            font-size: 0.8rem;
            font-weight: bold;
        }

        .timer {
            font-family: monospace;
            color: var(--text-secondary);
        }

        .deal-title {
            font-size: 1.8rem;
            margin-bottom: var(--spacing-sm);
        }

        .deal-price {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-md);
        }

        .old-price {
            text-decoration: line-through;
            color: var(--text-muted);
        }

        .new-price {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--accent-secondary);
        }

        .discount {
            background-color: var(--accent-secondary);
            color: black;
            padding: 2px 6px;
            border-radius: var(--radius-sm);
            font-weight: bold;
        }

        .deal-image {
            width: 200px;
            height: 120px;
            border-radius: var(--radius-sm);
            overflow: hidden;
            margin-left: var(--spacing-md);
            position: relative;
        }

        .demo-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .demo-title {
            font-size: 1.2rem;
            margin-bottom: var(--spacing-xs);
        }
        
        .demo-desc {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: var(--spacing-md);
        }

        .demo-list {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
        }

        .demo-item {
            display: flex;
            gap: var(--spacing-sm);
            align-items: center;
            background-color: rgba(255,255,255,0.05);
            padding: var(--spacing-sm);
            border-radius: var(--radius-sm);
        }

        .demo-thumb {
            width: 50px;
            height: 50px;
            border-radius: var(--radius-sm);
            overflow: hidden;
            flex-shrink: 0;
        }
        
        .thumb-placeholder {
            width: 100%;
            height: 100%;
            background-color: var(--bg-tertiary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .demo-details h4 {
            font-size: 1rem;
            margin-bottom: 2px;
        }

        .btn-text {
            color: var(--accent-tertiary);
            font-weight: bold;
            font-size: 0.8rem;
            padding: 0;
        }
        
        .btn-text:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .quick-access {
                grid-template-columns: 1fr;
                margin-top: var(--spacing-md);
            }
            
            .deal-card {
                flex-direction: column-reverse;
                text-align: center;
            }
            
            .deal-image {
                width: 100%;
                height: 150px;
                margin-left: 0;
                margin-bottom: var(--spacing-md);
            }
            
            .deal-header {
                justify-content: center;
            }
            
            .deal-price {
                justify-content: center;
            }
        }
      `}</style>
    </section>
  );
};

export default QuickAccess;
