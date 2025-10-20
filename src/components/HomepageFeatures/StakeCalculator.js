import React, { useState } from 'react';

export default function StakeCalculator() {
  const [stakeAmount, setStakeAmount] = useState('');
  const [validatorCount, setValidatorCount] = useState('');
  const [estimatedRewards, setEstimatedRewards] = useState(0);

  const calculateRewards = () => {
    const stake = parseFloat(stakeAmount) || 0;
    const validators = parseInt(validatorCount) || 1;
    // Basic calculation - this would be replaced with actual Liberdus staking logic
    const annualRewardRate = 0.08; // 8% example rate
    const rewards = stake * annualRewardRate / validators;
    setEstimatedRewards(rewards);
  };

  return (
    <div className="stake-calculator">
      <h3>Stake Calculator</h3>
      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="stake-amount">Stake Amount:</label>
          <input
            id="stake-amount"
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            placeholder="Enter stake amount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="validator-count">Number of Validators:</label>
          <input
            id="validator-count"
            type="number"
            value={validatorCount}
            onChange={(e) => setValidatorCount(e.target.value)}
            placeholder="Enter number of validators"
          />
        </div>
        <button onClick={calculateRewards}>Calculate Rewards</button>
        <div className="results">
          <p>Estimated Annual Rewards: {estimatedRewards.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}