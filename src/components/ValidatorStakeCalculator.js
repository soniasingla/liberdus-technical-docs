import React, { useState, useEffect } from 'react';

export default function ValidatorStakeCalculator() {
  const [libTokenPrice, setLibTokenPrice] = useState(0.50);
  const [libTokensRequired, setLibTokensRequired] = useState(4000);
  
  const minimumStakeUSD = 2000;

  useEffect(() => {
    calculateStakeRequirement();
  }, [libTokenPrice]);

  const calculateStakeRequirement = () => {
    if (libTokenPrice > 0) {
      const tokensRequired = minimumStakeUSD / libTokenPrice;
      setLibTokensRequired(Math.round(tokensRequired));
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const containerStyle = {
    backgroundColor: 'var(--ifm-card-background-color, #2c3748)',
    borderRadius: '12px',
    padding: '20px',
    margin: '16px 0',
    color: 'var(--ifm-font-color-base, #ffffff)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '100%',
    border: '1px solid var(--ifm-toc-border-color, #3a4759)'
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: 'var(--ifm-font-color-base, #ffffff)'
  };

  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    alignItems: 'start'
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr'
    }
  };

  const leftSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const rightSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const cardStyle = {
    backgroundColor: 'var(--ifm-color-emphasis-100, #3a4759)',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid var(--ifm-toc-border-color, #4a5568)'
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: 'var(--ifm-font-color-base, #ffffff)'
  };

  const cardValueStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  const cardSubtitleStyle = {
    fontSize: '14px',
    color: 'var(--ifm-color-emphasis-700, #9ca3af)',
    marginBottom: '0'
  };

  const inputSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--ifm-font-color-base, #ffffff)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  const inputStyle = {
    backgroundColor: 'var(--ifm-color-emphasis-200, #4a5568)',
    border: '1px solid var(--ifm-toc-border-color, #6b7280)',
    borderRadius: '6px',
    padding: '12px',
    fontSize: '16px',
    color: 'var(--ifm-font-color-base, #ffffff)',
    width: '100%'
  };

  const buttonSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const buttonStyle = {
    backgroundColor: '#6366f1',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px'
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: '#6366f1',
    border: '2px solid #6366f1',
    borderRadius: '6px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px'
  };

  const noteStyle = {
    fontSize: '14px',
    color: 'var(--ifm-color-emphasis-700, #9ca3af)',
    lineHeight: '1.5',
    marginTop: '16px',
    textAlign: 'left'
  };

  const infoIconStyle = {
    width: '16px',
    height: '16px',
    backgroundColor: '#6366f1',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#ffffff'
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Validator Stake Calculator</h3>
      
      <div style={sectionStyle}>
        <div style={leftSectionStyle}>
          <div style={cardStyle}>
            <h4 style={cardTitleStyle}>Minimum Stake Required</h4>
            <div style={{...cardValueStyle, color: '#6366f1'}}>$2,000 USD</div>
            <p style={cardSubtitleStyle}>Required to become a validator</p>
          </div>

          <div style={inputSectionStyle}>
            <label style={labelStyle}>
              LIB Token Price ($USD) 
              <span style={infoIconStyle}>i</span>
            </label>
            <input 
              type="number" 
              step="0.001"
              value={libTokenPrice}
              onChange={(e) => setLibTokenPrice(parseFloat(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={rightSectionStyle}>
          <div style={cardStyle}>
            <h4 style={cardTitleStyle}>LIB Tokens Required</h4>
            <div style={{...cardValueStyle, color: '#6366f1'}}>{formatNumber(libTokensRequired)} LIB</div>
            <p style={cardSubtitleStyle}>Tokens needed for validator stake</p>
          </div>

          <div style={buttonSectionStyle}>
            <h4 style={{...cardTitleStyle, fontSize: '16px', marginBottom: '12px'}}>Get LIB Tokens</h4>
            
            <button style={buttonStyle}>
              <span>🏪</span>
              LiberdusOTC Platform ↗
            </button>
            
            <button style={secondaryButtonStyle}>
              <span>📊</span>
              View on DEXScreener ↗
            </button>
          </div>
        </div>
      </div>

      <div style={noteStyle}>
        <strong>Note:</strong> Token prices are subject to market fluctuations. The $2,000 USD minimum stake requirement remains 
        constant, but the number of LIB tokens needed will vary based on current market price.
      </div>
    </div>
  );
}