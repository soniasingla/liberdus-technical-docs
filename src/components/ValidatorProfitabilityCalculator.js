import React, { useState, useEffect } from 'react';

export default function ValidatorProfitabilityCalculator() {
  const [stakeAmountUSD, setStakeAmountUSD] = useState(50000);
  const [nodeRewardPerHour, setNodeRewardPerHour] = useState(2.50);
  const [saRatioStandby, setSaRatioStandby] = useState(2);
  const [saRatioActive, setSaRatioActive] = useState(1);
  const [hostingCosts, setHostingCosts] = useState(0.50);

  const [results, setResults] = useState({
    nodeRevenue: 0,
    nodeExpense: 0,
    incomePerDay: 0,
    incomePerMonth: 0,
    incomePerYear: 0,
    apyPercent: 0,
    activeTimePercent: 0
  });

  useEffect(() => {
    calculateProfitability();
  }, [stakeAmountUSD, nodeRewardPerHour, saRatioStandby, saRatioActive, hostingCosts]);

  const calculateProfitability = () => {
    const totalRatio = saRatioStandby + saRatioActive;
    const activeTimePercent = totalRatio > 0 ? (saRatioActive / totalRatio * 100) : 0;
    
    const nodeRevenuePerDay = (nodeRewardPerHour * 24) * (saRatioActive / totalRatio);
    const nodeExpensePerDay = hostingCosts * 24;
    const incomePerDay = nodeRevenuePerDay - nodeExpensePerDay;
    const incomePerMonth = incomePerDay * 30;
    const incomePerYear = incomePerDay * 365;
    const apyPercent = stakeAmountUSD > 0 ? (100 * incomePerDay * 365) / stakeAmountUSD : 0;

    setResults({
      nodeRevenue: nodeRevenuePerDay,
      nodeExpense: nodeExpensePerDay,
      incomePerDay,
      incomePerMonth,
      incomePerYear,
      apyPercent,
      activeTimePercent
    });
  };

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const formatPercent = (percent) => {
    return `${percent.toFixed(2)}%`;
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

  const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    alignItems: 'start'
  };

  const inputSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const resultsSectionStyle = {
    backgroundColor: 'var(--ifm-color-emphasis-100, #3a4759)',
    borderRadius: '8px',
    padding: '20px',
    border: '1px solid var(--ifm-toc-border-color, #4a5568)'
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--ifm-font-color-base, #ffffff)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '6px'
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

  const ratioSectionStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  };

  const ratioInputStyle = {
    backgroundColor: 'var(--ifm-color-emphasis-200, #4a5568)',
    border: '1px solid var(--ifm-toc-border-color, #6b7280)',
    borderRadius: '6px',
    padding: '12px',
    fontSize: '16px',
    color: 'var(--ifm-font-color-base, #ffffff)',
    width: '60px',
    textAlign: 'center'
  };

  const ratioTextStyle = {
    fontSize: '16px',
    color: 'var(--ifm-color-emphasis-700, #9ca3af)'
  };

  const resultTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: 'var(--ifm-font-color-base, #ffffff)'
  };

  const resultItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid var(--ifm-toc-border-color, #4a5568)'
  };

  const resultLabelStyle = {
    fontSize: '16px',
    color: 'var(--ifm-font-color-base, #ffffff)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  const resultValueStyle = {
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const noteStyle = {
    fontSize: '14px',
    color: 'var(--ifm-color-emphasis-700, #9ca3af)',
    lineHeight: '1.5',
    marginTop: '16px'
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

  const getValueColor = (value) => {
    if (value > 0) return '#10b981'; // green
    if (value < 0) return '#ef4444'; // red
    return '#6366f1'; // blue
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Validator Profitability Calculator</h3>
      
      <div style={mainContentStyle}>
        <div style={inputSectionStyle}>
          <div>
            <label style={labelStyle}>
              Stake Amount ($USD) 
              <span style={infoIconStyle}>i</span>
            </label>
            <input 
              type="number"
              value={stakeAmountUSD}
              onChange={(e) => setStakeAmountUSD(parseFloat(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>
              Node Reward ($/hr) 
              <span style={infoIconStyle}>i</span>
            </label>
            <input 
              type="number"
              step="0.01"
              value={nodeRewardPerHour}
              onChange={(e) => setNodeRewardPerHour(parseFloat(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>
              S:A Ratio 
              <span style={infoIconStyle}>i</span>
            </label>
            <div style={ratioSectionStyle}>
              <input 
                type="number"
                value={saRatioStandby}
                onChange={(e) => setSaRatioStandby(parseFloat(e.target.value) || 0)}
                style={ratioInputStyle}
              />
              <span style={ratioTextStyle}>:</span>
              <input 
                type="number"
                value={saRatioActive}
                onChange={(e) => setSaRatioActive(parseFloat(e.target.value) || 0)}
                style={ratioInputStyle}
              />
            </div>
            <div style={{...ratioTextStyle, fontSize: '14px', marginTop: '4px'}}>
              ({saRatioStandby}:{saRatioActive} = {results.activeTimePercent.toFixed(0)}% active time)
            </div>
          </div>

          <div>
            <label style={labelStyle}>
              Hosting Costs ($/hr) 
              <span style={infoIconStyle}>i</span>
            </label>
            <input 
              type="number"
              step="0.01"
              value={hostingCosts}
              onChange={(e) => setHostingCosts(parseFloat(e.target.value) || 0)}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={resultsSectionStyle}>
          <h4 style={resultTitleStyle}>Profitability Analysis</h4>
          
          <div style={resultItemStyle}>
            <span style={resultLabelStyle}>
              Node Revenue/day: 
              <span style={infoIconStyle}>i</span>
            </span>
            <span style={{...resultValueStyle, color: getValueColor(results.nodeRevenue)}}>
              {formatCurrency(results.nodeRevenue)}
            </span>
          </div>

          <div style={resultItemStyle}>
            <span style={resultLabelStyle}>
              Node Expense/day: 
              <span style={infoIconStyle}>i</span>
            </span>
            <span style={{...resultValueStyle, color: '#ef4444'}}>
              {formatCurrency(results.nodeExpense)}
            </span>
          </div>

          <div style={resultItemStyle}>
            <span style={resultLabelStyle}>
              Income/day: 
              <span style={infoIconStyle}>i</span>
            </span>
            <span style={{...resultValueStyle, color: getValueColor(results.incomePerDay)}}>
              {formatCurrency(results.incomePerDay)}
            </span>
          </div>

          <div style={resultItemStyle}>
            <span style={resultLabelStyle}>
              Income/month: 
              <span style={infoIconStyle}>i</span>
            </span>
            <span style={{...resultValueStyle, color: getValueColor(results.incomePerMonth)}}>
              {formatCurrency(results.incomePerMonth)}
            </span>
          </div>

          <div style={resultItemStyle}>
            <span style={resultLabelStyle}>
              Income/year: 
              <span style={infoIconStyle}>i</span>
            </span>
            <span style={{...resultValueStyle, color: getValueColor(results.incomePerYear)}}>
              {formatCurrency(results.incomePerYear)}
            </span>
          </div>

          <div style={{...resultItemStyle, borderBottom: 'none', marginBottom: '16px'}}>
            <span style={resultLabelStyle}>
              APY: 
              <span style={infoIconStyle}>i</span>
            </span>
            <span style={{...resultValueStyle, color: getValueColor(results.apyPercent), fontSize: '18px'}}>
              {formatPercent(results.apyPercent)}
            </span>
          </div>

          <div style={noteStyle}>
            <strong>Note:</strong> S:A Ratio determines how often your 
            validator is active. A ratio of 2:1 means you're active 
            ~33% of the time.
          </div>
        </div>
      </div>
    </div>
  );
}