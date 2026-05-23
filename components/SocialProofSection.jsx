import React from 'react';

export default function SocialProofSection() {
  const reviews = [
    { rating: '4.5', label: 'Excellent', source: 'Raghav Kumar', stars: 4.5 },
    { rating: '4.5', label: 'Excellent', source: 'Kiran Reddy', stars: 4.5 },
    { rating: '4.4', label: 'Excellent', source: 'Manasa Rao', stars: 4.5 }, 
    { rating: '4.5', label: 'Excellent', source: 'Priya', stars: 4.5 },
    { rating: '4.5', label: 'Excellent', source: 'Prakesh Varma', stars: 4.5 },
  ];

  // Helper to render the star icons (4 full stars, 1 half star)
  const renderStars = () => {
    return (
      <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ color: '#FFC72C', fontSize: '18px' }}>★</span>
        ))}
        {/* Half star style */}
        <span style={{ 
          position: 'relative', 
          display: 'inline-block', 
          fontSize: '18px', 
          color: '#E5E7EB', 
          width: '18px'
        }}>
          <span style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '50%', 
            overflow: 'hidden', 
            color: '#FFC72C' 
          }}>★</span>
          ★
        </span>
      </div>
    );
  };

  return (
    <section style={{
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      textAlign: 'center'
    }}>
      {/* Heading */}
      <h2 style={{
        fontSize: '28px',
        fontWeight: '700',
        color: '#001E46', 
        marginBottom: '40px',
        letterSpacing: '2px'
      }}>
        Customers and experts recommend Smartbooks ai
      </h2>

      {/* Grid Container */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly', /* Changed from center to space-evenly */
        gap: '32px',
        width: '100%', /* Added to ensure it spans the full max-width */
        margin: '0 auto'
      }}>
        {reviews.map((review, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '180px',
            textAlign: 'left'
          }}>
            {/* Rating and Stars row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '6px'
            }}>
              <span style={{
                fontWeight: '700',
                fontSize: '16px',
                color: '#001E46'
              }}>
                {review.rating} {review.label}
              </span>
              {renderStars()}
            </div>

            {/* Source domain */}
            <span style={{
              fontSize: '14px',
              color: '#001E46',
              opacity: 0.8
            }}>
              {review.source}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}